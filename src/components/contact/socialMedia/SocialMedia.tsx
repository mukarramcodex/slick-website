import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SocialPlatform } from './SocialMediaTypes';

interface SocialMediaProps {
  socialPlatforms: SocialPlatform[];
}

const SocialMedia = ({ socialPlatforms }: SocialMediaProps) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-surface-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Connect on <span className="text-brand">Social Media</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow us on social media for the latest updates, industry insights, and behind-the-scenes content. We're active across multiple platforms.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialPlatforms.map((platform, index) => (
            <Card key={index} className="bg-gradient-to-b from-surface-secondary/30 to-surface-primary/30 border-border hover:border-brand/50 hover:shadow-[0_0_30px_rgba(230,0,46,0.2)] transition-all duration-300 group cursor-pointer">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-brand/20 to-transparent flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(230,0,46,0.5)] transition-all">
                  <i className={`${platform.icon} text-2xl text-brand`}></i>
                </div>
                <CardTitle className="text-foreground text-lg">{platform.name}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">{platform.handle}</CardDescription>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-xs text-muted-foreground">{platform.description}</p>
                <Badge variant="outline" className="text-xs text-muted-foreground border-border">
                  Response: {platform.responseTime}
                </Badge>
                <Button 
                  onClick={() => window.open(platform.url, '_blank')}
                  className="!rounded-button whitespace-nowrap w-full bg-transparent border border-brand text-brand hover:bg-brand hover:text-brand-foreground text-sm transition-all cursor-pointer"
                >
                  Follow Us
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;