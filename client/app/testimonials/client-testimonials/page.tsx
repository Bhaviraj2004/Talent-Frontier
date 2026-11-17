import HeroSection from "../../components/sub pages/Testimonials sub/Client Testimonials/HeroSection";
import DifferentNeeds from "../../components/sub pages/Testimonials sub/Client Testimonials/DifferentNeeds";
import FeedbackSection from "../../components/sub pages/Testimonials sub/Client Testimonials/FeedbackSection";
import ExperienceSection from "../../components/sub pages/Testimonials sub/Client Testimonials/ExperienceSection";
import HaveYouWorked from "../../components/sub pages/Testimonials sub/Client Testimonials/HaveYouWorked";

export default function TestimonialsSubPage() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#1a2332]">
      <HeroSection />
      <DifferentNeeds />
      <FeedbackSection />
      <ExperienceSection />
      <HaveYouWorked />
    </main>
  );
}
