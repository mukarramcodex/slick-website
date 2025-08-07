export interface MissionPoint {
  icon: string;
  title: string;
  description: string;
}

export interface AboutData {
  headline: string;
  subheading: string;
  description: string;
  missionPoints: MissionPoint[];
  image: {
    src: string;
    alt: string;
  };
}

export interface IntroProps {
  data?: AboutData;
}