import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CompanyOverviewProps } from './CompanyOverviewTypes';

const CompanyOverview: React.FC<CompanyOverviewProps> = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">Our <span className="text-[#e6002e]">Mission</span></h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              At Slick Digital, we believe that exceptional digital experiences have the power to transform businesses and connect people in meaningful ways. Our mission is to bridge the gap between cutting-edge technology and practical business solutions.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Founded in 2020 by Sarah Johnson, our company emerged from a simple yet powerful vision: to create digital solutions that not only look beautiful but also drive real business results. We started as a small team of passionate developers and designers, united by our commitment to excellence and innovation.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Today, we've grown into a full-service digital agency that partners with businesses of all sizes, from ambitious startups to Fortune 500 companies, helping them navigate the digital landscape and achieve their goals.
            </p>
          </div>
          <div className="space-y-6">
            <Card className="bg-gradient-to-b from-gray-900/50 to-black/50 border-gray-800 hover:border-[#e6002e]/50 hover:shadow-[0_0_30px_rgba(230,0,46,0.2)] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent flex items-center justify-center">
                    <i className="fas fa-eye text-xl text-[#e6002e]"></i>
                  </div>
                  <h3 className="text-xl font-bold">Our Vision</h3>
                </div>
                <p className="text-gray-300">To be the leading digital agency that empowers businesses to thrive in the digital age through innovative, user-centered solutions.</p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-b from-gray-900/50 to-black/50 border-gray-800 hover:border-[#e6002e]/50 hover:shadow-[0_0_30px_rgba(230,0,46,0.2)] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent flex items-center justify-center">
                    <i className="fas fa-target text-xl text-[#e6002e]"></i>
                  </div>
                  <h3 className="text-xl font-bold">Our Purpose</h3>
                </div>
                <p className="text-gray-300">To transform ideas into exceptional digital experiences that drive growth, enhance user engagement, and create lasting value for our clients.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;