import HeroSection from "../../components/sub pages/services sub/Finance Accounting Support/HeroSection";
import StructuredSupport from "../../components/sub pages/services sub/Finance Accounting Support/StructuredSupport";
import SupportingBetterOrganisation from "../../components/sub pages/services sub/Finance Accounting Support/SupportingBetterOrganisation";
import HowWeCanSupport from "../../components/sub pages/services sub/Finance Accounting Support/HowWeCanSupport";
import DesignedForGrowing from "../../components/sub pages/services sub/Finance Accounting Support/DesignedForGrowing";
import AccuracyAndAccountability from "../../components/sub pages/services sub/Finance Accounting Support/AccuracyAndAccountability";
import ImportantServiceBoundaries from "../../components/sub pages/services sub/Finance Accounting Support/ImportantServiceBoundaries";
import WhatYouCanExpect from "../../components/sub pages/services sub/Finance Accounting Support/WhatYouCanExpect";
import CTASection from "../../components/sub pages/services sub/Finance Accounting Support/CTASection";

export default function FinanceAccountingSupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <StructuredSupport />
      <SupportingBetterOrganisation />
      <HowWeCanSupport />
      <DesignedForGrowing />
      <AccuracyAndAccountability />
      <ImportantServiceBoundaries />
      <WhatYouCanExpect />
      <CTASection />
    </main>
  );
}
