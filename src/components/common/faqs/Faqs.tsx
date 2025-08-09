import { useState } from 'react';
import { FAQ } from '../../contact/faqs/FaqsTypes';

interface FaqsProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

const Faqs = ({ faqs, title = "FAQ", subtitle = "Frequently asked questions" }: FaqsProps) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-brand">{title}</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {subtitle}
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gradient-to-b from-surface-secondary/30 to-surface-primary/30 rounded-2xl border border-border overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-surface-tertiary/30 transition-colors cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <i className={`fas fa-chevron-${expandedFaq === index ? 'up' : 'down'} text-brand transition-transform flex-shrink-0`}></i>
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;