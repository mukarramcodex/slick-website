import React, { useState } from "react";
import { ProcessStep, ProcessProps } from "./ProcessTypes";

const Process: React.FC<ProcessProps> = ({
    heading,
    tagline,
    steps,
    className = "",
}) => {
    const [activeStep, setActiveStep] = useState<number | null>(null);

    return (
        <section
            className={`py-2 bg-slick-black relative overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-gradient-to-b from-slick-black via-slick-black/50 to-slick-black"></div>
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-slick-red/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slick-red/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-slick-white via-slick-gray-300 to-slick-red bg-clip-text text-transparent">
                        {heading}
                    </h2>
                    <p className="text-lg sm:text-xl text-slick-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {tagline}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${activeStep === index
                                ? "bg-gradient-to-b from-[#e6002e]/10 to-black/50 border-[#e60002e]/50 shadow-[0_0_30px_rgba(230,0,46,0.2)]"
                                : "bg-gradient-to-b from-gray-900/30 to-black/30 border-gray-800 hover:border-[#e6002e]/30"
                                }`}
                            onClick={() => setActiveStep(index)}
                        >
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent flex items-center justify-center mr-4">
                                    <i className={`${step.icon} text-xl text-[#e6002e]`}></i>
                                </div>
                                <div className="text-sm text-[#e6002e] font-semibold">
                                    Step {step.step}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {step.description}
                            </p>
                            <div className="flex items-center text-sm text-gray-400">
                                <i className="fas fa-clock mr-2 text-[#e6002e]"></i>
                                {step.timeline}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;