import ServicesHero from "../components/Services/ServicesHero";
import SupportSection from "../components/Services/SupportSection";
import ServicesGrid from "../components/Services/ServicesGrid";
import WhyWorkWithUs from "../components/Services/WhyWorkWithUs";
import ServicesCTA from "../components/Services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
            <main className="min-h-screen bg-white">
        <ServicesHero />
        <SupportSection />
        <ServicesGrid />
        <WhyWorkWithUs />
        <ServicesCTA />
      </main>
          </>
  );
}
