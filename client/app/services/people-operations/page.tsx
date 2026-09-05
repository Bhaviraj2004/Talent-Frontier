import HeroSection from "@/app/components/sub pages/about sub/Our Approach/HeroSection";
import HowWeCanSupport from "@/app/components/sub pages/services sub/Business Support Services/HowWeCanSupport";
import OrganisedWorkplace from "@/app/components/sub pages/services sub/People & Operations Support/OrganisedWorkplace";
import PracticalSupport from "@/app/components/sub pages/services sub/People & Operations Support/PracticalSupport";
import QuoteSection from "@/app/components/sub pages/services sub/People & Operations Support/QuoteSection";
import SupportThatGrows from "@/app/components/sub pages/services sub/People & Operations Support/SupportThatGrows";
import WhatYouCanExpect from "@/app/components/sub pages/services sub/People & Operations Support/WhatYouCanExpect";


export default function PeopleOperationsPage() {
  return (
    <main className="flex flex-col w-full overflow-hidden bg-white">
      <HeroSection />
      <PracticalSupport />
      <OrganisedWorkplace />
      <HowWeCanSupport />
      <SupportThatGrows />
      <WhatYouCanExpect />
      <QuoteSection />
    </main>
  );
}
