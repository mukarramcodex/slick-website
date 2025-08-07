import { motion } from 'framer-motion';
import { ArrowRight, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FooterProps } from './FooterTypes';
import SlickLogo from '@/assets/SlickLogo.svg';

const iconMap = {
  Twitter,
  Linkedin,
  Instagram,
  Youtube
};

export default function Footer({ data }: FooterProps) {
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(href, '_blank');
    }
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    console.log('Newsletter subscription submitted');
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-12">
          
          {/* Company Sections */}
          {data.sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-lg font-heading font-bold text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: (sectionIndex * 0.1) + (linkIndex * 0.05), duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      onClick={() => handleLinkClick(link.href)}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer group relative"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-lg font-heading font-bold text-foreground mb-6">
                {data.social.title}
              </h3>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {data.social.links.map((social, index) => {
                  const IconComponent = iconMap[social.icon as keyof typeof iconMap];
                  return (
                    <motion.a
                      key={social.platform}
                      href={social.href}
                      onClick={() => handleLinkClick(social.href)}
                      className="w-10 h-10 bg-secondary hover:bg-accent rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {IconComponent && <IconComponent size={18} />}
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-base font-semibold text-foreground mb-4">
                {data.social.newsletter.title}
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder={data.social.newsletter.placeholder}
                  className="bg-secondary border-border focus:border-primary"
                  required
                />
                <Button
                  type="submit"
                  variant="hero"
                  size="default"
                  className="w-full group"
                >
                  {data.social.newsletter.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            
            {/* Logo & Copyright */}
            <div className="flex items-center space-x-4">
              <img 
                src={SlickLogo} 
                alt="Slick Digital Agency" 
                className="h-8 w-auto"
              />
              <span className="text-sm text-muted-foreground">
                {data.copyright}
              </span>
            </div>

            {/* Back to Top */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group"
            >
              Back to Top
              <ArrowRight className="ml-2 h-4 w-4 -rotate-90 transition-transform group-hover:-translate-y-1" />
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}