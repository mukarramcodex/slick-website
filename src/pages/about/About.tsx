import React from 'react';
import AboutHero from '@/components/about/hero/AboutHero';
import CompanyOverview from '@/components/about/companyOverview/CompanyOverview';
import Values from '@/components/about/values/Values';
import Team from '@/components/about/team/Team';
import CompanyTimeline from '@/components/about/companyTimeline/CompanyTimeline';
import Testimonial from '@/components/common/testimonial/Testimonial';
import CallToAction from '@/components/common/callToAction/CallToAction';
import { useState } from 'react';
import { testimonials } from '@/components/common/testimonial/TestimonialData';

const About: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      <AboutHero />
      <CompanyOverview />
      <Values />
      <Team />
      <CompanyTimeline />
      <Testimonial 
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />
      <CallToAction />
    </div>
  );
};

export default About;