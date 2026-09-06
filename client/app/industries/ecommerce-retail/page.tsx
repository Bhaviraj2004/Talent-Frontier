import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroSection from "../../components/sub pages/Industries sub/Ecommerce and Retail/HeroSection";
import PracticalSupportSection from "../../components/sub pages/Industries sub/Ecommerce and Retail/PracticalSupportSection";
import KeepCommerceMovingSection from "../../components/sub pages/Industries sub/Ecommerce and Retail/KeepCommerceMovingSection";
import WhoWeSupportBar from "../../components/sub pages/Industries sub/Ecommerce and Retail/WhoWeSupportBar";
import SupportAcrossWorkflowSection from "../../components/sub pages/Industries sub/Ecommerce and Retail/SupportAcrossWorkflowSection";
import FromProductToCustomerSection from "../../components/sub pages/Industries sub/Ecommerce and Retail/FromProductToCustomerSection";
import GrowthCreatesMovingPartsBanner from "../../components/sub pages/Industries sub/Ecommerce and Retail/GrowthCreatesMovingPartsBanner";
import BuiltAroundCommerceSection from "../../components/sub pages/Industries sub/Ecommerce and Retail/BuiltAroundCommerceSection";
import BenefitsSection from "../../components/sub pages/Industries sub/Ecommerce and Retail/BenefitsSection";
import StrengthenCommerceCTA from "../../components/sub pages/Industries sub/Ecommerce and Retail/StrengthenCommerceCTA";

export default function EcommerceAndRetailPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-[#1a2332]">
        <HeroSection />
        <PracticalSupportSection />
        <KeepCommerceMovingSection />
        <WhoWeSupportBar />
        <SupportAcrossWorkflowSection />
        <FromProductToCustomerSection />
        <GrowthCreatesMovingPartsBanner />
        <BuiltAroundCommerceSection />
        <BenefitsSection />
        <StrengthenCommerceCTA />
      </main>
      <Footer />
    </>
  );
}
