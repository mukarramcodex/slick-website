import { motion } from 'framer-motion';
import { Code, Palette, Cube, Phone } from 'phosphor-react';
import { BiBot } from 'react-icons/bi';

const services = [
  {
    title: 'Web Development',
    icon: <Code size={40} />,
    description: 'Robust, scalable, and high-performance websites tailored to your brand.'
  },
  {
    title: 'UI/UX Design',
    icon: <Palette size={40} />,
    description: 'Immersive digital designs with user-first focus and visual harmony.'
  },
  {
    title: 'Automation Systems',
    icon: <BiBot size={40} />,
    description: 'Smart business automation to boost productivity and reduce manual tasks.'
  },
  {
    title: 'Mobile App Development',
    icon: <Phone size={40} />,
    description: 'Cross-platform apps that blend performance, design, and functionality.'
  },
  {
    title: '3D Experiences (Spline)',
    icon: <Cube size={40} />,
    description: 'Interactive 3D experiences that make your brand unforgettable.'
  }
];

export default function Services() {
  return (
    <section className="w-full min-h-screen py-24 px-6 md:px-16 relative">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our <span className="text-[#e6002e]">Expertise</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 p-6 rounded-xl text-left hover:shadow-[0_0_30px_#e6002e66] transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-[#e6002e] mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
