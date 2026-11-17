import HeroSection from "@/app/components/sub pages/about sub/Why Choose Us/HeroSection";
import BusinessSupport from "@/app/components/sub pages/about sub/Why Choose Us/BusinessSupport";
import WhyChooseGrid from "@/app/components/sub pages/about sub/Why Choose Us/WhyChooseGrid";
import ComparisonTable from "@/app/components/sub pages/about sub/Why Choose Us/ComparisonTable";

export default function WhyChooseUsPage() {
  return (
    <main className="flex flex-col w-full overflow-hidden bg-white">
      <HeroSection />
      <BusinessSupport />
      <WhyChooseGrid />
      <ComparisonTable />
    </main>
  );
}
