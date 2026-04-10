export interface ValidationError {
  field: string;
  message: string;
}

// Helpers
export function validateRequired(value: string, field: string): ValidationError | null {
  if (!value || value.trim().length === 0) {
    return { field, message: `${field} is required.` };
  }
  return null;
}

export function validateEmail(value: string): ValidationError | null {
  if (!value || value.trim().length === 0) {
    return { field: "email", message: "Email is required." };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value.trim())) {
    return { field: "email", message: "Please enter a valid email address." };
  }
  return null;
}

export function validatePhone(value: string): ValidationError | null {
  if (!value || value.trim().length === 0) {
    return { field: "phone", message: "Phone number is required." };
  }
  // Accept formats like (123) 456-7890, 123-456-7890, 1234567890, +11234567890
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  if (!phoneRegex.test(value.replace(/\s/g, ""))) {
    return { field: "phone", message: "Please enter a valid phone number." };
  }
  return null;
}

// Contact form
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  const nameError = validateRequired(data.name, "name");
  if (nameError) errors.push(nameError);

  const emailError = validateEmail(data.email);
  if (emailError) errors.push(emailError);

  const subjectError = validateRequired(data.subject, "subject");
  if (subjectError) errors.push(subjectError);

  const messageError = validateRequired(data.message, "message");
  if (messageError) errors.push(messageError);

  return errors;
}

// Franchise inquiry form
export interface FranchiseFormData {
  name: string;
  email: string;
  phone: string;
  cityState: string;
  budget: string;
  message: string;
}

export function validateFranchiseForm(data: FranchiseFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  const nameError = validateRequired(data.name, "name");
  if (nameError) errors.push(nameError);

  const emailError = validateEmail(data.email);
  if (emailError) errors.push(emailError);

  const phoneError = validatePhone(data.phone);
  if (phoneError) errors.push(phoneError);

  const cityStateError = validateRequired(data.cityState, "cityState");
  if (cityStateError) errors.push({ ...cityStateError, message: "City and state are required." });

  const budgetError = validateRequired(data.budget, "budget");
  if (budgetError) errors.push({ ...budgetError, message: "Please select an investment budget." });

  const messageError = validateRequired(data.message, "message");
  if (messageError) errors.push(messageError);

  return errors;
}
