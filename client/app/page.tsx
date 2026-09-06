import Hero from "./components/main/hero";
import BusinessOverview from "./components/main/BusinessOverview";
import WhyChooseUs from "./components/main/WhyChooseUs";
import WhatWeDo from "./components/main/WhatWeDo";
import IndustriesPreview from "./components/main/IndustriesPreview";
import TrustedClients from "./components/main/TrustedClients";
import CTA from "./components/main/CTA";

export default function Home() {
  return (
    <>
      <main className="bg-white min-h-screen">
        <Hero />
        <BusinessOverview />
        <WhyChooseUs />
        <WhatWeDo />
        <IndustriesPreview />
        <TrustedClients />
        <CTA />
      </main>
    </>
  );
}
