export interface OfficeInfo {
  title: string;
  icon: string;
  content: string[] | { [key: string]: string };
}

export interface VisitorInfo {
  icon: string;
  title: string;
  description: string;
}