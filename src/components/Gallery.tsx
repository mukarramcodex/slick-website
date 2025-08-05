
import { motion } from 'framer-motion';

const galleryImages = [
  '/assets/images/design1.jpg',
  '/assets/images/design2.jpg',
  '/assets/images/design3.jpg',
  '/assets/images/design4.jpg',
  '/assets/images/design5.jpg',
  '/assets/images/design6.jpg',
];

export default function Gallery() {
  return (
    <section className="bg-black py-20 px-4 md:px-16">
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-12 text-center">
        Our <span className="text-[#e6002e]">Design Gallery</span>
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {galleryImages.map((src, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-xl border border-white/10 hover:scale-105 transition-transform duration-300 group"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className="w-full h-64 object-cover brightness-90 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <button className="text-white text-sm px-4 py-2 border border-white/30 rounded hover:bg-[#e6002e] hover:border-[#e6002e]">
                View Fullscreen
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
