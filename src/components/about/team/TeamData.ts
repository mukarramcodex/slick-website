import { TeamMember } from './TeamTypes';
import ProfileImage from '@/assets/about/ProfileImage.jpg';
import MukarramAli from '@/assets/about/MMukarramAli.jpg';
import NabiaWaqar from '@/assets/about/NabiaWaqar.jpg';

export const teamMembers: TeamMember[] = [
  {
  name: 'Muhammad Saad Satti',
  position: 'CEO & Founder',
  image: ProfileImage,
  bio: 'With 8+ years in digital strategy and full-stack development, I founded Slick Digital Agency to help businesses grow and thrive through smart, scalable digital solutions.',
  expertise: ['Strategic Planning', 'Full-Stack Development', 'Client Relations']
},
  {
    name: 'Muhammad Mukaram Ali',
    position: 'CTO & Lead Developer',
    image: MukarramAli,
    bio: 'I\'m Mukarram Ali, a Full Stack PHP/Laravel & WordPress Developer creating modern, responsive, and SEO-friendly web solutions. I build scalable, user-focused websites that deliver performance and impact.',
    expertise: ['PHP/Laravel Development', 'WordPress (Custom & Full Stack)', 'Front-End (React, Vue, Tailwind CSS, Bootstrap)','QA Automation & Testing']
  },
  {
    name: 'Nabia Waqar',
    position: 'Head of Design',
    image: NabiaWaqar,
    bio: 'Emily is a creative visionary with 10+ years in UX/UI design, specializing in user-centered design that combines aesthetic appeal with functional excellence.',
    expertise: ['UI/UX Design', 'Brand Identity', 'User Research']
  },
  
];
