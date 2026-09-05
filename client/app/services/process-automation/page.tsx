import HeroSection from "../../components/sub pages/services sub/Process & Automation Support/HeroSection";
import SmarterProcesses from "../../components/sub pages/services sub/Process & Automation Support/SmarterProcesses";
import BetterAutomation from "../../components/sub pages/services sub/Process & Automation Support/BetterAutomation";
import HowWeCanSupport from "../../components/sub pages/services sub/Process & Automation Support/HowWeCanSupport";
import ClearProcess from "../../components/sub pages/services sub/Process & Automation Support/ClearProcess";
import ProcessesThatMayBenefit from "../../components/sub pages/services sub/Process & Automation Support/ProcessesThatMayBenefit";
import BuiltForBetterWays from "../../components/sub pages/services sub/Process & Automation Support/BuiltForBetterWays";
import CTASection from "../../components/sub pages/services sub/Process & Automation Support/CTASection";

export default function ProcessAutomationSupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SmarterProcesses />
      <BetterAutomation />
      <HowWeCanSupport />
      <ClearProcess />
      <ProcessesThatMayBenefit />
      <BuiltForBetterWays />
      <CTASection />
    </main>
  );
}
