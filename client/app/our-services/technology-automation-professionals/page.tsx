import { Metadata } from "next";
import HeroSection from "../../components/sub pages/services sub/Technology, IT & AI Support/HeroSection";
import SolveRealProblems from "../../components/sub pages/services sub/Technology, IT & AI Support/SolveRealProblems";
import TechnologySupport from "../../components/sub pages/services sub/Technology, IT & AI Support/TechnologySupport";
import HowWeCanSupport from "../../components/sub pages/services sub/Technology, IT & AI Support/HowWeCanSupport";
import PracticalAI from "../../components/sub pages/services sub/Technology, IT & AI Support/PracticalAI";
import ProcessesThatMayBenefit from "../../components/sub pages/services sub/Process & Automation Support/ProcessesThatMayBenefit";
import TechnologyAssisted from "../../components/sub pages/services sub/Technology, IT & AI Support/TechnologyAssisted";
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
      <SolveRealProblems />
      <TechnologySupport />
      <HowWeCanSupport />
      <PracticalAI />
      <ProcessesThatMayBenefit />
      <TechnologyAssisted />
      <BuiltForEvolving />
      <SecurityAndResponsibleUse />
      <CTASection />
    </main>
  );
}
