import ServiceDetailHero from "@/components/service/serviceDetail/hero/ServiceDetailHero"
import ContentHeroBg from "../../../../assets/serviceDetail/contentWriting/ContentHeroBg.jpg"
const Design = () => {
  return (
    <div>
      <ServiceDetailHero
      backgroundImg= {ContentHeroBg}
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
    </div>
  )
}

export default Design
