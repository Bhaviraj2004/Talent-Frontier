import Header from "../components/header";
import Footer from "../components/footer";
import IndustriesHero from "../components/Industries/IndustriesHero";
import IndustryFocused from "../components/Industries/IndustryFocused";
import IndustriesGrid from "../components/Industries/IndustriesGrid";
import SupportAcrossFunctions from "../components/Industries/SupportAcrossFunctions";
import OurApproach from "../components/Industries/OurApproach";
import IndustriesCTA from "../components/Industries/IndustriesCTA";

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <IndustriesHero />
        <IndustryFocused />
        <IndustriesGrid />
        <SupportAcrossFunctions />
        <OurApproach />
        <IndustriesCTA />
      </main>
      <Footer />
    </>
  );
}
