
import ServiceDetailHero from "@/components/service/serviceDetail/hero/ServiceDetailHero"
import ContentHeroBg from "../../../../assets/serviceDetail/contentWriting/ContentHeroBg.jpg"
import { useState } from "react";
import ServiceOffered from "@/components/service/serviceDetail/serviceOffered/ServicesOffered";
import TechStack from "@/components/service/techStack/TechStack";
import Process from "@/components/service/serviceDetail/process/Process";
import { VirtualData } from "./VirtualData";
import { techData } from "./TechStackData";
import { virtualdevelopmentProcess } from "./ProcessData";
const VirtualSupport = () => {
  const [activeCategory, setActiveCategory] = useState('virtual-services');
  
    const handleCategoryChange = (categoryId: string) => {
      setActiveCategory(categoryId);
    };
  return (
    <div>
      <ServiceDetailHero
        backgroundImg={ContentHeroBg}
        backgroundImgAlt="Creative team working"
        heading="Content & Communication"
        paragraph="Transform your brand story with strategic content that engages, converts, and builds lasting relationships..."
        btnText="Get Started Today"
        btnLink="/contact"
        features={[
          "Strategic Planning",
          "Multi-Channel Approach",
          "Data-Driven Results",
        ]}
      />
      <ServiceOffered
        heading="Our Services"
        tagline="Choose from our comprehensive range of professional services designed to meet your specific needs"
        categories={VirtualData.categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        buttonText="Get Started"
        customButtonText="Need Custom Solutions?"
        customButtonLink="/contact"
      />
      <TechStack
        heading="Technology Stack"
        tagline="We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions"
        categories={techData}
        activeCategory={activeCategory}
      />
      <Process
      heading='Our Development Process'
      tagline='From planning to maintenance, we ensure a streamlined workflow.'
      steps={virtualdevelopmentProcess}
      />
    </div>
  )
}

export default VirtualSupport
