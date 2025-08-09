export interface CaseStudy {
  title: string;
  image: string;
  tech: string[];
  result: string;
  description: string;
}

export interface CaseStudyProps {
  caseStudies: CaseStudy[];
}