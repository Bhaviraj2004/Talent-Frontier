import { Metadata } from "next";
import HeroSection from "../../components/sub pages/services sub/Tax Audit Compliance/HeroSection";
import StructuredSupport from "../../components/sub pages/services sub/Tax Audit Compliance/StructuredSupport";
import SupportingBetterOrganisation from "../../components/sub pages/services sub/Tax Audit Compliance/SupportingBetterOrganisation";
import HowWeCanSupport from "../../components/sub pages/services sub/Tax Audit Compliance/HowWeCanSupport";
import AccuracyAndAccountability from "../../components/sub pages/services sub/Tax Audit Compliance/AccuracyAndAccountability";
import ImportantServiceBoundaries from "../../components/sub pages/services sub/Tax Audit Compliance/ImportantServiceBoundaries";
import CTASection from "../../components/sub pages/services sub/Tax Audit Compliance/CTASection";

export const metadata: Metadata = {
  title: 'Tax, Audit & Compliance Professionals for Australian Businesses | Talent Frontier',
  description: 'Find specialized tax accountants, audit assistants, and regulatory compliance professionals to support your accounting practice or business with Talent Frontier.',
};

export default function TaxAuditCompliancePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <StructuredSupport />
      <SupportingBetterOrganisation />
      <HowWeCanSupport />
      <AccuracyAndAccountability />
      <ImportantServiceBoundaries />
      <CTASection />
    </main>
  );
}
