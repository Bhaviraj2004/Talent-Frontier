import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroSection from "../../components/sub pages/Industries sub/Property and Real Estate/HeroSection";
import PracticalSupportSection from "../../components/sub pages/Industries sub/Property and Real Estate/PracticalSupportSection";
import StayOrganisedSection from "../../components/sub pages/Industries sub/Property and Real Estate/StayOrganisedSection";
import WhoWeSupportBar from "../../components/sub pages/Industries sub/Property and Real Estate/WhoWeSupportBar";
import OperationsSupportSection from "../../components/sub pages/Industries sub/Property and Real Estate/OperationsSupportSection";
import MorePropertiesBanner from "../../components/sub pages/Industries sub/Property and Real Estate/MorePropertiesBanner";
import PropertyWorkflowSection from "../../components/sub pages/Industries sub/Property and Real Estate/PropertyWorkflowSection";
import BuiltAroundWorkflowSection from "../../components/sub pages/Industries sub/Property and Real Estate/BuiltAroundWorkflowSection";
import BenefitsSection from "../../components/sub pages/Industries sub/Property and Real Estate/BenefitsSection";
import StrengthenSupportCTA from "../../components/sub pages/Industries sub/Property and Real Estate/StrengthenSupportCTA";

export default function PropertyAndRealEstatePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-[#1a2332]">
        <HeroSection />
        <PracticalSupportSection />
        <StayOrganisedSection />
        <WhoWeSupportBar />
        <OperationsSupportSection />
        <MorePropertiesBanner />
        <PropertyWorkflowSection />
        <BuiltAroundWorkflowSection />
        <BenefitsSection />
        <StrengthenSupportCTA />
      </main>
      <Footer />
    </>
  );
}
