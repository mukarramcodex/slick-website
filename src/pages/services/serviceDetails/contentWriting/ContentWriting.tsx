import ServiceDetailHero from '@/components/service/serviceDetail/hero/ServiceDetailHero'
import React, { useState } from 'react'
import ContentHeroBg from "../../../../assets/serviceDetail/contentWriting/ContentHeroBg.jpg"
import TechStack from '../../../../components/service/techStack/TechStack'
import { techStackData } from './TechStackData'
const ContentWriting = () => {
  const [activeCategory, setActiveCategory] = useState('writing-services');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };
  return (
    <div>
      <ServiceDetailHero
      backgroundImg= {ContentHeroBg}
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
    <TechStack
        heading="Technology Stack"
        tagline="We leverage the latest technologies and frameworks to build robust, scalable, and future-proof solutions"
        categories={techStackData}
        activeCategory={activeCategory}
        buttonText="Explore Our Tools"
        buttonLink="/technologies"
      />
    </div>
  )
}

export default ContentWriting
