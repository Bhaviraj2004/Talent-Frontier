const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getInsights = async (req, res) => {
  try {
    const insights = await prisma.insight.findMany({
      orderBy: { createdAt: 'desc' },
      include: { author: { select: { email: true } } }
    });
    res.status(200).json({ success: true, insights });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch insights' });
  }
};

const getInsightById = async (req, res) => {
  try {
    const insight = await prisma.insight.findUnique({
      where: { id: req.params.id },
      include: { author: { select: { email: true } } }
    });
    if (!insight) return res.status(404).json({ error: 'Insight not found' });
    res.status(200).json({ success: true, insight });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch insight' });
  }
};

const createInsight = async (req, res) => {
  try {
    const { title, description, content, published, isFeatured, isRecommended, imageUrl } = req.body;

    const insight = await prisma.insight.create({
      data: {
        title,
        description,
        content,
        imageUrl,
        published: published === 'true' || published === true,
        isFeatured: isFeatured === 'true' || isFeatured === true,
        isRecommended: isRecommended === 'true' || isRecommended === true,
        authorId: req.user.id
      }
    });

    res.status(201).json({ success: true, insight });
  } catch (error) {
    console.error('Create insight error:', error);
    res.status(500).json({ error: 'Failed to create insight' });
  }
};

const updateInsight = async (req, res) => {
  try {
    const { title, description, content, published, isFeatured, isRecommended, imageUrl } = req.body;
    const updateData = { 
      title, 
      description, 
      content, 
      published: published === 'true' || published === true,
      isFeatured: isFeatured === 'true' || isFeatured === true,
      isRecommended: isRecommended === 'true' || isRecommended === true
    };

    if (imageUrl !== undefined) {
      updateData.imageUrl = imageUrl;
    }

    const insight = await prisma.insight.update({
      where: { id: req.params.id },
      data: updateData
    });

    res.status(200).json({ success: true, insight });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update insight' });
  }
};

const deleteInsight = async (req, res) => {
  try {
    await prisma.insight.delete({
      where: { id: req.params.id }
    });
    res.status(200).json({ success: true, message: 'Insight deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete insight' });
  }
};

const toggleInsightFlag = async (req, res) => {
  try {
    const { flag, value } = req.body;
    if (!['published', 'isFeatured', 'isRecommended'].includes(flag)) {
      return res.status(400).json({ error: 'Invalid flag' });
    }
    const insight = await prisma.insight.update({
      where: { id: req.params.id },
      data: { [flag]: value === 'true' || value === true }
    });
    res.status(200).json({ success: true, insight });
  } catch (error) {
    res.status(500).json({ error: 'Failed to toggle flag' });
  }
};

module.exports = {
  getInsights,
  getInsightById,
  createInsight,
  updateInsight,
  deleteInsight,
  toggleInsightFlag
};
