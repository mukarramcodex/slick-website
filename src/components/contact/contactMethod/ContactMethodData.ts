import { ContactMethod } from './ContactMethodTypes';

export const contactMethods: ContactMethod[] = [
  {
    title: 'General Inquiries',
    icon: 'fas fa-envelope',
    email: 'query@slickdigitalagency.com',
    phone: '+44 7393 642179',
    responseTime: 'Within 2 hours',
    description: 'For general questions and information about our services'
  },
  {
    title: 'Sales & Partnerships',
    icon: 'fas fa-handshake',
    email: 'sales@slickdigitalagency.com',
    phone: '+44 7393 642179',
    responseTime: 'Within 1 hour',
    description: 'Discuss new projects and partnership opportunities'
  },
  {
    title: 'Technical Support',
    icon: 'fas fa-headset',
    email: 'support@slickdigitalagency.com',
    phone: '+44 7393 642179',
    responseTime: '24/7 Available',
    description: 'Get help with existing projects and technical issues'
  }
];