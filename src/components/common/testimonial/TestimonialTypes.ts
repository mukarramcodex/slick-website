export interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
}

export interface TestimonialProps {
  testimonials: TestimonialCardProps[];
}