import { SiteContent } from '../types';

export const content: SiteContent = {
  contact: {
    phone: '+1 (800) 555-TST1',
    email: 'sales@tst-technologies.com',
    address: ['123 Security Drive,', 'Tech Park, Innovation City, 45678'],
  },
  home: {
    hero: {
      title: 'Pioneering Security Through Technology',
      subtitle: 'Advanced solutions in biometric, RFID, and access control systems for a secure future.',
      cta: 'Explore Our Products',
    },
    aboutSnippet: {
      title: 'Your Trusted Partner in Security',
      text: 'For over a decade, TST Technologies has been at the forefront of the security industry, delivering state-of-the-art solutions to protect assets, people, and infrastructure. Our commitment to innovation and quality has made us a leader in biometric security and access control.',
      link: 'Learn More About Us →',
    },
    features: [
      {
        icon: 'quality',
        title: 'Uncompromising Quality',
        description: 'Our products undergo rigorous testing to ensure they meet the highest standards of performance and reliability.',
      },
      {
        icon: 'expertise',
        title: 'Industry Expertise',
        description: 'With a team of experienced engineers and security professionals, we provide solutions that are both advanced and practical.',
      },
      {
        icon: 'satisfaction',
        title: 'Customer Satisfaction',
        description: 'Your security is our priority. We are committed to providing exceptional support and ensuring your complete satisfaction.',
      },
    ],
    clients: {
      title: 'Trusted by Industry Leaders',
      logos: [
        { name: 'SecureCorp', logoUrl: 'https://picsum.photos/seed/logo1/150/50?grayscale' },
        { name: 'Innovate Labs', logoUrl: 'https://picsum.photos/seed/logo2/150/50?grayscale' },
        { name: 'MegaPlex Venues', logoUrl: 'https://picsum.photos/seed/logo3/150/50?grayscale' },
        { name: 'Global Trans', logoUrl: 'https://picsum.photos/seed/logo4/150/50?grayscale' },
        { name: 'Quantum Data', logoUrl: 'https://picsum.photos/seed/logo5/150/50?grayscale' },
        { name: 'Vertex Solutions', logoUrl: 'https://picsum.photos/seed/logo6/150/50?grayscale' },
      ],
    },
    testimonials: {
      title: 'What Our Clients Say',
      items: [
        { quote: "TST's biometric systems have revolutionized our access control. The installation was seamless and the support has been outstanding.", author: 'John Doe', company: 'SecureCorp' },
        { quote: "The reliability of their turnstiles is unmatched. We've seen a significant improvement in crowd management at our facilities.", author: 'Jane Smith', company: 'MegaPlex Venues' },
        { quote: 'Their team provided a customized solution that perfectly fit our needs. Highly professional and knowledgeable.', author: 'Peter Jones', company: 'Innovate Labs' },
      ],
    },
    cta: {
      title: "Let's Work Together",
      text: 'Have a security challenge? We have the solution. Contact our experts today for a personalized consultation and quote.',
      button: 'Get in Touch',
    },
  },
  about: {
    header: {
      title: 'About TST Technologies',
      subtitle: 'Innovating for a Safer Tomorrow',
    },
    mission: {
      title: 'Our Mission',
      p1: 'Our mission is to engineer and deliver the most reliable and technologically advanced security systems on the market. We strive to empower our clients by providing them with robust solutions that protect their most valuable assets, ensure operational efficiency, and create secure environments for people to thrive.',
      p2: "We are committed to continuous research and development, exceptional customer service, and ethical business practices. At TST Technologies, we don't just sell products; we build long-term security partnerships.",
    },
    timeline: {
      title: 'Our Journey',
      milestones: [
        { year: '2010', title: 'Company Founded', description: 'TST Technologies was established with a vision to innovate in the biometric security space.' },
        { year: '2014', title: 'First Major Contract', description: 'Secured a nationwide contract to upgrade access control for a leading logistics company.' },
        { year: '2018', title: 'Expanded into Inspection Systems', description: 'Launched our first line of X-ray scanners and metal detectors.' },
        { year: '2022', title: 'Global Expansion', description: 'Opened our first international office to serve clients across Europe and Asia.' },
      ],
    },
    strengths: {
      title: 'Our Core Strengths',
      items: [
        {
          icon: 'innovation',
          title: 'Innovation',
          description: 'We continuously invest in R&D to bring the latest technological advancements to our clients, from AI-powered analytics to next-gen sensor technology.',
        },
        {
          icon: 'experience',
          title: 'Experience',
          description: 'Our team comprises industry veterans with decades of collective experience in designing, deploying, and maintaining complex security systems.',
        },
        {
          icon: 'customer_focus',
          title: 'Customer Focus',
          description: 'We work closely with each client to understand their unique challenges and deliver tailored solutions backed by responsive, expert support.',
        },
      ],
    },
    team: {
      title: 'Meet Our Dedicated Team',
      text: 'A group of passionate professionals committed to excellence and driven by the challenge of creating a safer world.',
    },
  },
};
