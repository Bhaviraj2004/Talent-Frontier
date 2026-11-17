import { Metadata } from "next";
import HeroSection from "../../components/sub pages/services sub/Finance Accounting Support/HeroSection";
import SupportingBetterOrganisation from "../../components/sub pages/services sub/Finance Accounting Support/SupportingBetterOrganisation";
import HowWeCanSupport from "../../components/sub pages/services sub/Finance Accounting Support/HowWeCanSupport";
import DesignedForGrowing from "../../components/sub pages/services sub/Finance Accounting Support/DesignedForGrowing";
import AccuracyAndAccountability from "../../components/sub pages/services sub/Finance Accounting Support/AccuracyAndAccountability";
import ImportantServiceBoundaries from "../../components/sub pages/services sub/Finance Accounting Support/ImportantServiceBoundaries";
import CTASection from "../../components/sub pages/services sub/Finance Accounting Support/CTASection";

export const metadata: Metadata = {
  title: 'Accountants, Bookkeepers, Tax & Compliance Professionals | Talent Frontier',
  description: 'Find Accountants, Bookkeepers, Tax Specialists, Audit Assistants, and Compliance Professionals for Australian Businesses with Talent Frontier.',
};

export default function AccountingTaxCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SupportingBetterOrganisation />
      <HowWeCanSupport />
      <DesignedForGrowing />
      <AccuracyAndAccountability />
      <ImportantServiceBoundaries />
      <CTASection />
    </main>
  );
}
