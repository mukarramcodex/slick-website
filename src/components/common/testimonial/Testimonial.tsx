import React from 'react';
import TestimonialCard from './TestimonialCard';
import { TestimonialProps } from './TestimonialTypes';

const Testimonial: React.FC<TestimonialProps> = ({ testimonials, activeTestimonial, setActiveTestimonial }) => {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client <span className="text-[#e6002e]">Testimonials</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear what our clients say about their experience working with Slick Digital Agency.
          </p>
        </div>
        <div className="relative">
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial}
                isActive={index === activeTestimonial}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;