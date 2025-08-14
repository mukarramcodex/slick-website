export interface ProcessStep {
    step: number;
    title: string;
    desctiption: string;
    timeline: string;
    icon: string;
}

export interface ProcessProps {
    heading: string;
    tagline: string;
    steps: ProcessStep[];
    className?: string;
}