export type Message = {
  id: string;
  sender: 'bot' | 'user';
  text?: string;
  options?: { label: string; action: string }[];
  isForm?: boolean;
  nextAction?: string;
  expects?: keyof FormDataState;
};

export type FormDataState = {
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  query: string;
};

export const FLOW = {
  init: {
    text: "Hi, welcome to Talent Frontier.\n\nHow can we help you today?",
    options: [
      { label: "Grow my business", action: "grow_business" },
      { label: "Improve my operations", action: "improve_ops" },
      { label: "Explore how you can help", action: "explore_help" },
      { label: "Other", action: "other_help" }
    ]
  },
  grow_business: {
    text: "Great. What are you mainly looking to achieve?",
    options: [
      { label: "Scale the business", action: "focus_first" },
      { label: "Improve performance", action: "focus_first" },
      { label: "Build better processes", action: "focus_first" },
      { label: "Other", action: "focus_first" }
    ]
  },
  focus_first: {
    text: "What would you like to focus on first?",
    options: [
      { label: "People & Operations", action: "transition_to_contact" },
      { label: "Technology & AI", action: "transition_to_contact" },
      { label: "Finance", action: "transition_to_contact" },
      { label: "Other", action: "transition_to_contact" }
    ]
  },
  improve_ops: {
    text: "Absolutely. Where are you seeing the biggest opportunity?",
    options: [
      { label: "Processes & Automation", action: "transition_to_contact" },
      { label: "People & Operations", action: "transition_to_contact" },
      { label: "Technology", action: "transition_to_contact" },
      { label: "Other", action: "transition_to_contact" }
    ]
  },
  explore_help: {
    text: "Of course. I can show you how Talent Frontier supports businesses across different areas.",
    options: [
      { label: "What do you do?", action: "about_us" },
      { label: "Our services", action: "services" },
      { label: "How it works", action: "how_it_works" },
      { label: "Other", action: "transition_to_contact" }
    ]
  },
  about_us: {
    text: "We help businesses overcome growth hurdles through tailored talent and advisory solutions.",
    options: [
      { label: "See Services", action: "services" },
      { label: "Speak to us", action: "transition_to_contact" }
    ]
  },
  services: {
    text: "We offer Executive Search, Leadership Advisory, and Process Optimization.",
    options: [
      { label: "Executive Search", action: "transition_to_contact" },
      { label: "Leadership Advisory", action: "transition_to_contact" },
      { label: "Other", action: "transition_to_contact" }
    ]
  },
  how_it_works: {
    text: "We partner closely to map your challenges, deploy expert resources, and measure success.",
    options: [
      { label: "Let's start", action: "transition_to_contact" },
      { label: "I need more info", action: "transition_to_contact" }
    ]
  },
  other_help: {
    text: "I'd love to learn more. What is your primary challenge right now?",
    options: [
      { label: "Finding right talent", action: "transition_to_contact" },
      { label: "Process inefficiency", action: "transition_to_contact" },
      { label: "Just exploring", action: "transition_to_contact" }
    ]
  },
  transition_to_contact: {
    text: "I think I have a good understanding of what you're looking for. To help us connect you with the right person, may I have your full name?",
    expects: "name",
    nextAction: "ask_email"
  },
  ask_email: {
    text: "Thanks! What is your work email address?",
    expects: "email",
    nextAction: "ask_phone"
  },
  ask_phone: {
    text: "Got it. And what is your contact number?",
    expects: "phone",
    nextAction: "contact_method"
  },
  contact_method: {
    text: "Thank you. How would you like our Senior Partner to reach out to you?",
    options: [
      { label: "Email", action: "continue_email" },
      { label: "WhatsApp", action: "continue_whatsapp" },
      { label: "Phone Call", action: "continue_call" }
    ]
  },
  continue_email: {
    text: "Perfect! We have securely received your details. Our Senior Partner will reach out via Email shortly.\n\nOpening your email client just in case you'd like to send us an additional message right away... (If it didn't open automatically, please email us directly at admin@talentfrontier.com.au)"
  },
  continue_whatsapp: {
    text: "Perfect! We have securely received your details. Our Senior Partner will reach out via WhatsApp shortly."
  },
  continue_call: {
    text: "Perfect! We have securely received your details. Our Senior Partner will call you shortly."
  },
  end_chat: {
    text: "No problem! You can always browse our website or email us directly at admin@talentfrontier.com.au. Have a great day!"
  }
};
