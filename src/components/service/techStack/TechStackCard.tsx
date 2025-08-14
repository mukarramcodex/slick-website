import React from 'react';
import { TechStackCardProps } from '../../../pages/services/serviceDetails/contentWriting/TechStackTypes';

const TechStackCard: React.FC<TechStackCardProps> = ({ technology, index }) => {
  return (
    <div 
      className="group relative bg-slick-gray-900 border border-slick-gray-800 rounded-lg p-6 hover:shadow-2xl hover:shadow-slick-red/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-slick-red/5 to-slick-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Icon */}
        <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
          <div className="w-16 h-16 bg-gradient-to-br from-slick-red/20 to-slick-red/30 rounded-full flex items-center justify-center mx-auto group-hover:from-slick-red/30 group-hover:to-slick-red/40 transition-all duration-300">
            <span className="text-2xl">{technology.icon}</span>
          </div>
        </div>
        
        {/* Name */}
        <h4 className="text-lg font-bold text-slick-white mb-2 group-hover:text-slick-red transition-colors duration-300">
          {technology.name}
        </h4>
        
        {/* Category */}
        <p className="text-sm text-slick-gray-400 mb-4 group-hover:text-slick-gray-300 transition-colors duration-300">
          {technology.category}
        </p>
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-slick-gray-400">Expertise</span>
            <span className="text-xs font-semibold text-slick-red">{technology.expertise}%</span>
          </div>
          <div className="w-full bg-slick-gray-800 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-slick-red to-slick-red/80 h-2 rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${technology.expertise}%`,
                transitionDelay: `${index * 200}ms`
              }}
            ></div>
          </div>
        </div>
        
        {/* Description */}
        {technology.description && (
          <p className="text-xs text-slick-gray-400 leading-relaxed group-hover:text-slick-gray-300 transition-colors duration-300">
            {technology.description}
          </p>
        )}
        
        {/* Hover indicator */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slick-red to-slick-red/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
};

export default TechStackCard;