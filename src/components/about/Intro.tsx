import { motion } from 'framer-motion';
import { Lightbulb, Globe, Bot, Headphones } from 'lucide-react';
import { IntroProps } from './AboutTypes';

const defaultAboutData = {
  headline: "Who We Are",
  subheading: "Transforming Digital Landscapes at Global Scale",
  description: "As a trillion-dollar digital powerhouse, we've been at the forefront of digital transformation for over a decade. Our cutting-edge solutions empower businesses worldwide to scale, innovate, and thrive in the digital age through comprehensive services that span content creation, software development, marketing excellence, and AI-driven automation.",
  missionPoints: [
    {
      icon: "lightbulb",
      title: "Innovation-First Approach",
      description: "Leading with breakthrough technologies and creative solutions that redefine industry standards."
    },
    {
      icon: "globe",
      title: "Scalable Digital Services",
      description: "Enterprise-grade solutions designed to grow with your business across global markets."
    },
    {
      icon: "bot",
      title: "AI-Driven Transformation",
      description: "Leveraging artificial intelligence to automate processes and enhance decision-making."
    },
    {
      icon: "headphones",
      title: "Global Virtual Support",
      description: "24/7 premium support ensuring seamless operations across all time zones."
    }
  ],
  image: {
    src: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Digital transformation and innovation"
  }
};

const iconMap = {
  lightbulb: Lightbulb,
  globe: Globe,
  bot: Bot,
  headphones: Headphones
};

export default function Intro({ data = defaultAboutData }: IntroProps) {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 left-20 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-square lg:aspect-[4/5] bg-gradient-accent rounded-2xl shadow-premium border border-border/20 p-6 lg:p-8">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/5 rounded-xl overflow-hidden">
                  <img
                    src={data.image.src}
                    alt={data.image.alt}
                    className="w-full h-full object-cover rounded-xl opacity-80"
                  />
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [8, -8, 8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 w-20 h-20 bg-accent/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="order-1 lg:order-2"
          >
            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight tracking-tight mb-4">
                {data.headline}
              </h2>
              <h3 className="text-xl sm:text-2xl text-primary font-semibold leading-relaxed">
                {data.subheading}
              </h3>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12"
            >
              {data.description}
            </motion.p>

            {/* Mission Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {data.missionPoints.map((point, index) => {
                const IconComponent = iconMap[point.icon as keyof typeof iconMap];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {point.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}