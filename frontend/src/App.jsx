import React from "react";
import TestimonialSection from "./Sections/TestimonialSection/TestimonialSection";
import OurVisionSection from "./Sections/OurVisionSection/OurVisionSection";
import ProductSection from "./Sections/ProductSection/ProductSection";
import ImpactSection from "./Sections/ImpactSection/ImpactSection";
import OurServicesSection from "./Sections/OurServicesSection/OurServicesSection";
import NavBar from "./Sections/NavBar/NavBar";
import VerticalCarousel from "./Sections/VerticalCarousal/VerticalCarousal";
import TeamSection from "./Sections/TeamSection/TeamSection";

function App() {
  return (
    <>
      {/* <NavBar></NavBar>
      <ImpactSection></ImpactSection>

      <ProductSection></ProductSection> */}
      <TeamSection></TeamSection>
      <OurServicesSection></OurServicesSection>
      {/* <OurVisionSection></OurVisionSection>
      <TestimonialSection></TestimonialSection> */}
    </>
  );
}

export default App;
