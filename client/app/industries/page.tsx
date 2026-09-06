import IndustriesHero from "../components/Industries/IndustriesHero";
import IndustryFocused from "../components/Industries/IndustryFocused";
import IndustriesGrid from "../components/Industries/IndustriesGrid";
import SupportAcrossFunctions from "../components/Industries/SupportAcrossFunctions";
import OurApproach from "../components/Industries/OurApproach";
import IndustriesCTA from "../components/Industries/IndustriesCTA";

export default function IndustriesPage() {
  return (
    <>
            <main className="min-h-screen bg-white">
        <IndustriesHero />
        <IndustryFocused />
        <IndustriesGrid />
        <SupportAcrossFunctions />
        <OurApproach />
        <IndustriesCTA />
      </main>
          </>
  );
}
