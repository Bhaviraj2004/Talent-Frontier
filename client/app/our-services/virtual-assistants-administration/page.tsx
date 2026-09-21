import { Metadata } from "next";
import HeroSection from "@/app/components/sub pages/services sub/Business Support Services/HeroSection";
import HowWeCanSupport from "@/app/components/sub pages/services sub/Business Support Services/HowWeCanSupport";
import MoreCapacity from "@/app/components/sub pages/services sub/Business Support Services/MoreCapacity";
import ReliableSupport from "@/app/components/sub pages/services sub/Business Support Services/ReliableSupport";
import StayOrganised from "@/app/components/sub pages/services sub/Business Support Services/StayOrganised";

export const metadata: Metadata = {
  title: 'Virtual Assistants & Administrative Professionals | Talent Frontier',
  description: 'Find Virtual Assistants, Executive Assistants and administrative professionals for your Australian business with Talent Frontier.',
};

export default function VirtualAssistantsPage() {
  return (
    <main className="flex flex-col w-full overflow-hidden bg-white">
      <HeroSection />
      <ReliableSupport />
      <StayOrganised />
      <HowWeCanSupport />
      <MoreCapacity />
    </main>
  );
}
