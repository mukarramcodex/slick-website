import ServiceDetailHero from "@/components/service/serviceDetail/hero/ServiceDetailHero";
import ContentHeroBg from "../../../../assets/serviceDetail/contentWriting/ContentHeroBg.jpg"
import ServiceOffered from "@/components/service/serviceDetail/serviceOffered/ServicesOffered";
import TechStack from "@/components/service/techStack/TechStack";
import Process from "@/components/service/serviceDetail/process/Process";
import { automationdata } from "./AutomationData";
import { developmentProcess } from "./ProcessData";
import { useState } from "react";
import { techData } from "./TechData";
const Automation = () => {
  const [activeCategory, setActiveCategory] = useState('automation');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };
  return (
    <div>
      <ServiceDetailHero
        backgroundImg={ContentHeroBg}
        backgroundImgAlt="Business Automation Solutions"
        heading="Business Automation & AI"
        paragraph="Streamline your operations and unlock new efficiencies with intelligent automation solutions. Our AI-powered systems reduce manual work and accelerate your business growth."
        btnText="Get Started Today"
        btnLink="/contact"
        features={["Process Automation", "AI Integration", "Efficiency Optimization"]}
      />
      <ServiceOffered
        heading="Our Services"
        tagline="Choose from our comprehensive range of professional services designed to meet your specific needs"
        categories={automationdata.categories}
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
        steps={developmentProcess}
      />
    </div>
  );
};

export default Automation;
