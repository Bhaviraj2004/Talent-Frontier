import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroSection from "../../components/sub pages/Industries sub/Professional Services/HeroSection";
import BusinessSupportCard from "../../components/sub pages/Industries sub/Professional Services/BusinessSupportCard";
import SupportingFirmsWork from "../../components/sub pages/Industries sub/Professional Services/SupportingFirmsWork";
import BuiltForServiceOrganisations from "../../components/sub pages/Industries sub/Professional Services/BuiltForServiceOrganisations";
import HowWeSupportYou from "../../components/sub pages/Industries sub/Professional Services/HowWeSupportYou";
import CommonChallenges from "../../components/sub pages/Industries sub/Professional Services/CommonChallenges";
import ClientJourney from "../../components/sub pages/Industries sub/Professional Services/ClientJourney";
import SupportBuiltAround from "../../components/sub pages/Industries sub/Professional Services/SupportBuiltAround";
import WhyWorkWithTalentFrontier from "../../components/sub pages/Industries sub/Professional Services/WhyWorkWithTalentFrontier";
import FocusOnClientValueCTA from "../../components/sub pages/Industries sub/Professional Services/FocusOnClientValueCTA";

export default function ProfessionalServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-[#1a2332]">
        <HeroSection />
        <BusinessSupportCard />
        <SupportingFirmsWork />
        <BuiltForServiceOrganisations />
        <HowWeSupportYou />
        <CommonChallenges />
        <ClientJourney />
        <SupportBuiltAround />
        <WhyWorkWithTalentFrontier />
        <FocusOnClientValueCTA />
      </main>
      <Footer />
    </>
  );
}
