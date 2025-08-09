import { CaseStudy } from './CaseStudyTypes';

export const caseStudies: CaseStudy[] = [
  {
    title: 'E-Commerce Revolution',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    result: '300% increase in conversion rates',
    description: 'Complete redesign and development of a luxury fashion e-commerce platform with advanced filtering and personalized recommendations.'
  },
  {
    title: 'FinTech Dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tech: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'],
    result: '50% reduction in processing time',
    description: 'Advanced financial analytics dashboard with real-time data visualization and automated reporting capabilities.'
  },
  {
    title: 'Healthcare Platform',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
    tech: ['Angular', 'Java', 'MySQL', 'Docker'],
    result: '200% improvement in patient satisfaction',
    description: 'Comprehensive healthcare management system with telemedicine capabilities and patient portal integration.'
  }
];