import React from 'react';
import { Button } from "@/components/ui/button";
import { CallToActionProps } from './CallToActionTypes';

const CallToAction: React.FC<CallToActionProps> = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-b from-[#e6002e]/10 to-black/50 p-6 sm:p-8 md:p-12 rounded-2xl border border-[#e6002e]/30">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8 leading-relaxed">
            Join the growing list of satisfied clients who have transformed their digital presence with Slick Digital. Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="!rounded-button whitespace-nowrap bg-[#e6002e] hover:bg-[#e6002e]/80 text-white px-8 py-3 shadow-[0_0_20px_rgba(230,0,46,0.5)] hover:shadow-[0_0_30px_rgba(230,0,46,0.7)] transition-all cursor-pointer">
              Schedule a Consultation
            </Button>
            <Button className="!rounded-button whitespace-nowrap bg-transparent border border-[#e6002e] text-[#e6002e] hover:bg-[#e6002e] hover:text-white px-8 py-3 transition-all cursor-pointer">
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;