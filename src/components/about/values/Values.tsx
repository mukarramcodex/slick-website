import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ValuesProps } from './ValuesTypes';
import { coreValues } from './ValuesData';

const Values: React.FC<ValuesProps> = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our Core <span className="text-[#e6002e]">Values</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            These fundamental principles guide everything we do, from how we approach projects to how we build relationships with our clients and team members.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreValues.map((value, index) => (
            <Card key={index} className="bg-gradient-to-b from-gray-900/30 to-black/30 border-gray-800 hover:border-[#e6002e]/50 hover:shadow-[0_0_30px_rgba(230,0,46,0.2)] transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(230,0,46,0.5)] transition-all">
                  <i className={`${value.icon} text-2xl text-[#e6002e]`}></i>
                </div>
                <CardTitle className="text-white text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-center leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;