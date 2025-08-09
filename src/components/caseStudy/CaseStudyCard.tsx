import React from 'react';
import { Button } from "@/components/ui/button";
import { CaseStudy } from './CaseStudyTypes';

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ study, index }) => {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
      <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-80 object-cover rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_40px_rgba(230,0,46,0.3)] transition-all duration-500 cursor-pointer"
        />
      </div>
      <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
        <h3 className="text-3xl font-bold mb-4">{study.title}</h3>
        <p className="text-gray-300 mb-6 leading-relaxed">{study.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {study.tech.map((tech, techIndex) => (
            <span key={techIndex} className="px-3 py-1 bg-[#e6002e]/20 text-[#e6002e] rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="mb-6">
          <span className="text-[#e6002e] font-semibold">Result: </span>
          <span className="text-white">{study.result}</span>
        </div>
        <Button className="!rounded-button whitespace-nowrap bg-transparent border border-[#e6002e] text-[#e6002e] hover:bg-[#e6002e] hover:text-white transition-all cursor-pointer">
          View Case Study
        </Button>
      </div>
    </div>
  );
};

export default CaseStudyCard;