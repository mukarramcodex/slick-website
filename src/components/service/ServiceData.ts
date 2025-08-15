import { Bot, Code, Headset, Megaphone, Pencil, SplinePointer } from 'lucide-react';
import { Service } from './ServiceTypes';

export const services: Service[] = [
  {
    icon: Pencil,
    title: 'Content & Communication',
    description: 'Clear, compelling content and communication strategies that drive engagement and build trust across platforms.'
  },
  {
    icon: Code,
    title: 'Software & App Development',
    description: 'Robust web and mobile applications tailored to your business goals using modern full stack technologies.'
  },
  {
    icon: Megaphone,
    title: 'Marketing Services',
    description: 'Performance-driven digital marketing strategies that amplify your brand presence and generate measurable results.'
  },
  {
    icon: SplinePointer,
    title: 'Design Services',
    description: 'Visually striking and user-friendly designs that elevate your brand and deliver seamless user experiences.'
  },
  {
    icon: Bot,
    title: 'Business Automation & AI',
    description: 'Automate workflows and leverage AI to optimize operations, reduce manual work, and scale efficiently.'
  },
  {
    icon: Headset,
    title: 'Admin & Virtual Support',
    description: 'Reliable administrative and virtual assistance to keep your day-to-day operations smooth and stress-free.'
  }
];
