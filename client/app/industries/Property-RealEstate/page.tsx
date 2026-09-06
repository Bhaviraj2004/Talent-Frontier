import PropertyHero from "@/app/components/sub pages/Industries sub/Property-RealEstate/PropertyHero";
import PracticalSupport from "@/app/components/sub pages/Industries sub/Property-RealEstate/PracticalSupport";
import HelpingPropertyTeams from "@/app/components/sub pages/Industries sub/Property-RealEstate/HelpingPropertyTeams";
import WhoWeSupport from "@/app/components/sub pages/Industries sub/Property-RealEstate/WhoWeSupport";
import SupportOperations from "@/app/components/sub pages/Industries sub/Property-RealEstate/SupportOperations";
import WorkflowChallenges from "@/app/components/sub pages/Industries sub/Property-RealEstate/WorkflowChallenges";
import PropertyWorkflow from "@/app/components/sub pages/Industries sub/Property-RealEstate/PropertyWorkflow";
import BuiltAroundWorkflow from "@/app/components/sub pages/Industries sub/Property-RealEstate/BuiltAroundWorkflow";
import TeamBenefits from "@/app/components/sub pages/Industries sub/Property-RealEstate/TeamBenefits";
import PropertyCTA from "@/app/components/sub pages/Industries sub/Property-RealEstate/PropertyCTA";

export default function PropertyRealEstatePage() {
  return (
    <main className="bg-white min-h-screen">
      <PropertyHero />
      <PracticalSupport />
      <HelpingPropertyTeams />
      <WhoWeSupport />
      <SupportOperations />
      <WorkflowChallenges />
      <PropertyWorkflow />
      <BuiltAroundWorkflow />
      <TeamBenefits />
      <PropertyCTA />
    </main>
  );
}
