import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full px-6 py-4 flex justify-between items-center backdrop-blur-md transition-colors duration-300 ${scrolled ? 'bg-black/60' : 'bg-transparent'}`}
    >
      <Link to="/" className="text-white font-bold text-xl">
        Slick<span className="text-[#e6002e]">Digital</span>
      </Link>

      <nav className="hidden md:flex gap-6 text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`relative transition duration-300 ease-in-out hover:text-[#e6002e] ${location.pathname === link.path ? 'text-[#e6002e]' : 'text-white'}`}
          >
            <span>{link.name}</span>
            <motion.span
              layoutId="underline"
              className="absolute left-0 -bottom-1 h-[2px] w-full bg-[#e6002e] rounded"
              initial={false}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={{ visibility: location.pathname === link.path ? 'visible' : 'hidden' }}
            />
          </Link>
        ))}
      </nav>
    </motion.header>
  );
}
