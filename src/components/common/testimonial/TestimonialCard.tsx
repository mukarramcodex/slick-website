import React from 'react';
import { Testimonial } from './TestimonialTypes';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
  onClick: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive, onClick }) => {
  return (
    <div
      className={`flex-shrink-0 w-80 p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
        isActive
          ? 'bg-gradient-to-b from-[#e6002e]/10 to-black/50 border-[#e6002e]/50 shadow-[0_0_30px_rgba(230,0,46,0.2)]'
          : 'bg-gradient-to-b from-gray-900/50 to-black/50 border-gray-800'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-6">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-16 h-16 rounded-full object-cover mr-4 shadow-[0_0_20px_rgba(230,0,46,0.3)]"
        />
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-gray-400 text-sm">{testimonial.position}</p>
        </div>
      </div>
      <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.review}"</p>
      <div className="flex text-[#e6002e]">
        {[...Array(testimonial.rating)].map((_, i) => (
          <i key={i} className="ph-star-fill text-lg"></i>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;