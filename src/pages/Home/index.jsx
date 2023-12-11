import React from "react";
import HomeHeroSection from "../../components/HomeHeroSection/HomeHeroSection";
import HomeVehiclesSection from "../../components/HomeVehiclesSection/HomeVehiclesSection";
import PromotionsSection from "../../components/PromotionsSection/PromotionsSection";

const Home = () => {
  return (
    <>
      <HomeHeroSection />
      <PromotionsSection />
      <HomeVehiclesSection />
    </>
  );
};

export default Home;
