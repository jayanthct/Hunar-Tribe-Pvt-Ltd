import { useState } from "react";
import TestimonialSection from "./Sections/TestimonialSection/TestimonialSection";
import OurVisionSection from "./Sections/OurVisionSection/OurVisionSection";
import ProductSection from "./Sections/ProductSection/ProductSection";
import ImpactSection from "./Sections/ImpactSection/ImpactSection";
import OurServicesSection from "./Sections/OurServicesSection/OurServicesSection";

function App() {
  return (
    <>
      <OurServicesSection></OurServicesSection>
      <ImpactSection></ImpactSection>
      <ProductSection></ProductSection>
      <OurVisionSection></OurVisionSection>
      <TestimonialSection></TestimonialSection>
    </>
  );
}

export default App;
