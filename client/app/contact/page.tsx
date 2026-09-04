import Header from "../components/header";
import Footer from "../components/footer";
import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <ContactHero />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
