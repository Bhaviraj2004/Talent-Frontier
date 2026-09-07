"use client";

import { usePathname } from 'next/navigation';
import Header from './header';
import Footer from './footer';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isConsole = pathname?.startsWith('/console');

  return (
    <>
      {!isConsole && <Header />}
      <main className="flex-grow">{children}</main>
      {!isConsole && <Footer />}
    </>
  );
}
