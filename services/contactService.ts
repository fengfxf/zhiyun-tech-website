import { supabase } from '../lib/supabase';
import { ContactFormData } from '../types/contact';

const TABLE_NAME = 'contact_messages';

export async function submitContactForm(formData: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const { data, error } = await supabase
      .from(TABLE_NAME)
      .insert([
        {
          name: formData.name,
          email: formData.email,
          company: formData.company || null,
          message: formData.message,
        },
      ]);

    if (error) {
      console.error('Error submitting contact form:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err) {
    console.error('Exception when submitting contact form:', err);
    return { 
      success: false, 
      error: err instanceof Error ? err.message : '提交表单时发生未知错误' 
    };
  }
} 