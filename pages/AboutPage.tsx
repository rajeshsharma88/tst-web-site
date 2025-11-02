
import React from 'react';
import AnimatedSection from '../components/AnimatedSection';
import useSeo from '../hooks/useSeo';
import { content } from '../data/content';
import { StrengthCard } from '../components/FeatureCard';
import TimelineItem from '../components/TimelineItem';

const AboutPage: React.FC = () => {
  const { about: aboutContent } = content;

  useSeo({
    title: 'About TST Technologies | Our Mission & History',
    description: 'Learn about TST Technologies, our mission to innovate security, our history of excellence, and the core strengths that make us a leader in the access control industry.',
    imageUrl: 'https://picsum.photos/seed/team/1200/630'
  });

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-secondary">{aboutContent.header.title}</h1>
          <p className="text-lg text-gray-600 mt-2">{aboutContent.header.subtitle}</p>
        </div>
      </section>

      {/* Company Overview */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-secondary mb-4">{aboutContent.mission.title}</h2>
              <p className="text-gray-600 mb-4">
                {aboutContent.mission.p1}
              </p>
              <p className="text-gray-600">
                {aboutContent.mission.p2}
              </p>
            </div>
            <div>
              <img src="https://picsum.photos/seed/mission/600/450" alt="TST Technologies engineering team collaborating on a security system schematic" className="rounded-lg shadow-xl"/>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Timeline/Milestones */}
      <AnimatedSection>
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">{aboutContent.timeline.title}</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-primary hidden md:block"></div>
              
              <div className="space-y-16">
                {aboutContent.timeline.milestones.map((milestone, index) => (
                    <TimelineItem key={index} index={index} {...milestone} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Our Strengths */}
      <AnimatedSection>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-secondary text-center mb-12">{aboutContent.strengths.title}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {aboutContent.strengths.items.map((strength, index) => (
                  <StrengthCard key={index} title={strength.title} description={strength.description} />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Team Image Area */}
      <AnimatedSection>
        <section className="bg-secondary">
          <div className="container mx-auto px-4 py-20 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">{aboutContent.team.title}</h2>
            <p className="max-w-2xl mx-auto mb-8">{aboutContent.team.text}</p>
            <img src="https://picsum.photos/seed/team/1200/500" alt="Group photo of the dedicated TST Technologies team of security experts" className="rounded-lg shadow-2xl mx-auto"/>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
};

export default AboutPage;