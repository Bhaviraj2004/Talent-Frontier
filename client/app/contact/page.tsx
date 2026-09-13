import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import GoogleMapSection from "../components/contact/GoogleMapSection";

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <ContactHero />
        <ContactFormSection />
        <GoogleMapSection />
      </main>
    </>
  );
}
