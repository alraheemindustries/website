// Types definitions for the Contact Form Payload
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
  company?: string;
  phone?: string;
  subject?: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

/**
 * Validates the core and optional fields for the Al-Raheem contact desk pipeline.
 */
export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Record<string, string> = {};

  // 1. Full Name Validation
  if (!data.name || data.name.trim() === "") {
    errors.name = "Full Name is required";
  } else if (data.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters long";
  }

  // 2. Email Address Validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || data.email.trim() === "") {
    errors.email = "Email address is required";
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  // 3. Message Validation
  if (!data.message || data.message.trim() === "") {
    errors.message = "Message field cannot be empty";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  }

  // 4. Optional Phone Validation (If user fills it, check standard format)
 if (data.phone && data.phone.trim() !== "") {
    const digitsOnly = data.phone.trim().replace(/\D/g, '');
    if (digitsOnly.length < 11) {
        errors.phone = "Phone number must be at least 11 digits";
    }
}

return {
    valid: Object.keys(errors).length === 0,
    errors,
};
}

/**
 * Sanitizes input strings to prevent Cross-Site Scripting (XSS) attacks.
 */
export function escapeHtml(text: string): string {
  if (!text) return "";
  
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return text.replace(/[&<>"']/g, (m) => map[m]);
}