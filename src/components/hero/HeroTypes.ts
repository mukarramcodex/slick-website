export interface HeroData {
  headline: string;
  subtitle: string;
  description: string;
  cta: {
    primary: {
      text: string;
      href: string;
    };
    secondary: {
      text: string;
      href: string;
    };
  };
  animation: {
    src: string;
    fallback: string;
  };
}

export interface HeroProps {
  data?: HeroData;
}