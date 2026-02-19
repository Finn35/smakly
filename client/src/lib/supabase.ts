import { createClient } from '@supabase/supabase-js';

// Smakly.nl Supabase project
const supabaseUrl = 'https://awretlrkxzfirbuyaekz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3cmV0bHJreHpmaXJidXlhZWt6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk2NzM2NjYsImV4cCI6MjA4NTI0OTY2Nn0.4fZ5PWwG79WbewTRi7ALzeVfvxPvc6ybI4YWvy9a-Rg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Smakly landing page form submission (demo request)
export interface SmaklyFormSubmission {
  naam: string;
  email: string;
  bedrijfstype: string;
  telefoonnummer?: string;
}

export async function submitSmaklyForm(data: SmaklyFormSubmission) {
  const { error } = await supabase
    .from('form_submissions')
    .insert([{
      naam: data.naam,
      email: data.email,
      bedrijfstype: data.bedrijfstype,
      telefoonnummer: data.telefoonnummer || null,
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
      source: 'landing_page',
    }]);

  if (error) {
    console.error('Error submitting form:', error);
    throw new Error('Failed to submit form');
  }

  return { success: true };
}

// Lead form submission (Google Maps analysis request)
export interface LeadSubmission {
  business_name: string;
  maps_url: string;
  email: string;
  phone?: string;
}

export async function submitLead(data: LeadSubmission) {
  const { error } = await supabase
    .from('leads')
    .insert([{
      business_name: data.business_name,
      maps_url: data.maps_url,
      email: data.email,
      phone: data.phone || null,
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
      source: 'landing_page',
    }]);

  if (error) {
    console.error('Error submitting lead:', error);
    throw new Error('Failed to submit lead');
  }

  return { success: true };
}

// Contact message submission (footer form)
export interface ContactMessage {
  naam: string;
  email: string;
  bericht: string;
}

export async function submitContactMessage(data: ContactMessage) {
  const { error } = await supabase
    .from('contact_messages')
    .insert([{
      naam: data.naam,
      email: data.email,
      bericht: data.bericht,
      user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : null,
      source: 'footer_contact',
    }]);

  if (error) {
    console.error('Error submitting contact message:', error);
    throw new Error('Failed to submit message');
  }

  return { success: true };
}
