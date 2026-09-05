import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroSection from "../../components/sub pages/Testimonials sub/Client Success Stories/HeroSection";
import RealChallenges from "../../components/sub pages/Testimonials sub/Client Success Stories/RealChallenges";
import SupportShaped from "../../components/sub pages/Testimonials sub/Client Success Stories/SupportShaped";
import FeaturedStory from "../../components/sub pages/Testimonials sub/Client Success Stories/FeaturedStory";
import MoreStoriesGrid from "../../components/sub pages/Testimonials sub/Client Success Stories/MoreStoriesGrid";
import ClientPerspective from "../../components/sub pages/Testimonials sub/Client Success Stories/ClientPerspective";
import HowWeSupport from "../../components/sub pages/Testimonials sub/Client Success Stories/HowWeSupport";
import FacingChallenge from "../../components/sub pages/Testimonials sub/Client Success Stories/FacingChallenge";

export default function ClientSuccessStoriesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-[#1a2332]">
        <HeroSection />
        <RealChallenges />
        <SupportShaped />
        <FeaturedStory />
        <MoreStoriesGrid />
        <ClientPerspective />
        <HowWeSupport />
        <FacingChallenge />
      </main>
      <Footer />
    </>
  );
}
