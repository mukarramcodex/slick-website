export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceProps {
  services: Service[];
}