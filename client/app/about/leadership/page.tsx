
import { redirect } from 'next/navigation';

// Preserved imports for future reactivation:
// import Commitment from '@/app/components/sub pages/about sub/Leadership/Commitment';
// import CTASection from '@/app/components/sub pages/about sub/Leadership/CTASection';
// import DirectorCards from '@/app/components/sub pages/about sub/Leadership/DirectorCards';
// import HeroSection from '@/app/components/sub pages/about sub/Leadership/HeroSection';
// import LeadershipWithPurpose from '@/app/components/sub pages/about sub/Leadership/LeadershipWithPurpose';
// import MeetThePeople from '@/app/components/sub pages/about sub/Leadership/MeetThePeople';
// import Relationships from '@/app/components/sub pages/about sub/Leadership/Relationships';
// import TeamNav from '@/app/components/sub pages/about sub/Leadership/TeamNav';

export default function LeadershipPage() {
  // Page is temporarily hidden as requested; redirects to /about
  redirect('/about');

  /*
  // Preserved original code for later use:
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
  */
}
