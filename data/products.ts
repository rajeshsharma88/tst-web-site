import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'bio-finger-scan-x1',
    name: 'Fingerprint Scanner X1',
    category: 'Biometric',
    short: 'Advanced optical fingerprint scanner for secure access.',
    description: `
      <p>The Fingerprint Scanner X1 is our flagship biometric device, offering unparalleled accuracy and speed. With its advanced optical sensor and anti-spoofing technology, it provides a secure and reliable solution for employee time and attendance, as well as access control.</p>
      <ul class="list-disc list-inside mt-4 space-y-2">
        <li>Sub-second identification</li>
        <li>Live finger detection</li>
        <li>Encrypted data transmission</li>
        <li>IP65 rated for dust and water resistance</li>
      </ul>`,
    images: ['https://picsum.photos/seed/bio1/800/600', 'https://picsum.photos/seed/bio1-2/800/600', 'https://picsum.photos/seed/bio1-3/800/600'],
    specs: {
      'Sensor Type': 'Optical',
      'Resolution': '500 DPI',
      'Interface': 'TCP/IP, USB',
      'Operating Temperature': '-10°C to 50°C',
    },
    price: 'Contact for quote',
  },
  {
    id: 'bio-face-rec-v2',
    name: 'Facial Recognition V2',
    category: 'Biometric',
    short: 'Contactless facial recognition terminal with temperature screening.',
    description: `
      <p>Our second-generation Facial Recognition V2 terminal provides fast, contactless authentication. It features an integrated thermal camera for optional temperature screening, making it an ideal solution for modern health and safety protocols. The dual-camera system ensures high accuracy even in low-light conditions.</p>
       <ul class="list-disc list-inside mt-4 space-y-2">
        <li>Mask detection capability</li>
        <li>Stores up to 10,000 face templates</li>
        <li>Wide dynamic range for various lighting</li>
        <li>Multiple verification modes</li>
      </ul>
      `,
    images: ['https://picsum.photos/seed/bio2/800/600', 'https://picsum.photos/seed/bio2-2/800/600'],
    specs: {
      'Recognition Distance': '0.3m to 2m',
      'Capacity': '10,000 Faces',
      'Screen': '7-inch Touchscreen',
      'Communication': 'Wi-Fi, TCP/IP, Wiegand',
    },
    price: 'Contact for quote',
  },
  {
    id: 'ac-rfid-reader-pro',
    name: 'RFID Reader Pro',
    category: 'Access Control',
    short: 'High-frequency RFID reader for secure door access.',
    description: `
      <p>The RFID Reader Pro is a versatile access control device supporting multiple card technologies. Its sleek, weatherproof design makes it suitable for both indoor and outdoor installations. With Wiegand output, it integrates seamlessly with most existing access control panels.</p>`,
    images: ['https://picsum.photos/seed/ac1/800/600', 'https://picsum.photos/seed/ac1-2/800/600'],
    specs: {
      'Frequency': '13.56 MHz',
      'Read Range': 'Up to 10 cm',
      'Supported Cards': 'Mifare, DESFire, FeliCa',
      'IP Rating': 'IP67',
    },
    price: 'Contact for quote',
  },
  {
    id: 'ac-smart-controller-4d',
    name: 'Smart Controller 4-Door',
    category: 'Access Control',
    short: 'Networked 4-door access control panel.',
    description: `
      <p>Manage up to four doors with our Smart Controller. This powerful, web-enabled panel simplifies access management with its intuitive interface and robust feature set. It supports a wide range of reader technologies and provides real-time event monitoring.</p>`,
    images: ['https://picsum.photos/seed/ac2/800/600'],
    specs: {
      'Door Capacity': '4',
      'Reader Inputs': '8 (Wiegand/OSDP)',
      'User Capacity': '100,000',
      'Event Buffer': '500,000',
    },
    price: 'Contact for quote',
  },
  {
    id: 'ts-tripod-gate-s300',
    name: 'Tripod Turnstile S300',
    category: 'Turnstile',
    short: 'Durable and reliable tripod turnstile for high-traffic areas.',
    description: `
      <p>The S300 Tripod Turnstile is engineered for long-lasting performance in busy environments like stadiums, transit stations, and corporate lobbies. Its stainless steel construction ensures durability, while the drop-arm feature allows for emergency egress.</p>`,
    images: ['https://picsum.photos/seed/ts1/800/600', 'https://picsum.photos/seed/ts1-2/800/600'],
    specs: {
      'Material': '304 Stainless Steel',
      'Passage Width': '550 mm',
      'Flow Rate': '35 persons/minute',
      'Power': 'AC 110V/220V, 50/60Hz',
    },
    price: 'Contact for quote',
  },
  {
    id: 'ts-swing-barrier-g5',
    name: 'Swing Barrier Gate G5',
    category: 'Turnstile',
    short: 'Elegant swing barrier gate for accessible and premium entryways.',
    description: `
      <p>The G5 Swing Barrier offers a sophisticated solution for access control, providing wider lanes for ADA compliance and material delivery. Its brushless DC motor ensures smooth, quiet operation, and the tempered glass or acrylic wings can be customized to match any decor.</p>`,
    images: ['https://picsum.photos/seed/ts2/800/600'],
    specs: {
      'Lane Width': '600mm - 900mm',
      'Material': 'Stainless Steel & Tempered Glass',
      'MCBF': '5 million cycles',
      'Sensors': '10 pairs infrared',
    },
    price: 'Contact for quote',
  },
  {
    id: 'insp-xray-scanner-c50',
    name: 'X-Ray Baggage Scanner C50',
    category: 'Inspection',
    short: 'Compact X-ray scanner for checkpoints and mailrooms.',
    description: `
      <p>The C50 X-Ray Baggage Scanner is designed for screening small to medium-sized baggage and parcels. It delivers clear, high-resolution images with powerful image processing tools to help operators identify threats quickly and accurately. Its compact footprint makes it ideal for locations with limited space.</p>`,
    images: ['https://picsum.photos/seed/insp1/800/600', 'https://picsum.photos/seed/insp1-2/800/600'],
    specs: {
      'Tunnel Size': '500mm (W) x 300mm (H)',
      'Steel Penetration': '34mm',
      'Image Resolution': '22" LCD 1920x1080',
      'Conveyor Speed': '0.22 m/s',
    },
    price: 'Contact for quote',
  },
  {
    id: 'insp-walk-through-d9',
    name: 'Walk-Through Metal Detector D9',
    category: 'Inspection',
    short: 'Multi-zone walk-through metal detector for enhanced security.',
    description: `
      <p>Enhance security at your facility with the D9 Walk-Through Metal Detector. Featuring 18 detection zones, it precisely pinpoints the location of metal objects on a person's body. An intuitive LED display and audible alarms make it easy for security personnel to operate.</p>`,
    images: ['https://picsum.photos/seed/insp2/800/600'],
    specs: {
      'Detection Zones': '18',
      'Sensitivity Levels': '256',
      'Traffic Counter': 'Included',
      'Power': 'AC 100V to 240V',
    },
    price: 'Contact for quote',
  },
];