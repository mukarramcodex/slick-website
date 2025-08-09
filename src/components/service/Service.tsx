import React from 'react';
import ServiceCard from './ServiceCard';
import { ServiceProps } from './ServiceTypes';

const Service: React.FC<ServiceProps> = ({ services }) => {
  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-[#e6002e]">Services</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive digital solutions tailored to meet your business needs and exceed expectations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;