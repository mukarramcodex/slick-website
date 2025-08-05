import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <iframe
          src="https://my.spline.design/claritystream-BsrSFqecCvA5b9sMJLo0BKDX/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-screen"
          title="Spline Hero"
        ></iframe>
      </motion.div>
      <div className="absolute inset-0 bg-black opacity-30 z-0" />
    </section>
  );
}
