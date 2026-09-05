import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroSection from "../../components/sub pages/about sub/Our Approach/HeroSection";
import BusinessSupportStarts from "../../components/sub pages/about sub/Our Approach/BusinessSupportStarts";
import UnderstandingBusinessCards from "../../components/sub pages/about sub/Our Approach/UnderstandingBusinessCards";
import SupportApproachTimeline from "../../components/sub pages/about sub/Our Approach/SupportApproachTimeline";
import ApproachSteps from "../../components/sub pages/about sub/Our Approach/ApproachSteps";
import TechnologyEnabled from "../../components/sub pages/about sub/Our Approach/TechnologyEnabled";

export default function OurApproachPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-[#1a2332]">
        <HeroSection />
        <BusinessSupportStarts />
        <UnderstandingBusinessCards />
        <SupportApproachTimeline />
        <ApproachSteps />
        <TechnologyEnabled />
      </main>
      <Footer />
    </>
  );
}
