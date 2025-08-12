import { motion } from 'framer-motion';
import { TestimonialCardProps } from './TestimonialTypes';

const TestimonialCard = ({ name, role, company, testimonial, avatar }: TestimonialCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="flex w-[80%] shrink-0 flex-col items-center rounded-2xl border border-border bg-background p-6 shadow-lg transition-shadow hover:shadow-xl sm:w-[60%] md:w-[40%] lg:w-[30%]"
    >
      <img
        src={avatar}
        alt={name}
        className="mb-4 h-20 w-20 rounded-full object-cover"
      />
      <p className="mb-6 text-text-muted">{testimonial}</p>
      <div className="text-center">
        <h4 className="text-lg font-semibold text-text-main">{name}</h4>
        <p className="text-sm text-text-muted">
          {role} at {company}
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;