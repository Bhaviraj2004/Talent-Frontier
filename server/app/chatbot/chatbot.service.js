const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const OpenAI = require('openai');
const { SYSTEM_PROMPT } = require('./chatbot.prompts');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateEmbedding(text) {
  const response = await openai.embeddings.create({
    model: "text-embedding-ada-002",
    input: text,
  });
  return response.data[0].embedding;
}

// Add a new chunk of knowledge to the DB
async function addServiceChunk(content) {
  const embedding = await generateEmbedding(content);
  
  // Using raw query to insert vector since Prisma doesn't fully support creating it via ORM easily yet.
  // We format the array to a pgvector string '[0.1, 0.2, ...]'
  const embeddingString = `[${embedding.join(',')}]`;
  
  await prisma.$executeRaw`
    INSERT INTO "ServiceChunk" (id, content, embedding, "updatedAt")
    VALUES (gen_random_uuid()::text, ${content}, ${embeddingString}::vector, NOW())
  `;
  
  return { success: true, message: "Chunk added to knowledge base" };
}

// Ask a question to the bot
async function askQuestion(query) {
  // 1. Generate embedding for the user's query
  const queryEmbedding = await generateEmbedding(query);
  const queryEmbeddingString = `[${queryEmbedding.join(',')}]`;

  // 2. Search PostgreSQL for the most relevant chunk using cosine distance (<->)
  // Limit to top 2 relevant chunks
  const matches = await prisma.$queryRaw`
    SELECT id, content, 1 - (embedding <-> ${queryEmbeddingString}::vector) as similarity
    FROM "ServiceChunk"
    WHERE 1 - (embedding <-> ${queryEmbeddingString}::vector) > 0.75
    ORDER BY embedding <-> ${queryEmbeddingString}::vector
    LIMIT 2;
  `;

  let context = "";
  if (matches && matches.length > 0) {
    context = matches.map(m => m.content).join("\n\n");
  }

  // 3. Format prompt and ask OpenAI
  const formattedPrompt = SYSTEM_PROMPT
    .replace('{context}', context || "No specific service information found for this query.")
    .replace('{query}', query);

  const completion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: formattedPrompt },
    ],
    temperature: 0.2, // Low temperature for more factual answers
  });

  return completion.choices[0].message.content;
}

async function saveLead(name, email, phone, query) {
  const lead = await prisma.chatLead.create({
    data: {
      name,
      email,
      phone,
      query,
    }
  });
  return lead;
}

module.exports = {
  addServiceChunk,
  askQuestion,
  saveLead
};
