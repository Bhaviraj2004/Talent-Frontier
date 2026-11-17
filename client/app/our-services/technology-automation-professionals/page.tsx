import { Metadata } from "next";
import HeroSection from "../../components/sub pages/services sub/Technology, IT & AI Support/HeroSection";
import TechnologySupport from "../../components/sub pages/services sub/Technology, IT & AI Support/TechnologySupport";
import HowWeCanSupport from "../../components/sub pages/services sub/Technology, IT & AI Support/HowWeCanSupport";
import PracticalAI from "../../components/sub pages/services sub/Technology, IT & AI Support/PracticalAI";
import BuiltForEvolving from "../../components/sub pages/services sub/Technology, IT & AI Support/BuiltForEvolving";
import SecurityAndResponsibleUse from "../../components/sub pages/services sub/Technology, IT & AI Support/SecurityAndResponsibleUse";
import CTASection from "../../components/sub pages/services sub/Technology, IT & AI Support/CTASection";

export const metadata: Metadata = {
  title: 'IT, Software, AI & Automation Professionals | Talent Frontier',
  description: 'Find software developers, IT specialists, data professionals, and workflow automation talent for your Australian business with Talent Frontier.',
};

export default function TechnologyAutomationProfessionalsPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <TechnologySupport />
      <HowWeCanSupport />
      <PracticalAI />
      <BuiltForEvolving />
      <SecurityAndResponsibleUse />
      <CTASection />
    </main>
  );
}
