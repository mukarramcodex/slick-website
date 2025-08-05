
import { motion } from 'framer-motion';
import {
  FacebookLogo,
  TwitterLogo,
  LinkedinLogo,
  InstagramLogo,
} from 'phosphor-react';

const socialLinks = [
  { icon: FacebookLogo, url: 'https://facebook.com' },
  { icon: TwitterLogo, url: 'https://twitter.com' },
  { icon: LinkedinLogo, url: 'https://linkedin.com' },
  { icon: InstagramLogo, url: 'https://instagram.com' },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-20 px-6 md:px-16 text-white">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in <span className="text-[#e6002e]">Touch</span>
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Social Icons */}
        <motion.div
          className="flex flex-col items-center md:items-start space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {socialLinks.map(({ icon: Icon, url }, i) => (
            <motion.a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#e6002e] transition-colors"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Icon size={32} />
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-white/5 border border-white/20 focus:outline-none focus:border-[#e6002e]"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-white/5 border border-white/20 focus:outline-none focus:border-[#e6002e]"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              rows={4}
              className="w-full p-2 rounded bg-white/5 border border-white/20 focus:outline-none focus:border-[#e6002e]"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="bg-[#e6002e] px-6 py-2 rounded-full text-white font-semibold shadow-md hover:scale-105 hover:shadow-red-500/50 transition-transform"
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
