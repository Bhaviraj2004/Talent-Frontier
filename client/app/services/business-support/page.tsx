import HeroSection from "@/app/components/sub pages/about sub/Our Approach/HeroSection";
import HowWeCanSupport from "@/app/components/sub pages/services sub/Business Support Services/HowWeCanSupport";
import MoreCapacity from "@/app/components/sub pages/services sub/Business Support Services/MoreCapacity";
import ReliableSupport from "@/app/components/sub pages/services sub/Business Support Services/ReliableSupport";
import StayOrganised from "@/app/components/sub pages/services sub/Business Support Services/StayOrganised";


export default function BusinessSupportPage() {
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
