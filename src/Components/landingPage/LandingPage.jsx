import React from "react";
import Navbar from "../../common/Navbar";
import Footer from "../../common/Footer";
import { HeroPage } from "./heropage/HeroPage";
import MissionVission from "./missionVission/MissionVission";
import Services from "./services/Services";
import ObjectivesSection from "./objectivesection/ObjectiveSection";
import WhyUs from "./whyUs/WhyUs";
import Programmes from "./programes/Programes";

export const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <MissionVission />
      <ObjectivesSection />
      <Services />
      <Programmes />
      <WhyUs />
      <Footer />
    </>
  );
};
