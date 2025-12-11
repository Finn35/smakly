import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mchiylynniiwzmagvsnc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jaGl5bHlubmlpd3ptYWd2c25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2OTc1MTksImV4cCI6MjA3MzI3MzUxOX0.PB_dhkN-0tFexI08STAFpthbNVcNWcVLSMDnikSDC3I';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface FormSubmission {
  service_type: string;
  service_type_other?: string;
  urgency: string;
  description?: string;
  postcode: string;
  language_preference: string;
  language_preference_other?: string;
  name: string;
  email: string;
  phone?: string;
}

export async function submitForm(data: FormSubmission) {
  const { error } = await supabase
    .from('form_submissions')
    .insert([{
      service_type: data.service_type,
      service_type_other: data.service_type_other || null,
      urgency: data.urgency,
      description: data.description || null,
      postcode: data.postcode,
      language_preference: data.language_preference,
      language_preference_other: data.language_preference_other || null,
      name: data.name,
      email: data.email,
      phone: data.phone || null,
    }]);

  if (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit form');
  }

  return { success: true };
}

// Contact form submission
export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(data: ContactMessage) {
  const { error } = await supabase
    .from('contact_messages')
    .insert([{
      name: data.name,
      email: data.email,
      message: data.message,
    }]);

  if (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to submit contact form');
  }

  return { success: true };
}

