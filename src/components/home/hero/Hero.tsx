import React from 'react';
import { Button } from "@/components/ui/button";
import { HeroProps } from './HeroTypes';

const Hero: React.FC<HeroProps> = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-900"></div>
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent py-4">
          Digital Excellence
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
          We craft extraordinary digital experiences that push boundaries and drive innovation in the modern world.
        </p>
        <Button className="!rounded-button whitespace-nowrap bg-[#e6002e] hover:bg-[#e6002e]/80 text-white text-lg px-8 py-4 shadow-[0_0_30px_rgba(230,0,46,0.5)] hover:shadow-[0_0_40px_rgba(230,0,46,0.8)] transition-all cursor-pointer">
          Start Your Project
        </Button>
      </div>
    </section>
  );
};

export default Hero;
