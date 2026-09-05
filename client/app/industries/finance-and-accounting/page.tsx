import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroSection from "../../components/sub pages/Industries sub/Finance and Accounting/HeroSection";
import StructuredSupportSection from "../../components/sub pages/Industries sub/Finance and Accounting/StructuredSupportSection";
import SupportingBetterOperations from "../../components/sub pages/Industries sub/Finance and Accounting/SupportingBetterOperations";
import WhoWeSupportBar from "../../components/sub pages/Industries sub/Finance and Accounting/WhoWeSupportBar";
import HowWeSupportYou from "../../components/sub pages/Industries sub/Finance and Accounting/HowWeSupportYou";
import CommonFinanceChallenges from "../../components/sub pages/Industries sub/Finance and Accounting/CommonFinanceChallenges";
import FinanceWorkflow from "../../components/sub pages/Industries sub/Finance and Accounting/FinanceWorkflow";
import BuiltAroundSystems from "../../components/sub pages/Industries sub/Finance and Accounting/BuiltAroundSystems";
import WhatYouCanExpect from "../../components/sub pages/Industries sub/Finance and Accounting/WhatYouCanExpect";
import WhyWorkWithTalentFrontier from "../../components/sub pages/Industries sub/Finance and Accounting/WhyWorkWithTalentFrontier";
import BringStructureCTA from "../../components/sub pages/Industries sub/Finance and Accounting/BringStructureCTA";

export default function FinanceAndAccountingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-[#1a2332]">
        <HeroSection />
        <StructuredSupportSection />
        <SupportingBetterOperations />
        <WhoWeSupportBar />
        <HowWeSupportYou />
        <CommonFinanceChallenges />
        <FinanceWorkflow />
        <BuiltAroundSystems />
        <WhatYouCanExpect />
        <WhyWorkWithTalentFrontier />
        <BringStructureCTA />
      </main>
      <Footer />
    </>
  );
}
