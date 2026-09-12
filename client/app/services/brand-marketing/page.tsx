import HeroSection from "../../components/sub pages/services sub/Brand, Marketing & Creative Support/HeroSection";
import CreativeAndMarketing from "../../components/sub pages/services sub/Brand, Marketing & Creative Support/CreativeAndMarketing";
import ConsistentCommunication from "../../components/sub pages/services sub/Brand, Marketing & Creative Support/ConsistentCommunication";
import HowWeCanSupport from "../../components/sub pages/services sub/Brand, Marketing & Creative Support/HowWeCanSupport";
import ProcessSteps from "../../components/sub pages/services sub/Brand, Marketing & Creative Support/ProcessSteps";

export default function BrandMarketingSupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <CreativeAndMarketing />
      <ConsistentCommunication />
      <HowWeCanSupport />
      <ProcessSteps />
    </main>
  );
}
