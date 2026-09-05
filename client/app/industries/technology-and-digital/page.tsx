import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroSection from "../../components/sub pages/Industries sub/Technology and Digital/HeroSection";
import FlexibleSupportSection from "../../components/sub pages/Industries sub/Technology and Digital/FlexibleSupportSection";
import FastMovingTeamsSection from "../../components/sub pages/Industries sub/Technology and Digital/FastMovingTeamsSection";
import WhoWeSupportSection from "../../components/sub pages/Industries sub/Technology and Digital/WhoWeSupportSection";
import ComplexToolsSection from "../../components/sub pages/Industries sub/Technology and Digital/ComplexToolsSection";
import WorkflowSection from "../../components/sub pages/Industries sub/Technology and Digital/WorkflowSection";
import BuiltAroundTechSection from "../../components/sub pages/Industries sub/Technology and Digital/BuiltAroundTechSection";
import OutcomeSection from "../../components/sub pages/Industries sub/Technology and Digital/OutcomeSection";
import BuildBetterSupportCTA from "../../components/sub pages/Industries sub/Technology and Digital/BuildBetterSupportCTA";

export default function TechnologyAndDigitalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-[#1a2332]">
        <HeroSection />
        <FlexibleSupportSection />
        <FastMovingTeamsSection />
        <WhoWeSupportSection />
        <ComplexToolsSection />
        <WorkflowSection />
        <BuiltAroundTechSection />
        <OutcomeSection />
        <BuildBetterSupportCTA />
      </main>
      <Footer />
    </>
  );
}
