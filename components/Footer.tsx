import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../data/content';

// Fix: Moved SocialIcon outside of the Footer component to prevent re-declaration on each render and resolve potential tooling issues with type inference.
const SocialIcon = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors duration-300">
    {children}
  </a>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">TST Tech</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in advanced biometric and security solutions. We are dedicated to providing innovative technology for a safer world.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </SocialIcon>
              <SocialIcon href="#">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.28 1.47h2.56v8.59H3.725v-8.59z" clipRule="evenodd" /></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-primary transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Product Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products?category=Biometric" className="text-gray-400 hover:text-primary transition-colors">Biometric Systems</Link></li>
              <li><Link to="/products?category=Access Control" className="text-gray-400 hover:text-primary transition-colors">Access Control</Link></li>
              <li><Link to="/products?category=Turnstile" className="text-gray-400 hover:text-primary transition-colors">Turnstiles & Gates</Link></li>
              <li><Link to="/products?category=Inspection" className="text-gray-400 hover:text-primary transition-colors">Inspection Systems</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="text-sm text-gray-400 space-y-3">
                <p>{content.contact.address.join('<br/>')}</p>
                <p>Email: <a href={`mailto:${content.contact.email}`} className="hover:text-primary">{content.contact.email}</a></p>
                <p>Phone: <a href={`tel:${content.contact.phone.replace(/\s/g, '')}`} className="hover:text-primary">{content.contact.phone}</a></p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/20">
        <div className="container mx-auto px-4 py-3 text-center text-xs text-gray-500">
          &copy; {currentYear} TST Technologies. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;