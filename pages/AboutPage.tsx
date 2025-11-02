import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-secondary">About TST Technologies</h1>
          <p className="text-lg text-gray-600 mt-2">Innovating for a Safer Tomorrow</p>
        </div>
      </section>

      {/* Company Overview */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                Our mission is to engineer and deliver the most reliable and technologically advanced security systems on the market. We strive to empower our clients by providing them with robust solutions that protect their most valuable assets, ensure operational efficiency, and create secure environments for people to thrive.
              </p>
              <p className="text-gray-600">
                We are committed to continuous research and development, exceptional customer service, and ethical business practices. At TST Technologies, we don't just sell products; we build long-term security partnerships.
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/seed/mission/600/450" alt="Team collaborating on a project" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Timeline/Milestones */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">Our Journey</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary hidden md:block"></div>
              
              <div className="space-y-16">
                {/* Milestone 1 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative items-center">
                  <div className="md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-primary">2010</h3>
                    <p className="text-lg font-semibold">Company Founded</p>
                    <p className="text-gray-600 text-sm">TST Technologies was established with a vision to innovate in the biometric security space.</p>
                  </div>
                  <div className="md:pl-8">
                    <div className="w-8 h-8 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 top-0 hidden md:flex items-center justify-center text-white font-bold">1</div>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative items-center">
                   <div className="md:order-2 md:text-left md:pl-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-primary">2014</h3>
                    <p className="text-lg font-semibold">First Major Contract</p>
                    <p className="text-gray-600 text-sm">Secured a nationwide contract to upgrade access control for a leading logistics company.</p>
                  </div>
                  <div className="md:order-1 md:pr-8">
                    <div className="w-8 h-8 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 top-0 hidden md:flex items-center justify-center text-white font-bold">2</div>
                  </div>
                </div>
                
                {/* Milestone 3 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative items-center">
                  <div className="md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-primary">2018</h3>
                    <p className="text-lg font-semibold">Expanded into Inspection Systems</p>
                    <p className="text-gray-600 text-sm">Launched our first line of X-ray scanners and metal detectors.</p>
                  </div>
                  <div className="md:pl-8">
                    <div className="w-8 h-8 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 top-0 hidden md:flex items-center justify-center text-white font-bold">3</div>
                  </div>
                </div>
                
                {/* Milestone 4 */}
                <div className="md:grid md:grid-cols-2 md:gap-8 relative items-center">
                   <div className="md:order-2 md:text-left md:pl-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-primary">2022</h3>
                    <p className="text-lg font-semibold">Global Expansion</p>
                    <p className="text-gray-600 text-sm">Opened our first international office to serve clients across Europe and Asia.</p>
                  </div>
                  <div className="md:order-1 md:pr-8">
                    <div className="w-8 h-8 bg-primary rounded-full absolute left-1/2 -translate-x-1/2 top-0 hidden md:flex items-center justify-center text-white font-bold">4</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Strengths */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">Our Core Strengths</h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Innovation</h3>
                <p className="text-gray-600">We continuously invest in R&D to bring the latest technological advancements to our clients, from AI-powered analytics to next-gen sensor technology.</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Experience</h3>
                <p className="text-gray-600">Our team comprises industry veterans with decades of collective experience in designing, deploying, and maintaining complex security systems.</p>
              </div>
              <div className="p-8 border border-gray-200 rounded-lg">
                <h3 className="text-xl font-semibold text-primary mb-3">Customer Focus</h3>
                <p className="text-gray-600">We work closely with each client to understand their unique challenges and deliver tailored solutions backed by responsive, expert support.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Image Area */}
      <AnimatedSection>
        <section className="bg-secondary">
          <div className="container mx-auto px-4 py-20 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Meet Our Dedicated Team</h2>
            <p className="max-w-2xl mx-auto mb-8">A group of passionate professionals committed to excellence and driven by the challenge of creating a safer world.</p>
            <img src="https://picsum.photos/seed/team/1200/500" alt="The TST Technologies team" className="rounded-lg shadow-2xl mx-auto"/>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;
