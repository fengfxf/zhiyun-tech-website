export interface ContactFormData {
  id?: number;
  name: string;
  email: string;
  company: string;
  message: string;
  processed?: boolean;
  created_at?: string;
  updated_at?: string;
} 