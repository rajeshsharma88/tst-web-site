import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, productName }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setFormData({
        name: '',
        email: '',
        message: `I'm interested in a quote for the ${productName}.`
      });
      setStatus('');
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, productName]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus('Please enter a valid email address.');
      return;
    }
    
    console.log('Modal form submitted:', formData);
    setStatus('Thank you! Your quote request has been sent.');
    setTimeout(() => {
        onClose();
    }, 2000);
  };

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-8 relative animate-fade-in-up" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <h2 className="text-2xl font-bold text-secondary mb-6">Request a Quote</h2>
        <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
                <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="modal-name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div className="mb-4">
                <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" id="modal-email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
            </div>
            <div className="mb-6">
                <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="modal-message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
            </div>
            <div>
                <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-300">Submit Request</button>
            </div>
            {status && <p className={`mt-4 text-sm text-center ${status.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>{status}</p>}
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
