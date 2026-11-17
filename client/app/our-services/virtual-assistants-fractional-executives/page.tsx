import { Metadata } from "next";
import HeroSection from "@/app/components/sub pages/services sub/Virtual Assistants & Fractional Executives/HeroSection";
import ProfessionalsWeFind from "@/app/components/sub pages/services sub/Virtual Assistants & Fractional Executives/ProfessionalsWeFind";
import StrategicAndAdminOverview from "@/app/components/sub pages/services sub/Virtual Assistants & Fractional Executives/StrategicAndAdminOverview";
import WhatTheySupport from "@/app/components/sub pages/services sub/Virtual Assistants & Fractional Executives/WhatTheySupport";
import SuitableFor from "@/app/components/sub pages/services sub/Virtual Assistants & Fractional Executives/SuitableFor";
import CTASection from "@/app/components/sub pages/services sub/Virtual Assistants & Fractional Executives/CTASection";

export const metadata: Metadata = {
  title: 'Virtual Assistants & Fractional Executives | Talent Frontier',
  description: 'Connect with experienced virtual assistants, administrative specialists, and fractional executive leaders for your business with Talent Frontier.',
};

export default function VirtualAssistantsAndExecutivesPage() {
  return (
    <main className="flex flex-col w-full overflow-hidden bg-white">
      <HeroSection />
      <ProfessionalsWeFind />
      <StrategicAndAdminOverview />
      <WhatTheySupport />
      <SuitableFor />
      <CTASection />
    </main>
  );
}
