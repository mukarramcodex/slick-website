
import ServiceDetailHero from "@/components/service/serviceDetail/hero/ServiceDetailHero"
import ContentHeroBg from "../../../../assets/serviceDetail/contentWriting/ContentHeroBg.jpg"
const VirtualSupport = () => {
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
  rightImage="https://readdy.ai/api/search-image?query=creative%20content%20strategy%20meeting..."
  rightImageAlt="Content Strategy Team"
  statIcon="ph ph-chart-line-up"
  statValue="300%"
  statLabel="Engagement Increase"
    />
    </div>
  )
}

export default VirtualSupport
