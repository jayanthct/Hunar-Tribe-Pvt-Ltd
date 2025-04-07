import React from "react";

import TestimonialSection from "../Sections/TestimonialSection/TestimonialSection";
import OurVisionSection from "../Sections/OurVisionSection/OurVisionSection";
import ProductSection from "../Sections/ProductSection/ProductSection";
import ImpactSection from "../Sections/ImpactSection/ImpactSection";
import OurServicesSection from "../Sections/OurServicesSection/OurServicesSection";
import TeamSection from "../Sections/TeamSection/TeamSection";
import HeroSection from "../Sections/HeroSection/HeroSection";
import OurClients from "../Sections/OurClients/OurClients";
import InstagramPostSection from "../Sections/InstagramPostSection/InstagramPostSection";
import BlogSection from "../BlogSection/BlogSection";
import Contactus from "../Sections/ContactUsSection/ContactUsSection";
import GallerySection from "../Sections/GallerySection/GallerySection";
import MarqueeScroll from "../Sections/MarqueeTag/MarqueeScroll";
import SwiggyBanner from "../SwiggyBanner/SwiggyBanner";

const LandingPage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <MarqueeScroll></MarqueeScroll>
      <SwiggyBanner></SwiggyBanner>
      <ProductSection></ProductSection>
      <OurServicesSection></OurServicesSection>
      <ImpactSection></ImpactSection>
      <OurClients></OurClients>
      <OurVisionSection></OurVisionSection>
      <GallerySection></GallerySection>
      <BlogSection></BlogSection>
      <TeamSection></TeamSection>
      <TestimonialSection></TestimonialSection>
      <InstagramPostSection></InstagramPostSection>
      <Contactus></Contactus>
    </>
  );
};

export default LandingPage;
