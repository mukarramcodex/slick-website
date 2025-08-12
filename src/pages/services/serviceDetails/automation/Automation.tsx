import ServiceDetailHero from "@/components/service/serviceDetail/hero/ServiceDetailHero";
import ContentHeroBg from "../../../../assets/serviceDetail/contentWriting/ContentHeroBg.jpg"
const Automation = () => {
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
        rightImage="https://readdy.ai/api/search-image?query=creative%20content%20strategy%20meeting..."
        rightImageAlt="Business Automation Solutions"
        statIcon="ph ph-chart-line-up"
        statValue="300%"
        statLabel="Engagement Increase"
      />
    </div>
  );
};

export default Automation;
