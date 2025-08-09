import React from 'react';
import { AboutHeroProps } from './AboutHeroTypes';

const AboutHero: React.FC<AboutHeroProps> = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=modern%20professional%20digital%20agency%20office%20environment%20with%20dark%20ambient%20lighting%20red%20accent%20glows%20showing%20team%20collaboration%20innovation%20technology%20workspace%20clean%20corporate%20atmosphere&width=1440&height=1024&seq=about-hero&orientation=landscape')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-[#e6002e] bg-clip-text text-transparent">
          Our Story
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed max-w-4xl mx-auto">
          Since 2020, we've been crafting extraordinary digital experiences that transform businesses and delight users. Our journey is one of innovation, partnership, and relentless pursuit of excellence.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#e6002e] mb-2">5+</div>
            <div className="text-gray-300 text-sm sm:text-base">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#e6002e] mb-2">200+</div>
            <div className="text-gray-300 text-sm sm:text-base">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-[#e6002e] mb-2">15+</div>
            <div className="text-gray-300 text-sm sm:text-base">Team Members</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;