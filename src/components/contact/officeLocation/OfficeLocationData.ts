import { OfficeInfo, VisitorInfo } from './OfficeLocationTypes';

export const officeAddress: OfficeInfo = {
  title: 'Office Address',
  icon: 'fas fa-map-marker-alt',
  content: [
    '123 Innovation Street',
    'Tech District, Suite 500',
    'London, UK',
    'United Kingdom'
  ]
};

export const businessHours: OfficeInfo = {
  title: 'Business Hours',
  icon: 'fas fa-clock',
  content: {
    'Monday - Friday:': '9:00 AM - 6:00 PM GMT',
    'Saturday:': '10:00 AM - 4:00 PM GMT',
    'Sunday:': 'Closed'
  }
};

export const visitorInfo: VisitorInfo[] = [
  {
    icon: 'fas fa-parking',
    title: 'Parking',
    description: 'Free visitor parking available in building garage'
  },
  {
    icon: 'fas fa-subway',
    title: 'Public Transport',
    description: '2 blocks from Metro Station, multiple bus routes'
  },
  {
    icon: 'fas fa-calendar-check',
    title: 'Appointments',
    description: 'Please schedule in advance for guaranteed availability'
  }
];