import { Link } from 'react-router-dom';
import { FacebookLogo, TwitterLogo, InstagramLogo, LinkedinLogo } from 'phosphor-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 px-6 py-12 mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Left - Branding */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white">Slick Digital Agency</h2>
          <p className="text-sm text-gray-400 max-w-sm">
            Crafting cinematic, immersive digital experiences for tomorrow's web.
          </p>
        </div>

        {/* Center - Navigation */}
        <div className="flex flex-col space-y-2 text-sm font-medium">
          <Link to="/" className="hover:text-[#e6002e] transition">Home</Link>
          <Link to="/services" className="hover:text-[#e6002e] transition">Services</Link>
          <Link to="/case-studies" className="hover:text-[#e6002e] transition">Case Studies</Link>
          <Link to="/testimonials" className="hover:text-[#e6002e] transition">Testimonials</Link>
          <Link to="/careers" className="hover:text-[#e6002e] transition">Careers</Link>
          <Link to="/contact" className="hover:text-[#e6002e] transition">Contact</Link>
        </div>

        {/* Right - Social Icons */}
        <div className="flex md:justify-end gap-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e6002e]">
            <FacebookLogo size={24} weight="fill" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e6002e]">
            <TwitterLogo size={24} weight="fill" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e6002e]">
            <InstagramLogo size={24} weight="fill" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#e6002e]">
            <LinkedinLogo size={24} weight="fill" />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-xs text-gray-500 mt-10 text-center">
        © {new Date().getFullYear()} Slick Digital Agency. All rights reserved.
      </div>
    </footer>
  );
}
