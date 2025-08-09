import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { officeAddress, businessHours, visitorInfo } from './OfficeLocationData';

const OfficeLocation = () => {
  return (
    <section id="location" className="py-20 px-6 bg-gradient-to-b from-surface-secondary to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Visit Our <span className="text-brand">Office</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Located in the heart of the business district, our office is easily accessible and equipped with modern facilities for client meetings.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-gradient-to-b from-surface-secondary/30 to-surface-primary/30 border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <i className={`${officeAddress.icon} text-brand mr-3`}></i>
                  {officeAddress.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                {Array.isArray(officeAddress.content) && officeAddress.content.map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-surface-secondary/30 to-surface-primary/30 border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <i className={`${businessHours.icon} text-brand mr-3`}></i>
                  {businessHours.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                {!Array.isArray(businessHours.content) && Object.entries(businessHours.content).map(([day, hours], index) => (
                  <div key={index} className="flex justify-between">
                    <span>{day}</span>
                    <span>{hours}</span>
                  </div>
                ))}
                <div className="pt-2 border-t border-border">
                  <div className="text-brand text-sm font-semibold">Emergency Support: 24/7</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-b from-surface-secondary/30 to-surface-primary/30 border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <i className="fas fa-info-circle text-brand mr-3"></i>
                  Visitor Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                {visitorInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <i className={`${info.icon} text-brand mt-1`}></i>
                    <div>
                      <div className="font-semibold">{info.title}</div>
                      <div className="text-sm">{info.description}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 lg:h-full bg-gradient-to-b from-surface-tertiary to-surface-secondary rounded-2xl border border-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.7905807781!2d-0.12773998442916495!3d51.50732391836151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b5c65e4b5a9%3A0x9e65b5e6b8c7a4a5!2s10%20Downing%20Street%2C%20London%20SW1A%202AA%2C%20UK!5e0!3m2!1sen!2sus!4v1642678901234!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;