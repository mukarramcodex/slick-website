import React, { useState } from 'react';
import Hero from '@/components/home/hero/Hero';
import Intro from '@/components/about/intro/Intro';
import Service from '@/components/service/Service';
import CaseStudy from '@/components/caseStudy/CaseStudy';
import Testimonial from '@/components/common/testimonial/Testimonial';
import Gallery from '@/components/gallery/Gallery';
import CallToAction from '@/components/common/callToAction/CallToAction';

import { services } from '@/components/service/ServiceData';
import { caseStudies } from '@/components/caseStudy/CaseStudyData';
import { testimonials } from '@/components/common/testimonial/TestimonialData';
import { galleryItems } from '@/components/gallery/GalleryData';

const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Convert services data for intro component
  const introServices = services.map(service => ({
    icon: service.icon,
    title: service.title
  }));

  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      <Hero />
      <Intro services={introServices} />
      <Service services={services} />
      <CaseStudy caseStudies={caseStudies} />
      <Testimonial 
        testimonials={testimonials}
        activeTestimonial={activeTestimonial}
        setActiveTestimonial={setActiveTestimonial}
      />
      <Gallery galleryItems={galleryItems} />
      <CallToAction />
    </div>
  );
};

export default Home;
