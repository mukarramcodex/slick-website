import React from 'react';
import { Zap, Shield, Users, Clock, Target, Award } from 'lucide-react';
import { FeaturesProps } from './FeaturesTypes';
import { featuresData } from './FeaturesData';

const iconMap = {
  zap: Zap,
  shield: Shield,
  users: Users,
  clock: Clock,
  target: Target,
  award: Award,
};

const Features: React.FC<FeaturesProps> = () => {
  return (
    <section className="py-20 bg-slick-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slick-white mb-4">
            Key Features
          </h2>
          <p className="text-lg text-slick-gray-300 max-w-2xl mx-auto">
            Discover the powerful features that set our services apart
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuresData.map((feature) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            
            return (
              <div
                key={feature.id}
                className="bg-slick-gray-900/30 border border-slick-gray-800/50 rounded-lg p-6 hover:border-slick-red/30 transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <IconComponent 
                      className="w-8 h-8 text-slick-red group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-semibold text-slick-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slick-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;