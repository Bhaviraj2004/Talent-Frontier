export type Message = {
  id: string;
  sender: 'bot' | 'user';
  text?: string;
  options?: { label: string; action: string }[];
  isForm?: boolean;
  nextAction?: string;
  expects?: keyof FormDataState;
  inputType?: 'text' | 'email' | 'tel';
  placeholder?: string;
  isError?: boolean;
};

export type FormDataState = {
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  query: string;
};

export type ValidationResult = {
  isValid: boolean;
  error?: string;
};

export type FieldValidator = (value: string) => ValidationResult;

export type FlowNode = {
  text: string;
  options?: { label: string; action: string }[];
  isForm?: boolean;
  nextAction?: string;
  expects?: keyof FormDataState;
  inputType?: 'text' | 'email' | 'tel';
  placeholder?: string;
};

// ==========================================
// VALIDATION LOGIC FOR FORM INPUTS
// ==========================================

export const validateName = (name: string): ValidationResult => {
  const trimmed = (name || '').trim();
  if (!trimmed) {
    return { isValid: false, error: 'Please enter your full name.' };
  }
  if (trimmed.length < 2) {
    return { isValid: false, error: 'Name must be at least 2 characters long.' };
  }
  if (trimmed.length > 70) {
    return { isValid: false, error: 'Name cannot exceed 70 characters.' };
  }
  // Allow letters, accented characters, spaces, hyphens, periods, and apostrophes
  const nameRegex = /^[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF\s.'’-]+$/;
  if (!nameRegex.test(trimmed)) {
    return { isValid: false, error: 'Please enter a valid name using letters only (no numbers or special symbols).' };
  }
  const letterCount = (trimmed.match(/[a-zA-Z\u00C0-\u024F\u1E00-\u1EFF]/g) || []).length;
  if (letterCount < 2) {
    return { isValid: false, error: 'Please enter a valid full name with at least 2 letters.' };
  }
  return { isValid: true };
};

export const validateEmail = (email: string): ValidationResult => {
  const trimmed = (email || '').trim();
  if (!trimmed) {
    return { isValid: false, error: 'Please enter your work email address.' };
  }
  if (trimmed.length > 100) {
    return { isValid: false, error: 'Email address cannot exceed 100 characters.' };
  }
  // Standard email validation (RFC 5322 compatible regex)
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(trimmed) || trimmed.includes('..')) {
    return { isValid: false, error: 'Please enter a valid work email address (e.g., name@company.com).' };
  }
  return { isValid: true };
};

export const validatePhone = (phone: string): ValidationResult => {
  const trimmed = (phone || '').trim();
  if (!trimmed) {
    return { isValid: false, error: 'Please enter your contact number.' };
  }
  // Allow digits, spaces, hyphens, parentheses, and optional leading +
  const allowedChars = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
  const digits = trimmed.replace(/\D/g, '');

  if (!allowedChars.test(trimmed) || digits.length < 7 || digits.length > 15) {
    return {
      isValid: false,
      error: 'Please enter a valid contact number (7 to 15 digits, e.g., +61 400 000 000).'
    };
  }
  return { isValid: true };
};

export const validateQuery = (query: string): ValidationResult => {
  const trimmed = (query || '').trim();
  if (!trimmed) {
    return { isValid: false, error: 'Please enter your inquiry or question.' };
  }
  return { isValid: true };
};

export const FIELD_VALIDATORS: Partial<Record<keyof FormDataState, FieldValidator>> = {
  name: validateName,
  email: validateEmail,
  phone: validatePhone,
  query: validateQuery
};

export const validateField = (
  field: keyof FormDataState,
  value: string
): ValidationResult => {
  const validator = FIELD_VALIDATORS[field];
  if (!validator) {
    if (!value || !value.trim()) {
      return { isValid: false, error: 'This field cannot be empty.' };
    }
    return { isValid: true };
  }
  return validator(value);
};

// ==========================================
// CHAT FLOW CONVERSATION TREE
// ==========================================

export const FLOW: Record<string, FlowNode> = {
  init: {
    text: "Hi, welcome to Talent Frontier.\n\nHow can we help you today?",
    options: [
      { label: "Grow my business", action: "grow_business" },
      { label: "Improve my operations", action: "improve_ops" },
      { label: "Explore how you can help", action: "explore_help" },
      { label: "Find your business talent", action: "find_business_talent" },
      { label: "Other", action: "other_help" }
    ]
  },
  find_business_talent: {
    text: "Finding the right talent is crucial for growth. We specialize in sourcing top-tier professionals across various domains.\n\nWhich area are you looking to hire for?",
    options: [
      { label: "Executive & Leadership", action: "talent_specific" },
      { label: "IT & AI Experts", action: "talent_specific" },
      { label: "Marketing & HR", action: "talent_specific" },
      { label: "Other", action: "talent_specific" }
    ]
  },
  talent_specific: {
    text: "We have a strong network of professionals in this area. We can help you connect with candidates whose experience and aspirations align perfectly with your needs.\n\nWould you like to speak to our team?",
    options: [
      { label: "Yes, let's connect", action: "transition_to_contact" },
      { label: "Go back", action: "init" }
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
    nextAction: "ask_email",
    inputType: "text",
    placeholder: "Enter your full name (e.g., Bhaviraj Singh)"
  },
  ask_email: {
    text: "Thanks! What is your work email address?",
    expects: "email",
    nextAction: "ask_phone",
    inputType: "email",
    placeholder: "Enter your work email (e.g., name@company.com)"
  },
  ask_phone: {
    text: "Got it. And what is your contact number?",
    expects: "phone",
    nextAction: "contact_method",
    inputType: "tel",
    placeholder: "Enter your contact number (e.g., +61 400 000 000)"
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
