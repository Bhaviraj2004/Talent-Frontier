import Header from "../../components/header";
import Footer from "../../components/footer";
import HeroSection from "../../components/sub pages/Testimonials sub/Client Testimonials/HeroSection";
import WhatOurClientsSay from "../../components/sub pages/Testimonials sub/Client Testimonials/WhatOurClientsSay";
import DifferentNeeds from "../../components/sub pages/Testimonials sub/Client Testimonials/DifferentNeeds";
import FeedbackSection from "../../components/sub pages/Testimonials sub/Client Testimonials/FeedbackSection";
import ExperienceSection from "../../components/sub pages/Testimonials sub/Client Testimonials/ExperienceSection";
import HaveYouWorked from "../../components/sub pages/Testimonials sub/Client Testimonials/HaveYouWorked";
import StructuredSupport from "../../components/sub pages/Testimonials sub/Client Testimonials/StructuredSupport";

export default function TestimonialsSubPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white font-sans text-[#1a2332]">
        <HeroSection />
        <WhatOurClientsSay />
        <DifferentNeeds />
        <FeedbackSection />
        <ExperienceSection />
        <HaveYouWorked />
        <StructuredSupport />
      </main>
      <Footer />
    </>
  );
}
