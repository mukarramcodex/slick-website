import React from 'react';
import { FooterProps } from './FooterTypes';
import { footerLinks } from './FooterData';

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="py-12 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-2xl font-bold mb-4">
          Slick<span className="text-[#e6002e]">Digital</span>
        </div>
        <p className="text-gray-400 mb-6">
          Crafting extraordinary digital experiences since 2020
        </p>
        <div className="flex justify-center space-x-8 text-sm text-gray-400">
          {footerLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-[#e6002e] transition-colors cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
          © 2025 Slick Digital Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;