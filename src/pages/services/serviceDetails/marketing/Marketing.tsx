import ServiceDetailHero from "@/components/service/serviceDetail/hero/ServiceDetailHero"
import ContentHeroBg from "../../../../assets/serviceDetail/contentWriting/ContentHeroBg.jpg"
import { useState } from "react"
import ServiceOffered from "@/components/service/serviceDetail/serviceOffered/ServicesOffered";
import { marketingData } from "./MarketingData";
import TechStack from "@/components/service/techStack/TechStack";
import { techData } from "./TechStackData";
import Process from "@/components/service/serviceDetail/process/Process";
import { marketingdevelopmentProcess } from "./ProcessData";
import Benifits from "@/components/service/benifits/Benifits";
import Faqs from "@/components/common/faqs/Faqs";
import CallToAction from "@/components/common/callToAction/CallToAction";
import { marketingFaqData } from "./FaqsData";
const Marketing = () => {
  const [activeCategory, setActiveCategory] = useState('marketing-services');

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
        rightImage="https://readdy.ai/api/search-image?query=creative%20content%20strategy%20meeting..."
        rightImageAlt="Content Strategy Team"
        statIcon="ph ph-chart-line-up"
        statValue="300%"
        statLabel="Engagement Increase"
      />
      <ServiceOffered
        heading="Our Services"
        tagline="Tagline"
        categories={marketingData.categories}
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
        heading="Our Development Process"
        tagline="Tagline"
        steps={marketingdevelopmentProcess}
      />
      <Benifits/>
      <Faqs faqs={marketingFaqData}/>
      <CallToAction/>
    </div>
  )
}

export default Marketing
