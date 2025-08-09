import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ContactMethod } from './ContactHeroTypes';

interface ContactHeroProps {
  contactMethods: ContactMethod[];
}

const ContactHero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-surface-secondary to-background">
      <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=modern%20professional%20office%20contact%20center%20with%20dark%20ambient%20lighting%20red%20accent%20glows%20showing%20communication%20technology%20phone%20systems%20and%20customer%20service%20setup%20clean%20corporate%20environment&width=1440&height=1024&seq=contact-hero&orientation=landscape')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Ready to start your next project? We're here to help you bring your digital vision to life. Reach out to us through any of the channels below.
        </p>
        
      
      </div>
    </section>
  );
};

export default ContactHero;