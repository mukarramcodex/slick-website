import { FooterData } from './FooterTypes';

export const footerData: FooterData = {
  sections: [
    {
      title: "Company",
      links: [
        { label: "About", href: "#about" },
        { label: "Blog", href: "#blog" },
        { label: "Careers", href: "#careers" },
        { label: "Press", href: "#press" }
      ]
    },
    {
      title: "Services",
      links: [
        { label: "Content & Communication", href: "#content" },
        { label: "Software & App Development", href: "#software" },
        { label: "Marketing Services", href: "#marketing" },
        { label: "Design Services", href: "#design" },
        { label: "Business Automation & AI", href: "#automation" },
        { label: "Admin & Virtual Support", href: "#support" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Help Center", href: "#help" },
        { label: "Contact Support", href: "#support" }
      ]
    }
  ],
  social: {
    title: "Connect",
    links: [
      { platform: "Twitter", href: "https://twitter.com", icon: "Twitter" },
      { platform: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
      { platform: "Instagram", href: "https://instagram.com", icon: "Instagram" },
      { platform: "YouTube", href: "https://youtube.com", icon: "Youtube" }
    ],
    newsletter: {
      title: "Stay Updated",
      placeholder: "Enter your email",
      buttonText: "Subscribe"
    }
  },
  copyright: "© 2024 Slick Digital Agency. All rights reserved."
};