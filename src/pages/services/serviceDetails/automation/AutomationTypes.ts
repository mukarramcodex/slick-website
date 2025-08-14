export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  duration: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

export interface ServiceOfferedProps {
  categories: ServiceCategory[];
  className?: string;
}

export interface AutomationData {
  categories: ServiceCategory[];
}
