import { Metadata } from "next";
import HeroSection from "../../components/sub pages/services sub/Brand, Marketing & Creative Support/HeroSection";
import CreativeAndMarketing from "../../components/sub pages/services sub/Brand, Marketing & Creative Support/CreativeAndMarketing";
import ConsistentCommunication from "../../components/sub pages/services sub/Brand, Marketing & Creative Support/ConsistentCommunication";
import HowWeCanSupport from "../../components/sub pages/services sub/Brand, Marketing & Creative Support/HowWeCanSupport";
import CTASection from "../../components/sub pages/services sub/Brand, Marketing & Creative Support/CTASection";

export const metadata: Metadata = {
  title: 'Marketing & Creative Professionals | Talent Frontier',
  description: 'Find digital marketers, SEO specialists, designers, content professionals and other marketing talent through Talent Frontier.',
};

export default function MarketingCreativeProfessionalsPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <CreativeAndMarketing />
      <ConsistentCommunication />
      <HowWeCanSupport />
      <CTASection />
    </main>
  );
}
