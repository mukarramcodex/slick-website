import { motion } from 'framer-motion';
import FaqsAccordion from './FaqsAccordion';
import { FaqsProps } from './FaqsTypes';

const Faqs = ({ faqs }: FaqsProps) => {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-text-main md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <FaqsAccordion key={index} {...faq} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;