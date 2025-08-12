import React from 'react';
import { ServiceHeroProps } from './ServiceHeroTypes';

const ServiceHero: React.FC<ServiceHeroProps> = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slick-black">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1440')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slick-black/95 via-slick-black/85 to-slick-black/75"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-slick-white via-slick-gray-300 to-slick-red bg-clip-text text-transparent">
          Our Services
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-12 text-slick-gray-300 leading-relaxed max-w-4xl mx-auto">
          We deliver comprehensive digital solutions that drive growth and innovation. From cutting-edge web development to strategic digital marketing, our expert team transforms your vision into reality.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-slick-red mb-2">50+</div>
            <div className="text-slick-gray-300 text-sm sm:text-base">Service Solutions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-slick-red mb-2">24/7</div>
            <div className="text-slick-gray-300 text-sm sm:text-base">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-slick-red mb-2">100%</div>
            <div className="text-slick-gray-300 text-sm sm:text-base">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;