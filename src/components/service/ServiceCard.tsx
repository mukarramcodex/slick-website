import React from 'react';
import { Service } from './ServiceTypes';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-800 hover:border-[#e6002e]/50 hover:shadow-[0_0_30px_rgba(230,0,46,0.2)] transition-all duration-300 group cursor-pointer">
      <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(230,0,46,0.5)] transition-all">
        <i className={`${service.icon} text-3xl text-[#e6002e]`}></i>
      </div>
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
      <a
        href="https://readdy.ai/home/0defd947-4adb-4a81-9297-cdc04d9522a4/38c7b6a5-28e8-481d-ac8b-ff869bfc6828"
        data-readdy="true"
        className="text-[#e6002e] hover:text-[#e6002e]/80 font-semibold transition-colors cursor-pointer"
      >
        Learn More →
      </a>
    </div>
  );
};

export default ServiceCard;