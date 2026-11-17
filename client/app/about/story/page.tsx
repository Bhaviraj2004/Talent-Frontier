import HeroSection from "../../components/sub pages/about sub/Our Story/HeroSection";
import HowItStarted from "../../components/sub pages/about sub/Our Story/HowItStarted";
import MissionVisionValues from "../../components/sub pages/about sub/Our Story/MissionVisionValues";
import WhereWeAreToday from "../../components/sub pages/about sub/Our Story/WhereWeAreToday";
import LetsBuildYourTeam from "../../components/sub pages/about sub/Our Story/LetsBuildYourTeam";

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a2332]">
      <HeroSection />
      <HowItStarted />
      <MissionVisionValues />
      <WhereWeAreToday />
      <LetsBuildYourTeam />
    </main>
  );
}
