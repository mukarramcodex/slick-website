import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactMethod as ContactMethodType } from './ContactMethodTypes';

interface ContactMethodProps {
  contactMethods: ContactMethodType[];
}

const ContactMethod = ({ contactMethods }: ContactMethodProps) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-surface-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Multiple Ways to <span className="text-brand">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the communication method that works best for you. We're committed to providing prompt, professional responses across all channels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <Card key={index} className="bg-gradient-to-b from-surface-secondary/30 to-surface-primary/30 border-border hover:border-brand/50 hover:shadow-[0_0_30px_rgba(230,0,46,0.2)] transition-all duration-300 group cursor-pointer">
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-brand/20 to-transparent flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(230,0,46,0.5)] transition-all">
                    <i className={`${method.icon} text-xl text-brand`}></i>
                  </div>
                  <div>
                    <CardTitle className="text-foreground text-xl">{method.title}</CardTitle>
                    <Badge variant="outline" className="text-xs text-brand border-brand/50 mt-1">
                      {method.responseTime}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-muted-foreground">{method.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-envelope text-brand"></i>
                  <span className="text-muted-foreground">{method.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-phone text-brand"></i>
                  <span className="text-muted-foreground">{method.phone}</span>
                </div>
                <Button className="!rounded-button whitespace-nowrap w-full bg-transparent border border-brand text-brand hover:bg-brand hover:text-brand-foreground transition-all cursor-pointer">
                  Contact Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethod;