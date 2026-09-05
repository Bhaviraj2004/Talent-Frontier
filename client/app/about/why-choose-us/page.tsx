import HeroSection from "@/app/components/sub pages/about sub/Our Approach/HeroSection";
import BusinessRequirements from "@/app/components/sub pages/about sub/Why Choose Us/BusinessRequirements";
import BusinessSupport from "@/app/components/sub pages/about sub/Why Choose Us/BusinessSupport";
import ComparisonTable from "@/app/components/sub pages/about sub/Why Choose Us/ComparisonTable";
import WhyChooseGrid from "@/app/components/sub pages/about sub/Why Choose Us/WhyChooseGrid";


export default function WhyChooseUsPage() {
  return (
    <main className="flex flex-col w-full overflow-hidden bg-white">
      <HeroSection />
      <BusinessSupport />
      <BusinessRequirements />
      <WhyChooseGrid />
      <ComparisonTable />
    </main>
  );
}
