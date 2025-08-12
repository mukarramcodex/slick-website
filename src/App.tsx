import React, { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from '@/components/global/navbar/Navbar';
import Footer from '@/components/global/footer/Footer';
import Home from '@/pages/home/Home';
import About from '@/pages/about/About';
import NotFound from "./pages/NotFound";
import Contact from './pages/contact/Contact';
import Services from './pages/services/Services';
import ContentWriting from './pages/services/serviceDetails/contentWriting/ContentWriting';
import Automation from './pages/services/serviceDetails/automation/Automation';
import Design from './pages/services/serviceDetails/design/Design';
import Marketing from './pages/services/serviceDetails/marketing/Marketing';
import Software from './pages/services/serviceDetails/software/Software';
import VirtualSupport from './pages/services/serviceDetails/virtualSupport/VirtualSupport';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar 
            isScrolled={isScrolled}
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/content-writing" element={<ContentWriting />} />
            <Route path="/services/software-development" element={<Software />} />
          <Route path="/services/marketing" element={<Marketing />} />
          <Route path="/services/design" element={<Design />} />
          <Route path="/services/business-automation" element={<Automation />} />
          <Route path="/services/virtual-support" element={<VirtualSupport />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;