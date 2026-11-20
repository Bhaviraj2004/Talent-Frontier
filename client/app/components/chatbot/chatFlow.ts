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
  notes: string;
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

export const validateNotes = (notes: string): ValidationResult => {
  const trimmed = (notes || '').trim();
  if (!trimmed) {
    return { isValid: false, error: 'Please enter your message or hiring needs.' };
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
  notes: validateNotes,
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
// TALENT FRONTIER STRICT CHAT FLOW
// ==========================================

export const GREETING_STATEMENT = "G’day! Welcome to **Talent Frontier Pty Ltd**.\nWe specialise in sourcing vetted accounting and finance professionals for Australian businesses.";

export const FLOW: Record<string, FlowNode> = {
  // ----------------------------------------------------
  // Level 1: Initial Question (Options attached)
  // ----------------------------------------------------
  init: {
    text: "**How can we help you today?**",
    options: [
      { label: "Hire Accounting Staff", action: "hire_staff" },
      { label: "Scale My Accounting Firm", action: "scale_firm" },
      { label: "Explore Our Services", action: "explore_services" },
      { label: "General Enquiry / Other", action: "general_enquiry" }
    ]
  },

  // ----------------------------------------------------
  // Level 2 Branches (Question 2 – ONLY bold question)
  // ----------------------------------------------------

  // Path A: Hire Accounting Staff
  hire_staff: {
    text: "**Which role are you looking to hire for?**",
    options: [
      { label: "Tax & Business Services Accountants", action: "timeline_setup" },
      { label: "Bookkeepers & Payroll Officers", action: "timeline_setup" },
      { label: "Audit & SMSF Specialists", action: "timeline_setup" },
      { label: "CFO & Financial Controllers", action: "timeline_setup" }
    ]
  },

  // Path B: Scale My Accounting Firm
  scale_firm: {
    text: "**What is your main priority right now?**",
    options: [
      { label: "Clear tax & BAS compliance backlogs", action: "timeline_setup" },
      { label: "Build a dedicated offshore team", action: "timeline_setup" },
      { label: "Reduce staffing & overhead costs", action: "timeline_setup" },
      { label: "Free up partners for advisory work", action: "timeline_setup" }
    ]
  },

  // Path C: Explore Our Services
  explore_services: {
    text: "**What would you like to know more about?**",
    options: [
      { label: "How our staffing model works", action: "timeline_setup" },
      { label: "Candidate vetting & Australian compliance", action: "timeline_setup" },
      { label: "Supported software (Xero, MYOB, BGL)", action: "timeline_setup" },
      { label: "Pricing & engagement models", action: "timeline_setup" }
    ]
  },

  // Path D: General Enquiry / Other
  general_enquiry: {
    text: "**Which of these best describes your enquiry?**",
    options: [
      { label: "Compare offshore vs. local hiring", action: "timeline_setup" },
      { label: "Speak directly with a Senior Partner", action: "timeline_setup" },
      { label: "Looking for a job / career with us", action: "career_enquiry" },
      { label: "Write a custom enquiry message", action: "custom_enquiry_start" }
    ]
  },

  // ----------------------------------------------------
  // Level 3 Refinement (Question 3 – ONLY bold question)
  // ----------------------------------------------------
  timeline_setup: {
    text: "**Which engagement setup or timeline suits you best?**",
    options: [
      { label: "Dedicated full-time staff (Immediate start)", action: "decision_gate" },
      { label: "Dedicated full-time staff (Within 1–3 months)", action: "decision_gate" },
      { label: "Part-time / seasonal compliance support", action: "decision_gate" },
      { label: "Not sure yet — need expert guidance", action: "decision_gate" }
    ]
  },

  // Career branch for Path D option 3
  career_enquiry: {
    text: "Thank you for your interest in joining **Talent Frontier Pty Ltd**. Please send your CV directly to **admin@talentfrontier.com.au** and our recruitment team will review it.",
    options: [
      { label: "Return to Main Menu", action: "init" }
    ]
  },

  // Direct custom enquiry message route (Path D option 4)
  custom_enquiry_start: {
    text: "Wonderful. Before we connect you, **may I have your full name?**",
    expects: "name",
    nextAction: "ask_email",
    inputType: "text",
    placeholder: "Enter your full name (e.g., John Smith)"
  },

  // ----------------------------------------------------
  // Level 4 Decision Gate (Question 4 – ONLY bold question)
  // ----------------------------------------------------
  decision_gate: {
    text: "**Would you like our Senior Partner to connect with you?**",
    options: [
      { label: "Yes, let’s connect", action: "ask_name" },
      { label: "No thanks, maybe later", action: "end_chat" }
    ]
  },

  // ----------------------------------------------------
  // Level 5: Question 5 (With friendly greeting / unbold statement)
  // ----------------------------------------------------
  ask_name: {
    text: "Wonderful. Before we connect you, **may I have your full name?**",
    expects: "name",
    nextAction: "ask_email",
    inputType: "text",
    placeholder: "Enter your full name (e.g., John Smith)"
  },

  // ----------------------------------------------------
  // Level 6: Question 6 (With unbold greeting statement)
  // ----------------------------------------------------
  ask_email: {
    text: "Lovely to meet you, **[Name]**! What is the best **email address** for our Senior Partner to reach you on?",
    expects: "email",
    nextAction: "ask_phone",
    inputType: "email",
    placeholder: "Enter your work email (e.g., name@company.com)"
  },

  ask_phone: {
    text: "Got it. And what is the best **contact number** to reach you on?",
    expects: "phone",
    nextAction: "enquiry_note_choice",
    inputType: "tel",
    placeholder: "Enter your contact number (e.g., +61 400 000 000)"
  },

  enquiry_note_choice: {
    text: "Would you like to add a brief note or specific requirement for our team before we send this through?",
    options: [
      { label: "Add my thoughts / enquiry details", action: "ask_custom_notes" },
      { label: "Skip & send details", action: "finalize_lead_skip" }
    ]
  },

  ask_custom_notes: {
    text: "Please type your message or hiring needs below:",
    expects: "notes",
    nextAction: "finalize_lead_notes",
    inputType: "text",
    placeholder: "Type your message or hiring needs here..."
  },

  // Final confirmation
  final_confirmation: {
    text: "Thank you, **[Name]**. Your enquiry has been sent to our team at **Talent Frontier Pty Ltd**. A Senior Partner will review your notes and reach out shortly via phone or email.\n\nHave a great day!"
  },

  // Step 6: User opted out
  end_chat: {
    text: "No problem at all! Feel free to browse our website anytime, or email us directly at **admin@talentfrontier.com.au** whenever you're ready.\n\nHave a wonderful day!"
  }
};
