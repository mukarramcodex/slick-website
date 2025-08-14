export interface TechStackItem {
  id: string;
  name: string;
  category: string;
  icon: string;
  expertise: number;
  description?: string;
}

export interface TechStackCategory {
  categoryId: string;
  categoryName: string;
  technologies: TechStackItem[];
}

export interface TechStackProps {
  heading: string;
  tagline: string;
  categories: TechStackCategory[];
  activeCategory: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

export interface TechStackCardProps {
  technology: TechStackItem;
  index: number;
}