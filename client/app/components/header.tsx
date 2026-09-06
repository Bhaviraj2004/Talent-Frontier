"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navData, simpleLinks } from './nav-data';
import { ChevronDown, ArrowRight } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150); // slight delay to make moving to dropdown easier
  };

  const toggleMenu = (title: string) => {
    if (activeMenu === title) {
      setActiveMenu(null);
    } else {
      setActiveMenu(title);
    }
  };

  // Close menu on route change
  useEffect(() => {
    setActiveMenu(null);
  }, [pathname]);

  return (
    <header className="w-full bg-white relative z-50 shadow-sm">
      <div className="flex items-center justify-between px-6 py-5 md:px-12 max-w-[1400px] mx-auto w-full font-sans">
        <Link href="/" className="flex items-center z-10">
          <img src="/logo.png" alt="Talent Frontier" className="h-16 w-auto object-contain" />
        </Link>
        
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-bold text-[#1e293b]">
          <Link href="/" className={`${pathname === '/' ? 'text-[#2563eb]' : ''} hover:text-[#2563eb] transition-colors`}>Home</Link>
          
          {navData.map((navItem) => {
            const isActivePage = pathname.startsWith(navItem.href);
            const isMenuOpen = activeMenu === navItem.title;
            
            return (
              <div 
                key={navItem.title} 
                className="relative"
                onMouseEnter={() => handleMouseEnter(navItem.title)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => toggleMenu(navItem.title)}
                  className={`flex items-center gap-1 ${isActivePage ? 'text-[#2563eb]' : ''} hover:text-[#2563eb] transition-colors outline-none`}
                >
                  <Link href={navItem.href}>{navItem.title}</Link>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            );
          })}
          
          <Link href="/blog" className={`${pathname === '/blog' ? 'text-[#2563eb]' : ''} hover:text-[#2563eb] transition-colors`}>Blog</Link>
          <Link href="/contact" className={`${pathname === '/contact' ? 'text-[#2563eb]' : ''} hover:text-[#2563eb] transition-colors`}>Contact</Link>
        </nav>
      </div>

      {/* Mega Menu Overlay */}
      {navData.map((navItem) => (
        <div
          key={`mega-${navItem.title}`}
          className={`absolute top-full left-0 w-full flex justify-center transition-all duration-300 origin-top
            ${activeMenu === navItem.title ? 'opacity-100 visible scale-y-100' : 'opacity-0 invisible scale-y-95 pointer-events-none'}
          `}
          onMouseEnter={() => handleMouseEnter(navItem.title)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[95%] max-w-[1400px] bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mt-2 p-8">
            
            {/* Top Bar */}
            <div className="flex justify-between items-center pb-6 border-b border-gray-100">
              <div className="flex items-center gap-4">
                <span className="bg-[#e6f0ff] text-[#2563eb] text-sm font-semibold px-4 py-1.5 rounded-full">Active Category</span>
                <h2 className="text-xl font-bold text-gray-900">{navItem.categoryTitle}</h2>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500 font-medium">
                <span>Also explore:</span>
                {navItem.exploreLinks.map((link, idx) => (
                  <div key={link.label} className="flex items-center gap-4">
                    <Link href={link.href} className="hover:text-[#2563eb] transition-colors">{link.label}</Link>
                    {idx < navItem.exploreLinks.length - 1 && <span className="w-px h-4 bg-gray-300"></span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Content */}
            <div className={`py-8 grid gap-6 ${navItem.items.length > 4 ? 'grid-cols-3' : 'grid-cols-2'}`}>
              {navItem.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link href={item.href} key={item.title} className="group p-6 rounded-2xl border border-gray-100 hover:border-[#2563eb] hover:shadow-lg transition-all flex flex-col h-full bg-white">
                    <div className="w-12 h-12 bg-[#f0f5ff] text-[#2563eb] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-[#2563eb] text-xs font-bold tracking-wider uppercase mb-4">{item.subtitle}</p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">{item.description}</p>
                    
                    <div className="flex items-center justify-between text-sm mt-auto">
                      <span className="text-gray-400 font-medium">{item.title.split(',')[0]}</span>
                      <span className="flex items-center text-[#2563eb] font-bold gap-1 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Bar */}
            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#2563eb]"></div>
                <p className="text-gray-600 text-sm font-medium">{navItem.bottomBar.text}</p>
              </div>
              <div className="flex items-center gap-6">
                <Link href={navItem.bottomBar.linkHref} className="text-gray-800 font-bold hover:text-[#2563eb] transition-colors flex items-center gap-1">
                  {navItem.bottomBar.linkText} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={navItem.bottomBar.buttonHref} className="bg-[#0f172a] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#2563eb] transition-colors">
                  {navItem.bottomBar.buttonText}
                </Link>
              </div>
            </div>

          </div>
        </div>
      ))}

    </header>
  );
}
