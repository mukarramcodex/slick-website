import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavbarProps } from './NavbarTypes';
import { navItems } from './NavbarData';

const Navbar: React.FC<NavbarProps> = ({ isScrolled, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen, setIsMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-md bg-black/90' : 'bg-black/70'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          Slick<span className="text-[#e6002e]">Digital</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <nav className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#e6002e] transition-colors cursor-pointer"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Desktop Get in Touch Button */}
        <Button className="hidden md:flex !rounded-button whitespace-nowrap bg-[#e6002e] hover:bg-[#e6002e]/80 text-white shadow-[0_0_20px_rgba(230,0,46,0.5)] hover:shadow-[0_0_30px_rgba(230,0,46,0.7)] transition-all cursor-pointer">
          Get in Touch
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileMenuRef}
            id="mobile-menu"
            className="absolute top-full left-0 right-0 bg-black/95 border-t border-gray-800 py-6 md:hidden"
          >
            <nav className="flex flex-col items-center space-y-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-[#e6002e] transition-colors cursor-pointer"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
              {/* Mobile Get in Touch Button */}
              <Button 
                className="!rounded-button whitespace-nowrap bg-[#e6002e] hover:bg-[#e6002e]/80 text-white shadow-[0_0_20px_rgba(230,0,46,0.5)] hover:shadow-[0_0_30px_rgba(230,0,46,0.7)] transition-all cursor-pointer mt-4"
                onClick={handleNavClick}
              >
                Get in Touch
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;