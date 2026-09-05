
import Commitment from '@/app/components/sub pages/about sub/Leadership/Commitment';
import CTASection from '@/app/components/sub pages/about sub/Leadership/CTASection';
import DirectorCards from '@/app/components/sub pages/about sub/Leadership/DirectorCards';
import LeadershipWithPurpose from '@/app/components/sub pages/about sub/Leadership/LeadershipWithPurpose';
import MeetThePeople from '@/app/components/sub pages/about sub/Leadership/MeetThePeople';
import Relationships from '@/app/components/sub pages/about sub/Leadership/Relationships';
import TeamNav from '@/app/components/sub pages/about sub/Leadership/TeamNav';
import HeroSection from '@/app/components/sub pages/about sub/Our Approach/HeroSection';

export default function LeadershipPage() {
  return (
    <main className="flex flex-col w-full overflow-hidden">
      <HeroSection />
      <MeetThePeople />
      <LeadershipWithPurpose />
      <DirectorCards />
      <Relationships />
      <Commitment />
      <TeamNav />
      <CTASection />
    </main>
  );
}
