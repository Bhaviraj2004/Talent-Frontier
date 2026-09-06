import AboutHero from "@/app/components/about/AboutHero";
import AboutCards from "@/app/components/about/AboutCards";
import AboutWhatWeDo from "@/app/components/about/AboutWhatWeDo";
import HowWeWork from "@/app/components/about/HowWeWork";
import SupportingBusiness from "@/app/components/about/SupportingBusiness";
import OurPrinciples from "@/app/components/about/OurPrinciples";
import AboutCTA from "@/app/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <AboutHero />
      <AboutCards />
      <AboutWhatWeDo />
      <HowWeWork />
      <SupportingBusiness />
      <OurPrinciples />
      <AboutCTA />
    </main>
  );
}
