import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { HeroPage } from "./heropage/HeroPage";
import MissionVission from "./missionVission/MissionVission";
import Services from "./services/Services";
import ObjectivesSection from "./objectivesection/ObjectiveSection";
import Pricing from "./pricing/page";
import WhyChooseUs from "./whyChooseUs/page";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <MissionVission />
      <ObjectivesSection />
      <Services />
      <Pricing />
      <WhyChooseUs />
      <Footer />
    </>
  );
};
