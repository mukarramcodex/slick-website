export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface NavbarData {
  logo: {
    text: string;
    href: string;
  };
  navItems: NavItem[];
  cta: {
    text: string;
    href: string;
  };
}

export interface NavbarProps {
  data: NavbarData;
}