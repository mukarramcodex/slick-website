import ContactHero from '@/components/contact/hero/ContactHero';
import ContactMethod from '@/components/contact/contactMethod/ContactMethod';
import ContactForm from '@/components/contact/contactForm/ContactForm';
import OfficeLocation from '@/components/contact/officeLocation/OfficeLocation';

import SocialMedia from '@/components/contact/socialMedia/SocialMedia';
import Faqs from '@/components/common/faqs/Faqs';

import { contactMethods } from '@/components/contact/contactMethod/ContactMethodData';

import { socialPlatforms } from '@/components/contact/socialMedia/SocialMediaData';
import { contactFaqs } from '@/components/contact/faqs/FaqsData';
import { ContactFormData } from '@/components/contact/contactForm/ContactFormTypes';
import Team from '@/components/about/team/Team';

const Contact = () => {
  const handleFormSubmit = (data: ContactFormData) => {
    // This is where you would integrate with your email service
    console.log('Form submitted with data:', data);
    // For now, just log the data - you can integrate with EmailJS, Formspree, or your backend
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-['Inter',sans-serif]">
      <ContactHero />
      <ContactMethod contactMethods={contactMethods} />
      <ContactForm onSubmit={handleFormSubmit} />
      <OfficeLocation />
      <Team />
      <SocialMedia socialPlatforms={socialPlatforms} />
      <Faqs 
        faqs={contactFaqs} 
        title="FAQ"
        subtitle="Quick answers to common questions about getting in touch with us and our response procedures."
      />
      
      {/* Emergency Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-surface-secondary to-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-b from-brand/10 to-surface-primary/50 p-12 rounded-2xl border border-brand/30">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-brand/20 to-transparent flex items-center justify-center">
              <i className="fas fa-exclamation-triangle text-3xl text-brand"></i>
            </div>
            <h2 className="text-3xl font-bold mb-4">Emergency Support</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For critical issues affecting live websites or applications, our emergency support team is available 24/7.
              Emergency support is provided for existing clients with active maintenance contracts.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-brand mb-2">+44 7393 642179</div>
                <div className="text-muted-foreground">Emergency Hotline</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-brand mb-2">support@slickdigitalagency.com</div>
                <div className="text-muted-foreground">Priority Email</div>
              </div>
            </div>
            <button className="!rounded-button whitespace-nowrap bg-brand hover:bg-brand/80 text-brand-foreground px-8 py-3 shadow-[0_0_20px_rgba(230,0,46,0.5)] hover:shadow-[0_0_30px_rgba(230,0,46,0.7)] transition-all cursor-pointer">
              Learn About Emergency Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;