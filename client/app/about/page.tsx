import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import AboutHero from "@/app/components/about/AboutHero";
import WhyWeExist from "@/app/components/about/WhyWeExist";
import OurApproach from "@/app/components/about/OurApproach";
import WhatMakesUsDifferent from "@/app/components/about/WhatMakesUsDifferent";
import OurTalentNetwork from "@/app/components/about/OurTalentNetwork";
import Leadership from "@/app/components/about/Leadership";
import OurValues from "@/app/components/about/OurValues";
import OurCommitment from "@/app/components/about/OurCommitment";
import AboutCTA from "@/app/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <div className="bg-[#08154a]">
        <Header />
      </div>
      
      <AboutHero />
      <WhyWeExist />
      <OurApproach />
      <WhatMakesUsDifferent />
      <OurTalentNetwork />
      <Leadership />
      <OurValues />
      <OurCommitment />
      <AboutCTA />
      
      <Footer />
    </main>
  );
}
