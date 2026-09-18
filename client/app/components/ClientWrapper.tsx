"use client";

import { usePathname } from 'next/navigation';
import Header from './header';
import Footer from './footer';
import ScrollRevealProvider from './ScrollRevealProvider';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isConsole = pathname?.startsWith('/console');

  return (
    <>
      <ScrollRevealProvider />
      {!isConsole && <Header />}
      <main className="flex-grow">{children}</main>
      {!isConsole && <Footer />}
    </>
  );
}
