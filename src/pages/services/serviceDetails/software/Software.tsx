import ServiceDetailHero from "@/components/service/serviceDetail/hero/ServiceDetailHero"
import ContentHeroBg from "../../../../assets/serviceDetail/contentWriting/ContentHeroBg.jpg"
import { useState } from "react"
import ServiceOffered from "@/components/service/serviceDetail/serviceOffered/ServicesOffered";
import { softwareData } from "./SoftwareData";
import TechStack from "@/components/service/techStack/TechStack";
import { techData } from "./TechStackData";
import Process from "@/components/service/serviceDetail/process/Process";
import { softwaredevelopmentProcess } from "./ProcessData";

const Software = () => {
  const [activeCategory, setActiveCategory] = useState('software-services');

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
        tagline="Tagline Software"
        categories={softwareData.categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        buttonText="Get Started"
        customButtonText="Need Custom Solutions?"
        customButtonLink="/contact"
      />
      <TechStack
        heading="Technology Stack"
        tagline="Tagline"
        categories={techData}
        activeCategory={activeCategory}
      />
      <Process
        heading="Our Developement Process"
        tagline="TagLine"
        steps={softwaredevelopmentProcess}
      />
    </div>
  )
}

export default Software
