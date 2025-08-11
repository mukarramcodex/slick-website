import React from 'react';
import { Check } from 'lucide-react';
import { BenifitsProps } from './BenifitsTypes';
import { benefitsData } from './BenifitsData';

const Benifits: React.FC<BenifitsProps> = () => {
  return (
    <section className="py-20 bg-slick-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slick-white mb-4">
            Benefits
          </h2>
          <p className="text-lg text-slick-gray-300 max-w-2xl mx-auto">
            Discover how our services can transform your business
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className="flex items-start space-x-4 group"
            >
              {/* Check Icon */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-slick-red flex items-center justify-center">
                  <Check className="w-4 h-4 text-slick-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slick-white mb-2 group-hover:text-slick-red transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-slick-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benifits;