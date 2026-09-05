import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroSection from "../../components/sub pages/about sub/Story page/HeroSection";
import BuildingConnections from "../../components/sub pages/about sub/Story page/BuildingConnections";
import HowItStarted from "../../components/sub pages/about sub/Story page/HowItStarted";
import TheChallenges from "../../components/sub pages/about sub/Story page/TheChallenges";
import WhatWeSetOut from "../../components/sub pages/about sub/Story page/WhatWeSetOut";
import MissionVisionValues from "../../components/sub pages/about sub/Story page/MissionVisionValues";
import WhereWeAreToday from "../../components/sub pages/about sub/Story page/WhereWeAreToday";
import LetsBuildYourTeam from "../../components/sub pages/about sub/Story page/LetsBuildYourTeam";

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-[#1a2332]">
        <HeroSection />
        <BuildingConnections />
        <HowItStarted />
        <TheChallenges />
        <WhatWeSetOut />
        <MissionVisionValues />
        <WhereWeAreToday />
        <LetsBuildYourTeam />
      </main>
      <Footer />
    </>
  );
}
