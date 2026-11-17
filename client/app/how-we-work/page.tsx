import HeroSection from "../components/How We Work/HeroSection";
import ClearerPath from "../components/How We Work/ClearerPath";
import OurApproachSteps from "../components/How We Work/OurApproachSteps";
import YourBusinessSection from "../components/How We Work/YourBusinessSection";
import FAQSection from "../components/How We Work/FAQSection";
import CTASection from "../components/How We Work/CTASection";

export default function HowWeWorkPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a2332]">
      <HeroSection />
      <ClearerPath />
      <OurApproachSteps />
      <YourBusinessSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
