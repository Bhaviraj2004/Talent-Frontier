import HeroSection from "../../components/sub pages/Industries sub/sme-growing/HeroSection";
import FlexibleSupportSection from "../../components/sub pages/Industries sub/sme-growing/FlexibleSupportSection";
import GrowthChangesSection from "../../components/sub pages/Industries sub/sme-growing/GrowthChangesSection";
import WhoWeSupportBar from "../../components/sub pages/Industries sub/sme-growing/WhoWeSupportBar";
import SupportNeedsSection from "../../components/sub pages/Industries sub/sme-growing/SupportNeedsSection";
import PrioritiesSection from "../../components/sub pages/Industries sub/sme-growing/PrioritiesSection";
import BenefitsBar from "../../components/sub pages/Industries sub/sme-growing/BenefitsBar";
import WhyTalentFrontierBar from "../../components/sub pages/Industries sub/sme-growing/WhyTalentFrontierBar";
import CapacityCTA from "../../components/sub pages/Industries sub/sme-growing/CapacityCTA";

export default function SMEsAndGrowingBusinessesPage() {
  return (
    <>      <main className="min-h-screen bg-white font-sans text-[#1a2332]">
        <HeroSection />
        <FlexibleSupportSection />
        <GrowthChangesSection />
        <WhoWeSupportBar />
        <SupportNeedsSection />
        <PrioritiesSection />
        <BenefitsBar />
        <WhyTalentFrontierBar />
        <CapacityCTA />
      </main>    </>
  );
}
