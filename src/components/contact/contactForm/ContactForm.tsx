import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactFormData, ContactFormProps } from './ContactFormTypes';
import { toast } from "@/hooks/use-toast";

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [selectedInquiry, setSelectedInquiry] = useState('general');
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'general',
    budgetRange: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate sending email
    try {
      // Here you would integrate with your email service
      console.log('Sending form data to contact@slickdigitalagency.com:', formData);
      
      onSubmit(formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for your inquiry. We'll get back to you within 2 hours during business hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: 'general',
        budgetRange: '',
        message: ''
      });
      setSelectedInquiry('general');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact us directly.",
        variant: "destructive"
      });
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Send Us a <span className="text-brand">Message</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Fill out the form below and we'll get back to you within 2 hours during business hours. For urgent matters, please call us directly.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Why Choose Slick Digital?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand/20 to-transparent flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-clock text-xl text-brand"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Quick Response Times</h4>
                  <p className="text-muted-foreground">We pride ourselves on fast, professional responses to all inquiries.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand/20 to-transparent flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-user-friends text-xl text-brand"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Dedicated Team</h4>
                  <p className="text-muted-foreground">Work directly with experienced professionals who understand your needs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand/20 to-transparent flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-alt text-xl text-brand"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Confidential Discussions</h4>
                  <p className="text-muted-foreground">All consultations are confidential, and we're happy to sign NDAs.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand/20 to-transparent flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-handshake text-xl text-brand"></i>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Free Consultations</h4>
                  <p className="text-muted-foreground">Initial project discussions and estimates are always complimentary.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-gradient-to-b from-surface-secondary/30 to-surface-primary/30 backdrop-blur-sm border border-border">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  className="bg-surface-primary/50 border-border text-foreground placeholder-muted-foreground focus:border-brand focus:ring-brand text-sm"
                  required
                />
                <Input
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  className="bg-surface-primary/50 border-border text-foreground placeholder-muted-foreground focus:border-brand focus:ring-brand text-sm"
                  required
                />
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="bg-surface-primary/50 border-border text-foreground placeholder-muted-foreground focus:border-brand focus:ring-brand text-sm"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="bg-surface-primary/50 border-border text-foreground placeholder-muted-foreground focus:border-brand focus:ring-brand text-sm"
                />
              </div>
              <Input
                placeholder="Company Name (Optional)"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="bg-surface-primary/50 border-border text-foreground placeholder-muted-foreground focus:border-brand focus:ring-brand text-sm"
              />
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <select
                    value={selectedInquiry}
                    onChange={(e) => {
                      setSelectedInquiry(e.target.value);
                      handleInputChange('inquiryType', e.target.value);
                    }}
                    className="w-full bg-surface-primary/50 border border-border text-foreground text-sm rounded-md px-3 py-2 focus:border-brand focus:ring-brand cursor-pointer appearance-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="sales">Sales & Partnerships</option>
                    <option value="support">Technical Support</option>
                    <option value="careers">Careers</option>
                    <option value="press">Press & Media</option>
                  </select>
                  <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-brand pointer-events-none"></i>
                </div>
                <div className="relative">
                  <select 
                    value={formData.budgetRange}
                    onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                    className="w-full bg-surface-primary/50 border border-border text-foreground text-sm rounded-md px-3 py-2 focus:border-brand focus:ring-brand cursor-pointer appearance-none"
                  >
                    <option value="">Budget Range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                  </select>
                  <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-brand pointer-events-none"></i>
                </div>
              </div>
              <Textarea
                placeholder="Tell us about your project or inquiry. Include any specific requirements, timeline, or questions you have..."
                rows={6}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="bg-surface-primary/50 border-border text-foreground placeholder-muted-foreground focus:border-brand focus:ring-brand text-sm resize-none"
                required
              />
              <div className="flex items-center space-x-3">
                <Button type="button" className="!rounded-button whitespace-nowrap bg-transparent border border-border text-muted-foreground hover:bg-surface-secondary hover:text-foreground text-sm px-4 py-2 transition-all cursor-pointer">
                  <i className="fas fa-paperclip mr-2"></i>
                  Attach File
                </Button>
                <span className="text-xs text-muted-foreground">Max file size: 10MB</span>
              </div>
              <Button type="submit" className="!rounded-button whitespace-nowrap w-full bg-brand hover:bg-brand/80 text-brand-foreground py-3 shadow-[0_0_20px_rgba(230,0,46,0.5)] hover:shadow-[0_0_30px_rgba(230,0,46,0.7)] transition-all cursor-pointer">
                Send Message
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                By submitting this form, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;