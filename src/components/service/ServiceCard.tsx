import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Service } from './ServiceTypes';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();

  const getServiceRoute = (title: string) => {
    const routes: { [key: string]: string } = {
      'Content & Communication': '/services/content-writing',
      'Software & App Development': '/services/software-development',
      'Marketing Services': '/services/marketing',
      'Design Services': '/services/design',
      'Business Automation & AI': '/services/business-automation',
      'Admin & Virtual Support': '/services/virtual-support'
    };
    return routes[title] || '/services';
  };

  const handleLearnMore = () => {
    navigate(getServiceRoute(service.title));
  };

  return (
    <div className="bg-gradient-to-b from-gray-900/50 to-black/50 p-8 rounded-2xl border border-gray-800 hover:border-[#e6002e]/50 hover:shadow-[0_0_30px_rgba(230,0,46,0.2)] transition-all duration-300 group cursor-pointer transform hover:scale-105 ">
      <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(230,0,46,0.5)] transition-all">
        <i className={`${service.icon} text-3xl text-[#ffffff]`}></i>
      </div>
      <h3 className="text-xl font-bold mb-4">{service.title}</h3>
      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
      <button
        onClick={handleLearnMore}
        className="text-[#e6002e] hover:text-[#e6002e]/80 font-semibold transition-colors cursor-pointer"
      >
        Learn More →
      </button>
    </div>
  );
};

export default ServiceCard;