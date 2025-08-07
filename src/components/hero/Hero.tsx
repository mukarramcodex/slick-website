import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroProps } from './HeroTypes';

const defaultHeroData = {
  headline: "Slick Digital Agency",
  subtitle: "Crafting Digital Experiences",
  description: "We create immersive digital solutions that transform ideas into powerful, engaging experiences that captivate your audience.",
  cta: {
    primary: {
      text: "Explore Services",
      href: "#services"
    },
    secondary: {
      text: "Explore Projects",
      href: "#projects"
    }
  },
  animation: {
    src: "https://lottie.host/4c0b0f94-0c4d-4e8c-9b6a-2d1f8e3a9c7b/Animation.json",
    fallback: "Interactive Dashboard"
  }
};

export default function Hero({ data = defaultHeroData }: HeroProps) {
  const handleCtaClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-secondary">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card/50" />
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1s' }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Center-aligned content */}
        <div className="text-center max-w-6xl mx-auto">
          
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold text-foreground leading-tight tracking-tight mb-6">
              {data.headline}
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium leading-relaxed">
              {data.subtitle}
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button
              variant="hero"
              size="lg"
              onClick={() => handleCtaClick(data.cta.primary.href)}
              className="group"
            >
              {data.cta.primary.text}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              variant="premium"
              size="lg"
              onClick={() => handleCtaClick(data.cta.secondary.href)}
              className="group"
            >
              <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
              {data.cta.secondary.text}
            </Button>
          </motion.div>

          {/* 3D Visual/Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="relative max-w-4xl mx-auto mb-16"
          >
            <div className="relative aspect-video bg-gradient-accent rounded-2xl shadow-premium border border-border/20 p-6 lg:p-8">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                    <Play className="w-10 h-10 lg:w-12 lg:h-12 text-primary" />
                  </div>
                  <p className="text-lg lg:text-xl font-semibold text-foreground/80 mb-2">
                    {data.animation.fallback}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Interactive 3D Experience
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-xl"
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { number: "10k+", label: "Active Users" },
              { number: "99.9%", label: "Uptime" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}