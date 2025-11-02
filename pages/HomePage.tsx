

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { content } from '../data/content';
import ProductCard from '../components/ProductCard';
import AnimatedSection from '../components/AnimatedSection';
import useSeo from '../hooks/useSeo';
// Fix: Update import for FeatureCard to use a named import instead of a default import, as it is a named export from its module.
import { FeatureCard } from '../components/FeatureCard';

const HomePage: React.FC = () => {
  const { home: homeContent } = content;
  const { testimonials, clients } = homeContent;

  useSeo({
    title: 'TST Technologies | Advanced Biometric & Access Control Systems',
    description: 'Your trusted partner for advanced security solutions including biometric scanners, RFID access control, turnstiles, and inspection systems. Secure your future with TST.',
    imageUrl: 'https://picsum.photos/seed/hero/1200/630'
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.items.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.items.length) % testimonials.items.length);
  };
  
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-secondary text-white h-[60vh] md:h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4 animate-fade-in-down" style={{ animationDelay: '0.1s' }}>{homeContent.hero.title}</h1>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>{homeContent.hero.subtitle}</p>
          <Link 
            to="/products" 
            className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            {homeContent.hero.cta}
          </Link>
        </div>
      </section>

      {/* About Snippet */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
              <div>
                  <img src="https://picsum.photos/seed/about/600/400" alt="Modern office interior of TST Technologies, a security systems provider" className="rounded-lg shadow-xl"/>
              </div>
              <div>
                  <h2 className="text-3xl font-bold text-secondary mb-4">{homeContent.aboutSnippet.title}</h2>
                  <p className="text-gray-600 mb-6">
                      {homeContent.aboutSnippet.text}
                  </p>
                  <Link to="/about" className="text-primary font-semibold hover:underline">{homeContent.aboutSnippet.link}</Link>
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
              {homeContent.features.map((feature, index) => (
                  <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Clients Logo Carousel */}
      <AnimatedSection>
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-2xl font-semibold text-gray-500 mb-8">{clients.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {clients.logos.map(client => (
                <div key={client.name} className="flex justify-center">
                  <img src={client.logoUrl} alt={`Logo of ${client.name}, a client of TST Technologies`} className="max-h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"/>
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
            <h2 className="text-3xl font-bold mb-12">{testimonials.title}</h2>
            <div className="relative max-w-3xl mx-auto">
              <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                      <div className="flex">
                          {testimonials.items.map((t, index) => (
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
                  {testimonials.items.map((_, index) => (
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
            <h2 className="text-3xl font-bold mb-4">{homeContent.cta.title}</h2>
            <p className="max-w-2xl mx-auto mb-8">{homeContent.cta.text}</p>
            <Link to="/contact" className="bg-white text-primary font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg">
              {homeContent.cta.button}
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default HomePage;