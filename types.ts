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

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
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

export interface HomePageContent {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  aboutSnippet: {
    title: string;
    text: string;
    link: string;
  };
  features: FeatureItem[];
  clients: {
    title: string;
    logos: Client[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  cta: {
    title: string;
    text: string;
    button: string;
  };
}

export interface AboutPageContent {
  header: {
    title: string;
    subtitle: string;
  };
  mission: {
    title: string;
    p1: string;
    p2: string;
  };
  timeline: {
    title: string;
    milestones: TimelineMilestone[];
  };
  strengths: {
    title: string;
    items: FeatureItem[];
  };
  team: {
    title: string;
    text: string;
  };
}

export interface SiteContent {
  contact: {
    phone: string;
    email: string;
    address: string[];
  };
  home: HomePageContent;
  about: AboutPageContent;
}
