import React, { useState } from 'react';
import CallToAction from '@/components/common/callToAction/CallToAction';
import Testimonial from '@/components/common/testimonial/Testimonial';
import Benifits from '@/components/service/benifits/Benifits';
import Features from '@/components/service/features/Features';
import ServiceHero from '@/components/service/hero/ServiceHero';
import Service from '@/components/service/Service';
import { services } from '@/components/service/ServiceData';
import { testimonialData } from '@/components/common/testimonial/TestimonialData';
import { mainservicesFaqData } from '@/components/service/faqsData/ServiceFaqsData';
import Faqs from '@/components/common/faqs/Faqs';

const Services = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <div className="min-h-screen bg-black text-white font-['Inter',sans-serif]">
      <ServiceHero />
      <Features />
      <Service services={services} />
      <Benifits />
      
       <Faqs faqs={mainservicesFaqData} />
      
    <Testimonial testimonials={testimonialData} />
     
      
      <CallToAction />
    </div>
  );
};

export default Services;
