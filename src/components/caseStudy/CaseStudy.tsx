import React from 'react';
import CaseStudyCard from './CaseStudyCard';
import { CaseStudyProps } from './CaseStudyTypes';

const CaseStudy: React.FC<CaseStudyProps> = ({ caseStudies }) => {
  return (
    <section id="case-studies" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Case <span className="text-[#e6002e]">Studies</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and see how we've helped businesses achieve their digital goals.
          </p>
        </div>
        <div className="space-y-20">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={index} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;