import { Metadata } from "next";
import HeroSection from "@/app/components/sub pages/services sub/People & Operations Support/HeroSection";
import OrganisedWorkplace from "@/app/components/sub pages/services sub/People & Operations Support/OrganisedWorkplace";
import PracticalSupport from "@/app/components/sub pages/services sub/People & Operations Support/PracticalSupport";
import HowWeCanSupport from "@/app/components/sub pages/services sub/People & Operations Support/HowWeCanSupport";
import SupportThatGrows from "@/app/components/sub pages/services sub/People & Operations Support/SupportThatGrows";
import QuoteSection from "@/app/components/sub pages/services sub/People & Operations Support/QuoteSection";

export const metadata: Metadata = {
  title: 'HR & People Professionals for Australian Businesses | Talent Frontier',
  description: 'Find HR Coordinators, Recruiters, Talent Acquisition Specialists and People & Culture professionals through Talent Frontier.',
};

export default function HRPeopleProfessionalsPage() {
  return (
    <main className="flex flex-col w-full overflow-hidden bg-white">
      <HeroSection />
      <OrganisedWorkplace />
      <PracticalSupport />
      <HowWeCanSupport />
      <SupportThatGrows />
      <QuoteSection />
    </main>
  );
}
