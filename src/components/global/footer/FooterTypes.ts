export interface FooterLink {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterData {
  sections: FooterSection[];
  social: {
    title: string;
    links: SocialLink[];
    newsletter: {
      title: string;
      placeholder: string;
      buttonText: string;
    };
  };
  copyright: string;
}

export interface FooterProps {
  data: FooterData;
}