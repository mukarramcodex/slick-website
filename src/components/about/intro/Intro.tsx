import React from 'react';
import { IntroProps } from './IntroTypes';
import ProfileImage from '../../../assets/about/ProfileImage.jpg';


const Intro: React.FC<IntroProps> = ({ services }) => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent animate-pulse"></div>
              <img
                src={ProfileImage}
                alt="Founder"
                className="w-full h-full object-cover rounded-full shadow-[0_0_50px_rgba(230,0,46,0.3)] hover:shadow-[0_0_70px_rgba(230,0,46,0.5)] transition-all duration-500 hover:scale-105 cursor-pointer"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-[#e6002e]">Slick Digital</span></h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              We are a forward-thinking digital agency dedicated to creating exceptional digital experiences. Our mission is to transform businesses through innovative technology solutions and cutting-edge design.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(230,0,46,0.5)] transition-all">
                    <i className={`${service.icon} text-2xl text-[#e6002e]`}></i>
                  </div>
                  <h3 className="text-sm font-semibold">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
