import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ContactCTA() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      viewport={{ once: true }} 
      transition={{ duration: 0.8 }}
      className="relative py-20 px-6 bg-[#000000] text-white text-center overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-white">
          Let’s build something <span className="text-[#e6002e] glow-text">remarkable</span> together
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Reach out to discuss your next project. We’re always ready to bring ideas to life.
        </p>
        <Button className="bg-[#e6002e] text-white px-8 py-4 text-lg rounded-full shadow-lg hover:scale-105 hover:shadow-[#e6002e]/60 transition-all">
          Contact Us
        </Button>
      </div>

      {/* Subtle Background Light Spots */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute w-48 h-48 bg-white opacity-5 rounded-full top-10 left-10 blur-3xl"></div>
        <div className="absolute w-32 h-32 bg-white opacity-5 rounded-full bottom-10 right-10 blur-2xl"></div>
      </div>
    </motion.section>
  );
}
