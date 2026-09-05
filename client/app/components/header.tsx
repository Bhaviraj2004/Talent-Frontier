"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-[#f4f7fc]">
      <div className="flex items-center justify-between px-6 py-5 md:px-12 max-w-[1400px] mx-auto w-full font-sans">
        <Link href="/" className="flex items-center">
          {/* Please replace the src below with the actual path to your logo, or use the next/image component */}
          <img src="/logo.png" alt="Talent Frontier" className="h-12 w-auto object-contain" />
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-bold text-[#1e293b]">
          <Link href="/" className={`${pathname === '/' ? 'text-[#2563eb]' : ''} hover:text-[#2563eb] transition-colors`}>Home</Link>
          <Link href="/about" className={`${pathname === '/about' ? 'text-[#2563eb]' : ''} hover:text-[#2563eb] transition-colors`}>About</Link>
          <Link href="/services" className={`${pathname === '/services' ? 'text-[#2563eb]' : ''} hover:text-[#2563eb] transition-colors`}>Services</Link>
          <Link href="/industries" className={`${pathname === '/industries' ? 'text-[#2563eb]' : ''} hover:text-[#2563eb] transition-colors`}>Industries</Link>
          <Link href="/testimonials" className={`${pathname === '/testimonials' ? 'text-[#2563eb]' : ''} hover:text-[#2563eb] transition-colors`}>Testimonials</Link>
          <Link href="/blog" className={`${pathname === '/blog' ? 'text-[#2563eb]' : ''} hover:text-[#2563eb] transition-colors`}>Blog</Link>
          <Link href="/contact" className={`${pathname === '/contact' ? 'text-[#2563eb]' : ''} hover:text-[#2563eb] transition-colors`}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}
