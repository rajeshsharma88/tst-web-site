export interface Product {
  id: string;
  name: string;
  category: 'Biometric' | 'Access Control' | 'Turnstile' | 'Inspection';
  short: string;
  description: string; // HTML string
  images: string[];
  specs: Record<string, string>;
  price?: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    company: string;
}

export interface Client {
    name: string;
    logoUrl: string;
}