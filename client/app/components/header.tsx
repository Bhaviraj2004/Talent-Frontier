"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navData } from './nav-data';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

export default function Header() {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 150);
  };

  const toggleMenu = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  const toggleMobileSubmenu = (title: string) => {
    setMobileExpanded(mobileExpanded === title ? null : title);
  };

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 max-w-[1400px] mx-auto w-full font-sans py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center z-10 shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <img src="/logo.png" alt="Talent Frontier" className="h-14 sm:h-16 md:h-[72px] lg:h-20 w-auto object-contain transition-all" />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[15px] font-bold text-[#1e293b]">
          <Link 
            href="/" 
            className={`${pathname === '/' ? 'text-[#2563eb]' : 'text-[#1e293b]'} hover:text-[#2563eb] transition-colors`}
          >
            Home
          </Link>
          
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
                  type="button"
                  onClick={() => toggleMenu(navItem.title)}
                  className={`flex items-center gap-1.5 ${isActivePage ? 'text-[#2563eb]' : 'text-[#1e293b]'} hover:text-[#2563eb] transition-colors outline-none py-2`}
                  aria-expanded={isMenuOpen}
                >
                  <Link href={navItem.href} className="hover:text-[#2563eb]">
                    {navItem.title}
                  </Link>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            );
          })}
          
          <Link 
            href="/insight" 
            className={`${pathname.startsWith('/insight') ? 'text-[#2563eb]' : 'text-[#1e293b]'} hover:text-[#2563eb] transition-colors`}
          >
            Insight
          </Link>
          <Link 
            href="/contact" 
            className={`${pathname === '/contact' ? 'text-[#2563eb]' : 'text-[#1e293b]'} hover:text-[#2563eb] transition-colors`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/contact"
            className="bg-[#2563eb] hover:bg-blue-700 active:bg-blue-500 active:scale-95 text-white font-bold py-2.5 px-6 rounded-full text-[13px] transition-all shadow-sm"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile / Tablet Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-[#2563eb] hover:bg-gray-100 active:bg-gray-200 focus:outline-none transition-colors"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Desktop Mega Menu Dropdown */}
      {navData.map((navItem) => (
        <div
          key={`mega-${navItem.title}`}
          className={`hidden lg:flex absolute top-full left-0 w-full justify-center transition-all duration-300 ease-out origin-top pointer-events-none
            ${activeMenu === navItem.title ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
          `}
          onMouseEnter={() => handleMouseEnter(navItem.title)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[95%] max-w-[980px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mt-1 p-6 pointer-events-auto">
            {/* Top Bar */}
            <div className="flex justify-between items-center pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="bg-[#e6f0ff] text-[#2563eb] text-[11px] font-semibold px-2.5 py-1 rounded-full">Active Category</span>
                <h2 className="text-base font-bold text-gray-900">{navItem.categoryTitle}</h2>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-gray-500 font-medium">
                <span>Also explore:</span>
                {navItem.exploreLinks.map((link, idx) => (
                  <div key={link.label} className="flex items-center gap-3">
                    <Link href={link.href} className="hover:text-[#2563eb] active:text-blue-700 transition-colors">{link.label}</Link>
                    {idx < navItem.exploreLinks.length - 1 && <span className="w-px h-3 bg-gray-300"></span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Content */}
            <div className={`py-4 grid gap-3 ${navItem.items.length > 4 ? 'grid-cols-3' : 'grid-cols-2'}`}>
              {navItem.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link 
                    href={item.href} 
                    key={item.title} 
                    className="group p-3.5 rounded-xl border border-gray-100 hover:border-[#2563eb] hover:shadow-md active:bg-blue-50/60 active:scale-[0.99] transition-all flex flex-col h-full bg-white"
                  >
                    <div className="w-8 h-8 bg-[#f0f5ff] text-[#2563eb] rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-[13px] font-bold text-gray-900 mb-0.5">{item.title}</h3>
                    <p className="text-[#2563eb] text-[9.5px] font-bold tracking-wider uppercase mb-1">{item.subtitle}</p>
                    <p className="text-gray-500 text-[11px] leading-snug mb-3 flex-grow">{item.description}</p>
                    
                    <div className="flex items-center justify-between text-[11px] mt-auto pt-1">
                      <span className="text-gray-400 font-medium">{item.title.split(',')[0]}</span>
                      <span className="flex items-center text-[#2563eb] font-bold gap-1 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Bottom Bar */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb]"></div>
                <p className="text-gray-600 text-[11px] font-medium">{navItem.bottomBar.text}</p>
              </div>
              <div className="flex items-center gap-4">
                <Link href={navItem.bottomBar.linkHref} className="text-gray-800 text-[11px] font-bold hover:text-[#2563eb] transition-colors flex items-center gap-1">
                  {navItem.bottomBar.linkText} <ArrowRight className="w-3 h-3" />
                </Link>
                <Link href={navItem.bottomBar.buttonHref} className="bg-[#0f172a] text-white px-4 py-1.5 rounded-full text-[11px] font-bold hover:bg-[#2563eb] transition-colors">
                  {navItem.bottomBar.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Mobile / Tablet Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-white border-b border-gray-200 shadow-2xl z-50 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col px-4 sm:px-6 py-6 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
            {/* Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 px-3 rounded-lg text-[15px] font-bold transition-colors ${
                pathname === '/' ? 'text-[#2563eb] bg-blue-50/70' : 'text-[#1e293b] hover:bg-gray-50'
              }`}
            >
              Home
            </Link>

            {/* NavData sections with mobile accordions */}
            {navData.map((navItem) => {
              const isExpanded = mobileExpanded === navItem.title;
              const isActive = pathname.startsWith(navItem.href);

              return (
                <div key={`mob-${navItem.title}`} className="border-b border-gray-50 pb-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={navItem.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-3 px-3 rounded-lg text-[15px] font-bold transition-colors flex-1 ${
                        isActive ? 'text-[#2563eb] font-bold' : 'text-[#1e293b] hover:bg-gray-50'
                      }`}
                    >
                      {navItem.title}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleMobileSubmenu(navItem.title)}
                      className="p-3 text-gray-500 hover:text-[#2563eb]"
                      aria-label={`Expand ${navItem.title} subpages`}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Subpages list */}
                  {isExpanded && (
                    <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50/70 rounded-xl mb-2">
                      {navItem.items.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`flex items-center justify-between py-2 px-3 rounded-md text-[13px] font-medium transition-colors ${
                            pathname === subItem.href ? 'text-[#2563eb] font-bold bg-blue-50' : 'text-gray-700 hover:text-[#2563eb]'
                          }`}
                        >
                          <span>{subItem.title}</span>
                          <ArrowRight className="w-3 h-3 text-gray-400" />
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Insight */}
            <Link
              href="/insight"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 px-3 rounded-lg text-[15px] font-bold transition-colors ${
                pathname.startsWith('/insight') ? 'text-[#2563eb] bg-blue-50/70' : 'text-[#1e293b] hover:bg-gray-50'
              }`}
            >
              Insight
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 px-3 rounded-lg text-[15px] font-bold transition-colors ${
                pathname === '/contact' ? 'text-[#2563eb] bg-blue-50/70' : 'text-[#1e293b] hover:bg-gray-50'
              }`}
            >
              Contact Us
            </Link>

            {/* Mobile CTA */}
            <div className="pt-4 mt-2">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center bg-[#2563eb] hover:bg-blue-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-md text-sm transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
