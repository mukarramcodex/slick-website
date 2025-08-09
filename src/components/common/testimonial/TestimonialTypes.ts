export interface Testimonial {
  name: string;
  position: string;
  image: string;
  review: string;
  rating: number;
}

export interface TestimonialProps {
  testimonials: Testimonial[];
  activeTestimonial: number;
  setActiveTestimonial: (index: number) => void;
}