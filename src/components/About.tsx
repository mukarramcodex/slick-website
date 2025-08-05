
import { motion } from 'framer-motion';
import { Code, Palette, Cube, Phone } from 'phosphor-react';
import { BiBot } from 'react-icons/bi';

const services = [
  { icon: <Code size={32} />, label: 'Web Dev' },
  { icon: <Palette size={32} />, label: 'UI/UX' },
  { icon: <BiBot size={32} />, label: 'Automation' },
  { icon: <Phone size={32} />, label: 'Mobile Apps' },
  { icon: <Cube size={32} />, label: 'Spline 3D' },
];

export default function About() {
  return (
    <section className="w-full min-h-screen py-20 px-6 md:px-12 bg-black relative">
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(#ffffff20_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="rounded-full border-4 border-[#e6002e] p-2 hover:scale-105 transition-transform duration-500 shadow-[0_0_30px_#e6002e66]">
            <img
              src="/founder.jpg"
              alt="Founder"
              className="w-64 h-64 object-cover rounded-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Our Mission</h2>
          <p className="text-gray-300 leading-relaxed">
            At Slick Digital, we craft immersive digital experiences that empower brands with futuristic technology. Our work fuses creativity, code, and innovation.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            {services.map((s, i) => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.1 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-2 text-sm text-white bg-white/5 p-4 rounded-xl shadow-inner border border-white/10"
              >
                <div className="text-[#e6002e]">{s.icon}</div>
                <span>{s.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
