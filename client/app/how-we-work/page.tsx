import HeroSection from "../components/sub pages/about sub/How We Work/HeroSection";
import ClearerPath from "../components/sub pages/about sub/How We Work/ClearerPath";
import OurApproachSteps from "../components/sub pages/about sub/How We Work/OurApproachSteps";
import YourBusinessSection from "../components/sub pages/about sub/How We Work/YourBusinessSection";
import BiggerPicture from "../components/sub pages/about sub/How We Work/BiggerPicture";
import JourneyTimeline from "../components/sub pages/about sub/How We Work/JourneyTimeline";
import FAQSection from "../components/sub pages/about sub/How We Work/FAQSection";
import CTASection from "../components/sub pages/about sub/How We Work/CTASection";

export default function HowWeWorkPage() {
  return (
    <>
      <main className="min-h-screen bg-white font-sans text-[#1a2332]">
        <HeroSection />
        <ClearerPath />
        <OurApproachSteps />
        <YourBusinessSection />
        <BiggerPicture />
        <JourneyTimeline />
        <FAQSection />
        <CTASection />
      </main>
    </>
  );
}
