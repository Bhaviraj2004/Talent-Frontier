import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col md:flex-row font-sans">
      
      {/* Left Column (Light) */}
      <div className="w-full md:w-[30%] lg:w-[25%] bg-white p-10 md:p-12 lg:p-16 flex flex-col justify-between">
        <div>
          <Link href="/" className="block mb-8">
            <img src="/logo.png" alt="Talent Frontier Logo" className="h-16 md:h-20 w-auto object-contain" />
          </Link>
          
          <div className="w-12 h-0.5 bg-[#0f172a] mb-8"></div>
          
          <p className="text-[#334155] text-sm leading-relaxed mb-12">
            Connecting businesses with the talent they need through a structured and transparent recruitment approach.
          </p>
          
          <div className="flex items-center gap-4 mb-16 md:mb-0">
            <a href="#" className="text-[#0a66c2] hover:opacity-80 transition-opacity">
              <FaLinkedin className="w-9 h-9" />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="url(#paint0_linear)"/>
                <path d="M24 13H25.5V14.5H24V13ZM18 24C14.686 24 12 21.314 12 18C12 14.686 14.686 12 18 12C21.314 12 24 14.686 24 18C24 21.314 21.314 24 18 24ZM18 14C15.791 14 14 15.791 14 18C14 20.209 15.791 22 18 22C20.209 22 22 20.209 22 18C22 15.791 20.209 14 18 14ZM26 13.5C26 10.462 23.538 8 20.5 8H15.5C12.462 8 10 10.462 10 13.5V22.5C10 25.538 12.462 28 15.5 28H20.5C23.538 28 26 25.538 26 22.5V13.5ZM24.5 22.5C24.5 24.433 22.933 26 21 26H15C13.067 26 11.5 24.433 11.5 22.5V13.5C11.5 11.567 13.067 10 15 10H21C22.933 10 24.5 11.567 24.5 13.5V22.5Z" fill="white"/>
                <defs>
                  <linearGradient id="paint0_linear" x1="4.5" y1="31.5" x2="31.5" y2="4.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFC107"/>
                    <stop offset="0.5" stopColor="#F44336"/>
                    <stop offset="1" stopColor="#9C27B0"/>
                  </linearGradient>
                </defs>
              </svg>
            </a>
            <a href="#" className="text-[#1877f2] hover:opacity-80 transition-opacity">
              <FaFacebook className="w-9 h-9" />
            </a>
          </div>
        </div>
        
        <div className="text-[#334155] text-xs md:text-sm font-medium mt-12 md:mt-0">
          © 2026 Talent Frontier.<br />
          All rights reserved.
        </div>
      </div>

      {/* Right Column (Dark) */}
      <div className="w-full md:w-[70%] lg:w-[75%] bg-[#081a40] p-10 md:p-12 lg:p-16 flex flex-col justify-between">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 mb-16">
          {/* Company */}
          <div>
            <h3 className="text-white text-xl font-normal mb-6">Company</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors text-sm">About</Link></li>
              <li><Link href="/about/story" className="text-slate-300 hover:text-white transition-colors text-sm">Our Story</Link></li>
              <li><Link href="/about/our-approach" className="text-slate-300 hover:text-white transition-colors text-sm">Our Approach</Link></li>
              <li><Link href="/about/leadership" className="text-slate-300 hover:text-white transition-colors text-sm">Leadership</Link></li>
              <li><Link href="/about/why-choose-us" className="text-slate-300 hover:text-white transition-colors text-sm">Why Choose Us</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white text-xl font-normal mb-6">Services</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/services/business-support" className="text-slate-300 hover:text-white transition-colors text-sm">Business Support Services</Link></li>
              <li><Link href="/services/people-operations" className="text-slate-300 hover:text-white transition-colors text-sm">People & Operations Support</Link></li>
              <li><Link href="/services/finance-accounting" className="text-slate-300 hover:text-white transition-colors text-sm">Finance & Accounting Support</Link></li>
              <li><Link href="/services/technology" className="text-slate-300 hover:text-white transition-colors text-sm">Technology, IT & AI Support</Link></li>
              <li><Link href="/services/brand-marketing" className="text-slate-300 hover:text-white transition-colors text-sm leading-tight block">Brand, Marketing & Creative<br/>Support</Link></li>
              <li><Link href="/services/process-automation" className="text-slate-300 hover:text-white transition-colors text-sm">Process & Automation Support</Link></li>
            </ul>
          </div>
          
          {/* Industries */}
          <div>
            <h3 className="text-white text-xl font-normal mb-6">Industries</h3>
            <ul className="flex flex-col gap-4">
              <li><Link href="/industries/professional-services" className="text-slate-300 hover:text-white transition-colors text-sm">Professional Services</Link></li>
              <li><Link href="/industries/finance-accounting" className="text-slate-300 hover:text-white transition-colors text-sm">Financial & Accounting</Link></li>
              <li><Link href="/industries/technology" className="text-slate-300 hover:text-white transition-colors text-sm">Technology & Digital</Link></li>
              <li><Link href="/industries/property" className="text-slate-300 hover:text-white transition-colors text-sm">Property & Real Estate</Link></li>
              <li><Link href="/industries/retail" className="text-slate-300 hover:text-white transition-colors text-sm">E-Commerce & Retails</Link></li>
              <li><Link href="/industries/sme" className="text-slate-300 hover:text-white transition-colors text-sm">SMEs & Growing Business</Link></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-white text-xl font-normal mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#1c55d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-white" />
                </div>
                <a href="tel:+61423728511" className="text-slate-300 hover:text-white transition-colors text-sm mt-1">+61 423 728 511</a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#1c55d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-white" />
                </div>
                <a href="mailto:hello@talentfrontier.com.au" className="text-slate-300 hover:text-white transition-colors text-sm break-all mt-1">hello@talentfrontier.com.au</a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#1c55d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-slate-300 text-sm leading-relaxed mt-1">
                  650 Nicholson Street<br />
                  Fitzroy North VIC 3068,<br />
                  Australia
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Links */}
        <div className="flex flex-wrap items-center justify-start lg:justify-end gap-x-6 gap-y-4 pt-8">
          <Link href="/privacy" className="text-slate-300 hover:text-white transition-colors text-sm">Privacy Policy</Link>
          <span className="w-px h-4 bg-slate-500"></span>
          <Link href="/terms" className="text-slate-300 hover:text-white transition-colors text-sm">Terms & Conditions</Link>
          <span className="w-px h-4 bg-slate-500"></span>
          <Link href="/cookies" className="text-slate-300 hover:text-white transition-colors text-sm">Cookie Policy</Link>
        </div>
        
      </div>
      
    </footer>
  );
}
