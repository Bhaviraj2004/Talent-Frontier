import React from 'react';
import Hero from '@/app/components/sub pages/services sub/Virtual CEO Services/Hero';
import Section1 from '@/app/components/sub pages/services sub/Virtual CEO Services/Section1';
import Section2 from '@/app/components/sub pages/services sub/Virtual CEO Services/Section2';
import Section3 from '@/app/components/sub pages/services sub/Virtual CEO Services/Section3';
import Section4 from '@/app/components/sub pages/services sub/Virtual CEO Services/Section4';
import Section5 from '@/app/components/sub pages/services sub/Virtual CEO Services/Section5';
import Section6 from '@/app/components/sub pages/services sub/Virtual CEO Services/Section6';

export const metadata = {
  title: 'Virtual CEO Services | Talent Frontier',
  description: 'Senior-level business guidance designed to help founders and leadership teams establish priorities, strengthen operations and move forward with greater clarity.',
};

export default function VirtualCEOServices() {
  return (
    <main className="flex flex-col w-full overflow-hidden bg-white">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </main>
  );
}
