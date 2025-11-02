import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { Product, Testimonial, Client } from '../types';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';

const testimonials: Testimonial[] = [
    { quote: "TST's biometric systems have revolutionized our access control. The installation was seamless and the support has been outstanding.", author: "John Doe", company: "SecureCorp" },
    { quote: "The reliability of their turnstiles is unmatched. We've seen a significant improvement in crowd management at our facilities.", author: "Jane Smith", company: "MegaPlex Venues" },
    { quote: "Their team provided a customized solution that perfectly fit our needs. Highly professional and knowledgeable.", author: "Peter Jones", company: "Innovate Labs" }
];

const clients: Client[] = [
    { name: "SecureCorp", logoUrl: "https://picsum.photos/seed/logo1/150/50?grayscale" },
    { name: "Innovate Labs", logoUrl: "https://picsum.photos/seed/logo2/150/50?grayscale" },
    { name: "MegaPlex Venues", logoUrl: "https://picsum.photos/seed/logo3/150/50?grayscale" },
    { name: "Global Trans", logoUrl: "https://picsum.photos/seed/logo4/150/50?grayscale" },
    { name: "Quantum Data", logoUrl: "https://picsum.photos/seed/logo5/150/50?grayscale" },
    { name: "Vertex Solutions", logoUrl: "https://picsum.photos/seed/logo6/150/50?grayscale" },
];

const HomePage: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white h-[60vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down">Pioneering Security Through Technology</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up">Advanced solutions in biometric, RFID, and access control systems for a secure future.</p>
          <Link to="/products" className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Explore Our Products
          </Link>
        </div>
      </section>

      {/* About Snippet */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <img src="https://picsum.photos/seed/about/600/400" alt="TST Technologies office" className="rounded-lg shadow-xl"/>
              </div>
              <div>
                  <h2 className="text-3xl font-bold text-secondary mb-4">Your Trusted Partner in Security</h2>
                  <p className="text-gray-600 mb-6">
                      For over a decade, TST Technologies has been at the forefront of the security industry, delivering state-of-the-art solutions to protect assets, people, and infrastructure. Our commitment to innovation and quality has made us a leader in biometric security and access control.
                  </p>
                  <Link to="/about" className="text-primary font-semibold hover:underline">Learn More About Us &rarr;</Link>
              </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Why Choose Us */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-secondary mb-2">Why Choose TST Technologies?</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">We combine cutting-edge technology with unparalleled service to deliver security solutions you can trust.</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Uncompromising Quality</h3>
                  <p className="text-gray-600">Our products undergo rigorous testing to ensure they meet the highest standards of performance and reliability.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Industry Expertise</h3>
                  <p className="text-gray-600">With a team of experienced engineers and security professionals, we provide solutions that are both advanced and practical.</p>
              </div>
              <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.97l-2.062 3.653M14 10L7 20" /></svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Customer Satisfaction</h3>
                  <p className="text-gray-600">Your security is our priority. We are committed to providing exceptional support and ensuring your complete satisfaction.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Clients Logo Carousel */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl font-semibold text-gray-500 mb-8">Trusted by Industry Leaders</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {clients.map(client => (
                <div key={client.name} className="flex justify-center">
                  <img src={client.logoUrl} alt={`${client.name} logo`} className="max-h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"/>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Product Preview */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-secondary mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/products" className="text-primary font-semibold hover:underline">View All Products &rarr;</Link>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <section className="py-20 bg-secondary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                      <div className="flex">
                          {testimonials.map((t, index) => (
                              <div key={index} className="w-full flex-shrink-0 px-4">
                                  <p className="text-xl italic mb-4">"{t.quote}"</p>
                                  <p className="font-bold text-primary">{t.author}</p>
                                  <p className="text-gray-400">{t.company}</p>
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
              <button onClick={prevTestimonial} className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button onClick={nextTestimonial} className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
               <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                      <button key={index} onClick={() => setCurrentTestimonial(index)} className={`w-3 h-3 rounded-full ${currentTestimonial === index ? 'bg-primary' : 'bg-gray-500'} transition-colors`}></button>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact CTA */}
      <AnimatedSection>
        <section className="bg-primary text-white">
          <div className="container mx-auto px-4 py-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="max-w-2xl mx-auto mb-8">Have a security challenge? We have the solution. Contact our experts today for a personalized consultation and quote.</p>
            <Link to="/contact" className="bg-white text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg">
              Get in Touch
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;
