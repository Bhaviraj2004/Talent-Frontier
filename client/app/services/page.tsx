import Header from "../components/header";
import Footer from "../components/footer";
import ServicesHero from "../components/Services/ServicesHero";
import SupportSection from "../components/Services/SupportSection";
import ServicesGrid from "../components/Services/ServicesGrid";
import HowWeWork from "../components/Services/HowWeWork";
import WhyWorkWithUs from "../components/Services/WhyWorkWithUs";
import ServicesCTA from "../components/Services/ServicesCTA";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <ServicesHero />
        <SupportSection />
        <ServicesGrid />
        <HowWeWork />
        <WhyWorkWithUs />
        <ServicesCTA />
      </main>
      <Footer />
    </>
  );
}
