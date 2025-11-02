import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const ContactPage: React.FC = () => {
    const location = useLocation();
    const { productName } = location.state || { productName: '' };

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: productName ? `I'm interested in a quote for the ${productName}.` : ''
    });
    const [status, setStatus] = useState('');

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
        // Basic email validation
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setStatus('Please enter a valid email address.');
            return;
        }
        
        // Simulate form submission
        console.log('Form submitted:', formData);
        setStatus('Thank you for your message! We will get back to you shortly.');
        setFormData({ name: '', email: '', message: ''});
    };

    return (
        <div className="bg-white">
            {/* Page Header */}
            <section className="bg-gray-100 py-16 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold text-secondary">Contact Us</h1>
                    <p className="text-lg text-gray-600 mt-2">We're here to help. Reach out to us for any inquiries.</p>
                </div>
            </section>
            
            <AnimatedSection>
                <section className="py-20">
                    <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-secondary mb-4">Get in Touch</h2>
                                <p className="text-gray-600">Our team of experts is ready to answer your questions and provide you with the best security solutions tailored to your needs.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></div>
                                    <div>
                                        <h3 className="font-semibold">Address</h3>
                                        <p className="text-gray-600">123 Security Drive, Tech Park, Innovation City, 45678</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg></div>
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <a href="mailto:sales@tst-technologies.com" className="text-gray-600 hover:text-primary">sales@tst-technologies.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-4">
                                    <div className="bg-primary/10 text-primary p-3 rounded-full"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg></div>
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <a href="tel:+18005558781" className="text-gray-600 hover:text-primary">+1 (800) 555-TST1</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                    <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="w-full bg-primary text-white font-bold py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-300">Submit</button>
                                </div>
                                {status && <p className={`mt-4 text-sm ${status.includes('Thank you') ? 'text-green-600' : 'text-red-600'}`}>{status}</p>}
                            </form>
                        </div>
                    </div>
                </section>
            </AnimatedSection>
        </div>
    );
};

export default ContactPage;
