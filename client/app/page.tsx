import Header from "./components/header";
import Hero from "./components/main/hero";
import Hiring from "./components/main/hiring";
import WhatWeDo from "./components/main/WhatWeDo";
import WhyChooseUs from "./components/main/WhyChooseUs";
import ProcessTimeline from "./components/main/ProcessTimeline";
import SkillsTalent from "./components/main/SkillsTalent";
import ShortlistProcess from "./components/main/ShortlistProcess";
import FAQ from "./components/main/FAQ";
import CTA from "./components/main/CTA";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen">
      <Hero />
      <Hiring />
      <WhatWeDo />
      <WhyChooseUs />
      <ProcessTimeline />
      <SkillsTalent />
      <ShortlistProcess />
      <FAQ />
      <CTA />
      <Footer />
      </main>
    </>
  );
}
