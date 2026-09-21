import React from 'react';
import Hero from '@/app/components/sub pages/services sub/Virtual CEO Services/Hero';
import Section1 from '@/app/components/sub pages/services sub/Virtual CEO Services/Section1';
import Section2 from '@/app/components/sub pages/services sub/Virtual CEO Services/Section2';
import Section3 from '@/app/components/sub pages/services sub/Virtual CEO Services/Section3';
import Section4 from '@/app/components/sub pages/services sub/Virtual CEO Services/Section4';
import Section5 from '@/app/components/sub pages/services sub/Virtual CEO Services/Section5';

export const metadata = {
  title: 'Virtual & Fractional Executives | Talent Frontier',
  description: 'Connect with experienced virtual and fractional executives for strategic and operational leadership through Talent Frontier.',
};

export default function VirtualFractionalExecutivesPage() {
  return (
    <main className="flex flex-col w-full overflow-hidden bg-white">
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </main>
  );
}
