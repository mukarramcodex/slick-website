import { motion } from 'framer-motion';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Aisha Rehman',
    title: 'CEO, VisionTech',
    image: '/clients/aisha.jpg',
    quote: 'Slick Digital exceeded our expectations. Their attention to detail and creativity blew us away.'
  },
  {
    name: 'David Lin',
    title: 'CTO, FlowGrid',
    image: '/clients/david.jpg',
    quote: 'They delivered a fully automated platform in record time. Their team is stellar.'
  },
  {
    name: 'Fatima Khan',
    title: 'Founder, LuxeStyle',
    image: '/clients/fatima.jpg',
    quote: 'From UI/UX to development, Slick Digital gave our brand a whole new life.'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-20 px-6 md:px-12 relative bg-black">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        What Our <span className="text-[#e6002e]">Clients Say</span>
      </motion.h2>

      <div className="overflow-hidden relative max-w-5xl mx-auto">
        <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              className={`min-w-full px-6 md:px-10 py-8 flex flex-col items-center text-center transition duration-500 ${activeIndex === index ? 'shadow-[0_0_40px_#e6002e55]' : 'opacity-70'}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover border-2 border-[#e6002e] mb-4"
              />
              <h4 className="text-lg font-semibold">{t.name}</h4>
              <p className="text-sm text-[#999] mb-2">{t.title}</p>
              <p className="text-gray-300 max-w-md">"{t.quote}"</p>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-3 h-3 rounded-full ${i === activeIndex ? 'bg-[#e6002e]' : 'bg-gray-600'} transition`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
