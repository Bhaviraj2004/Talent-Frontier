import Header from "../components/header";
import Footer from "../components/footer";
import TestimonialsHero from "../components/Testimonials/TestimonialsHero";
import BuiltOnTrust from "../components/Testimonials/BuiltOnTrust";
import ClientFeedback from "../components/Testimonials/ClientFeedback";
import HorizontalTestimonial from "../components/Testimonials/HorizontalTestimonial";
import WhatClientValue from "../components/Testimonials/WhatClientValue";
import ClientSuccessStory from "../components/Testimonials/ClientSuccessStory";

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <TestimonialsHero />
        <BuiltOnTrust />
        <ClientFeedback />
        <HorizontalTestimonial />
        <WhatClientValue />
        <ClientSuccessStory />
      </main>
      <Footer />
    </>
  );
}
