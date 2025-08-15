import ServiceDetailHero from "@/components/service/serviceDetail/hero/ServiceDetailHero"
import ContentHeroBg from "../../../../assets/serviceDetail/contentWriting/ContentHeroBg.jpg"
import ServiceOffered from "@/components/service/serviceDetail/serviceOffered/ServicesOffered"
import { writingData } from "../contentWriting/WritingData"
import { useState } from "react"
import TechStack from "@/components/service/techStack/TechStack"
import { techData } from "./TechStackData"
import Process from "@/components/service/serviceDetail/process/Process"
import { designdevelopmentProcess } from "./ProcessData"
import Benifits from "@/components/service/benifits/Benifits"
import Faqs from "@/components/common/faqs/Faqs"
import CallToAction from "@/components/common/callToAction/CallToAction"
import { designFaqData } from "./FaqsData"
const Design = () => {
const [activeCategory, setActiveCategory] = useState('writing-services');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };
  return (
    <div>
      <ServiceDetailHero
        backgroundImg={ContentHeroBg}
        backgroundImgAlt="Creative team working"
        heading="Design Services"
        paragraph="Create stunning visual experiences that captivate your audience and elevate your brand. Our design team crafts beautiful, functional designs that drive engagement and conversions."
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
        categories={writingData.categories}
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
            steps={designdevelopmentProcess}
      />
      <Benifits/>
      <Faqs faqs={designFaqData} />
      <CallToAction/>
    </div>
  )
}

export default Design
