import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactProps } from './ContactTypes';

const Contact: React.FC<ContactProps> = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in <span className="text-[#e6002e]">Touch</span></h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can bring your vision to life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Connect With Us</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(230,0,46,0.5)] transition-all">
                  <i className="ph-envelope text-xl text-[#e6002e]"></i>
                </div>
                <span className="text-gray-300">hello@slickdigital.com</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(230,0,46,0.5)] transition-all">
                  <i className="ph-phone text-xl text-[#e6002e]"></i>
                </div>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(230,0,46,0.5)] transition-all">
                  <i className="ph-map-pin text-xl text-[#e6002e]"></i>
                </div>
                <span className="text-gray-300">123 Innovation Street, Tech City, TC 12345</span>
              </div>
            </div>
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                {['ph-twitter-logo', 'ph-linkedin-logo', 'ph-instagram-logo', 'ph-facebook-logo'].map((icon, index) => (
                  <div key={index} className="w-12 h-12 rounded-full bg-gradient-to-r from-[#e6002e]/20 to-transparent flex items-center justify-center hover:shadow-[0_0_20px_rgba(230,0,46,0.5)] transition-all cursor-pointer">
                    <i className={`${icon} text-xl text-[#e6002e]`}></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <form className="space-y-6 p-8 rounded-2xl bg-gradient-to-b from-gray-900/30 to-black/30 backdrop-blur-sm border border-gray-800">
              <div>
                <Input
                  placeholder="Your Name"
                  className="bg-black/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#e6002e] focus:ring-[#e6002e] text-sm"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="bg-black/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#e6002e] focus:ring-[#e6002e] text-sm"
                />
              </div>
              <div>
                <Input
                  placeholder="Service Needed"
                  className="bg-black/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#e6002e] focus:ring-[#e6002e] text-sm"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  rows={5}
                  className="bg-black/50 border-gray-700 text-white placeholder-gray-400 focus:border-[#e6002e] focus:ring-[#e6002e] text-sm resize-none"
                />
              </div>
              <Button className="!rounded-button whitespace-nowrap w-full bg-[#e6002e] hover:bg-[#e6002e]/80 text-white py-3 shadow-[0_0_20px_rgba(230,0,46,0.5)] hover:shadow-[0_0_30px_rgba(230,0,46,0.7)] transition-all cursor-pointer">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;