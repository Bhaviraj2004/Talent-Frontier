import { Metadata } from "next";
import HeroSection from "../../components/sub pages/services sub/Technology, IT & AI Support/HeroSection";
import TechnologySupport from "../../components/sub pages/services sub/Technology, IT & AI Support/TechnologySupport";
import SolveRealProblems from "../../components/sub pages/services sub/Technology, IT & AI Support/SolveRealProblems";
import HowWeCanSupport from "../../components/sub pages/services sub/Technology, IT & AI Support/HowWeCanSupport";
import PracticalAI from "../../components/sub pages/services sub/Technology, IT & AI Support/PracticalAI";
import TechnologyAssisted from "../../components/sub pages/services sub/Technology, IT & AI Support/TechnologyAssisted";
import BuiltForEvolving from "../../components/sub pages/services sub/Technology, IT & AI Support/BuiltForEvolving";
import SecurityAndResponsibleUse from "../../components/sub pages/services sub/Technology, IT & AI Support/SecurityAndResponsibleUse";
import CTASection from "../../components/sub pages/services sub/Technology, IT & AI Support/CTASection";

export const metadata: Metadata = {
  title: 'IT, Software & AI Professionals | Talent Frontier Australia',
  description: 'Find software developers, IT specialists, data professionals and AI talent for your business with Talent Frontier.',
};

export default function TechnologyProfessionalsPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <TechnologySupport />
      <SolveRealProblems />
      <HowWeCanSupport />
      <PracticalAI />
      <TechnologyAssisted />
      <BuiltForEvolving />
      <SecurityAndResponsibleUse />
      <CTASection />
    </main>
  );
}
