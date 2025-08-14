import React from 'react';
import TechStackCard from './TechStackCard';
import { TechStackProps } from '@/components/service/techStack/TechStackTypes';

const TechStack: React.FC<TechStackProps> = ({ 
  heading,
  tagline,
  categories,
  activeCategory,
  buttonText,
  buttonLink,
  className = '' 
}) => {
  const currentTechStack = categories.find(cat => cat.categoryId === activeCategory) || categories[0];

  return (
    <section className={`py-20 bg-slick-black relative overflow-hidden ${className}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slick-black via-slick-black/50 to-slick-black"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-slick-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-slick-red/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slick-white via-slick-gray-300 to-slick-red bg-clip-text text-transparent">
            {heading}
          </h2>
          <p className="text-lg sm:text-xl text-slick-gray-300 max-w-3xl mx-auto leading-relaxed">
            {tagline}
          </p>
        </div>

        {/* Technology Grid */}
        <div 
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in"
        >
          {currentTechStack.technologies.map((technology, index) => (
            <TechStackCard 
              key={technology.id}
              technology={technology} 
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        {buttonText && (
          <div className="text-center mt-16">
            <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-slick-red to-slick-red/80 text-slick-white font-semibold rounded-lg hover:shadow-lg hover:shadow-slick-red/25 transition-all duration-300 cursor-pointer group">
              <span className="mr-2">{buttonText}</span>
              <svg 
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechStack;