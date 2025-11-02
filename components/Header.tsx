
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { content } from '../data/content';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-sm font-medium transition-colors duration-300 ${
      isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-primary after:transform after:scale-x-0 after:origin-left after:transition-transform after:duration-300 ${
      isActive ? 'after:scale-x-100' : 'hover:after:scale-x-100'
    }`;
    
  const mobileNavLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `block py-2 px-4 text-sm rounded ${
    isActive ? 'bg-primary text-white' : 'hover:bg-gray-100'
  }`;


  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-lg bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      {/* Top Contact Bar */}
      <div className="bg-gray-100 text-gray-600 text-xs hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div>
            <span>Phone: {content.contact.phone}</span>
            <span className="mx-3">|</span>
            <span>Email: {content.contact.email}</span>
          </div>
          <span>Advanced Security Systems</span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          TST Tech
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClasses} end>Home</NavLink>
            <NavLink to="/about" className={navLinkClasses}>About Us</NavLink>
            <NavLink to="/products" className={navLinkClasses}>Products</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact Us</NavLink>
        </div>
        
        <div className="hidden lg:block">
            <Link to="/contact" className="bg-primary text-white text-sm font-medium py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300 shadow-md hover:shadow-lg">
                Request a Quote
            </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-secondary focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <NavLink to="/" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)} end>Home</NavLink>
                <NavLink to="/about" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>About Us</NavLink>
                <NavLink to="/products" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Products</NavLink>
                <NavLink to="/contact" className={mobileNavLinkClasses} onClick={() => setIsOpen(false)}>Contact Us</NavLink>
            </div>
            <div className="p-4 border-t border-gray-200">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full text-center block bg-primary text-white text-sm font-medium py-2 px-6 rounded-full hover:bg-opacity-90 transition-colors duration-300">
                    Request a Quote
                </Link>
            </div>
        </div>
      )}
    </header>
  );
};

export default Header;