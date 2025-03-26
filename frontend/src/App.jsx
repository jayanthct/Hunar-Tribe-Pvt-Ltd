import React from "react";
import TestimonialSection from "./Sections/TestimonialSection/TestimonialSection";
import OurVisionSection from "./Sections/OurVisionSection/OurVisionSection";
import ProductSection from "./Sections/ProductSection/ProductSection";
import ImpactSection from "./Sections/ImpactSection/ImpactSection";
import OurServicesSection from "./Sections/OurServicesSection/OurServicesSection";
import NavBar from "./Sections/NavBar/NavBar";
import TeamSection from "./Sections/TeamSection/TeamSection";
import HeroSection from "./Sections/HeroSection/HeroSection";
import OurClients from "./Sections/OurClients/OurClients";
import InstagramPostSection from "./Sections/InstagramPostSection/InstagramPostSection";
import PageNotFound404 from "./PageNotFound404/PageNotFound404";

import error from "./PageNotFound404/Assets/illustration.svg";
import dev from "./PageNotFound404/Assets/dev.svg";
import Footer from "./Sections/FooterSection/Footer";
import BlogSection from "./BlogSection/BlogSection";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>

      <PageNotFound404
        description={"Page Not Found"}
        img={error}
      ></PageNotFound404>
      <PageNotFound404
        description={"Development Going On"}
        img={dev}
      ></PageNotFound404>
      <BlogSection></BlogSection>
      <ImpactSection></ImpactSection>
      <InstagramPostSection></InstagramPostSection>
      <OurClients></OurClients>
      <ProductSection></ProductSection>
      <TeamSection></TeamSection>
      <OurServicesSection></OurServicesSection>
      <OurVisionSection></OurVisionSection>
      <TestimonialSection></TestimonialSection>
      <Footer></Footer>
    </>
  );
}

export default App;
