export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  inquiryType: string;
  budgetRange: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}