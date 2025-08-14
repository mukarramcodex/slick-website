import React, { useState } from 'react';
import { CheckCircle, Clock, DollarSign } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

export interface ServiceOfferedProps {
  heading: string;
  tagline: string;
  categories: ServiceCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  buttonText: string;
  buttonLink?: string;
  customButtonText?: string;
  customButtonLink?: string;
  className?: string;
}

const ServiceOffered: React.FC<ServiceOfferedProps> = ({ 
  heading,
  tagline,
  categories, 
  activeCategory,
  onCategoryChange,
  buttonText,
  buttonLink,
  customButtonText,
  customButtonLink,
  className = '' 
}) => {
  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0];

  return (
    <section className={`py-20 bg-slick-black relative overflow-hidden ${className}`}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-slick-black via-slick-black/50 to-slick-black"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-slick-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slick-red/5 rounded-full blur-3xl"></div>
      
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

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-slick-red text-slick-white shadow-lg shadow-slick-red/25'
                  : 'bg-slick-gray-800 text-slick-gray-300 hover:bg-slick-gray-700 hover:text-slick-white'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slick-white mb-4">
            {currentCategory.title}
          </h3>
          <p className="text-slick-gray-300 max-w-2xl mx-auto">
            {currentCategory.description}
          </p>
        </div>

        {/* Services Grid */}
        <div 
          key={activeCategory}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in"
        >
          {currentCategory.services.map((service, index) => (
            <div 
              key={service.id}
              className="group relative bg-slick-gray-900 border border-slick-gray-800 rounded-lg p-8 hover:shadow-2xl hover:shadow-slick-red/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-slick-red/5 to-slick-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <h4 className="text-xl font-bold text-slick-white mb-4 group-hover:text-slick-red transition-colors duration-300">
                  {service.title}
                </h4>
                
                {/* Description */}
                <p className="text-slick-gray-300 mb-6 leading-relaxed group-hover:text-slick-gray-200 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center text-sm text-slick-gray-400 group-hover:text-slick-gray-300 transition-colors duration-300"
                      style={{ 
                        transitionDelay: `${featureIndex * 50}ms` 
                      }}
                    >
                      <CheckCircle className="w-4 h-4 text-slick-red mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price and Duration */}
                <div className="flex items-center justify-between text-sm text-slick-gray-400 mb-6">
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 text-slick-red mr-2" />
                    <span className="font-semibold text-slick-white">{service.price}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-slick-red mr-2" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gradient-to-r from-slick-red to-slick-red/80 text-slick-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-slick-red/25 transition-all duration-300 group-hover:scale-105">
                  {buttonText}
                </button>
                
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slick-red to-slick-red/80 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-slick-red to-slick-red/80 text-slick-white font-semibold rounded-lg hover:shadow-lg hover:shadow-slick-red/25 transition-all duration-300 cursor-pointer group">
            <span className="mr-2">{customButtonText || "Need Custom Solutions?"}</span>
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
      </div>
    </section>
  );
};

export default ServiceOffered;