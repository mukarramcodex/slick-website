import { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';
import TestimonialCard from './TestimonialCard';
import { TestimonialProps } from './TestimonialTypes';

const Testimonial = ({ testimonials }: TestimonialProps) => {
  const baseVelocity = -2;
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${v}%`);
  const containerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);
    
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth;
      const currentX = baseX.get();
      
      if (currentX <= -50) {
        moveBy = 100 - currentX;
      }
    }
    
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <section className="overflow-hidden py-20">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-3xl font-bold text-text-main md:text-4xl lg:text-5xl"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto max-w-2xl text-text-muted"
        >
          Hear from businesses we've helped transform through innovative digital solutions
        </motion.p>
      </div>

      <div className="relative">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className="flex gap-6 px-4"
          whileHover={{ cursor: 'grab' }}
          whileTap={{ cursor: 'grabbing' }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.1}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;