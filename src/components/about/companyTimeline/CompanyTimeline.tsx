import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CompanyTimelineProps } from './CompanyTimelineTypes';
import { timeline } from './CompanyTimelineData';

const CompanyTimeline: React.FC<CompanyTimelineProps> = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our <span className="text-[#e6002e]">Journey</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            From a small startup to an award-winning digital agency, explore the key milestones that have shaped our growth and success.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#e6002e] to-transparent hidden md:block"></div>
          <div className="space-y-12">
            {timeline.map((milestone, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center md:text-left`}>
                  <Card className="bg-gradient-to-b from-gray-900/30 to-black/30 border-gray-800 hover:border-[#e6002e]/50 hover:shadow-[0_0_30px_rgba(230,0,46,0.2)] transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent flex items-center justify-center">
                          <span className="text-[#e6002e] font-bold">{milestone.year}</span>
                        </div>
                        <CardTitle className="text-white text-xl">{milestone.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 mb-4 leading-relaxed">{milestone.description}</p>
                      <div className="w-full h-32 rounded-lg overflow-hidden">
                        <img
                          src={milestone.image}
                          alt={milestone.title}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative z-10 hidden md:block">
                  <div className="w-6 h-6 rounded-full bg-[#e6002e] border-4 border-black shadow-[0_0_20px_rgba(230,0,46,0.5)]"></div>
                </div>
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;