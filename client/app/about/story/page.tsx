import HeroSection from "../../components/sub pages/about sub/Our Story/HeroSection";
import BuildingConnections from "../../components/sub pages/about sub/Our Story/BuildingConnections";
import HowItStarted from "../../components/sub pages/about sub/Our Story/HowItStarted";
import TheChallenges from "../../components/sub pages/about sub/Our Story/TheChallenges";
import WhatWeSetOut from "../../components/sub pages/about sub/Our Story/WhatWeSetOut";
import MissionVisionValues from "../../components/sub pages/about sub/Our Story/MissionVisionValues";
import WhereWeAreToday from "../../components/sub pages/about sub/Our Story/WhereWeAreToday";
import LetsBuildYourTeam from "../../components/sub pages/about sub/Our Story/LetsBuildYourTeam";

export default function OurStoryPage() {
  return (
    <>
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
          </>
  );
}
