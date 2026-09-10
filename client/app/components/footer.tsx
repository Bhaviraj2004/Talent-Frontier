import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col lg:flex-row font-sans">
      
      {/* Left Column (Light) */}
      <div className="w-full lg:w-[30%] xl:w-[25%] bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <Link href="/" className="block mb-4 sm:mb-6">
            <img src="/logo.png" alt="Talent Frontier Logo" className="h-10 sm:h-14 md:h-16 w-auto object-contain" />
          </Link>
          
          <div className="w-12 h-0.5 bg-[#0f172a] mb-4 sm:mb-6"></div>
          
          <p className="text-[#334155] text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
            Connecting businesses with the talent they need through a structured and transparent recruitment approach.
          </p>
          
          <div className="flex items-center gap-3.5 mb-6 lg:mb-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#0a66c2] hover:scale-110 active:scale-95 transition-transform duration-300 inline-block">
              <FaLinkedin className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 active:scale-95 transition-transform duration-300 inline-block">
              <svg className="w-7 h-7 sm:w-8 sm:h-8" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1877f2] hover:scale-110 active:scale-95 transition-transform duration-300 inline-block">
              <FaFacebook className="w-7 h-7 sm:w-8 sm:h-8" />
            </a>
          </div>
        </div>
        
        <div className="text-[#334155] text-xs sm:text-sm font-medium mt-4 lg:mt-0">
          © 2026 Talent Frontier.<br />
          All rights reserved.
        </div>
      </div>

      {/* Right Column (Dark) */}
      <div className="w-full lg:w-[70%] xl:w-[75%] bg-[#081a40] p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8 sm:mb-10">
          {/* Company */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-5">Company</h3>
            <ul className="flex flex-col gap-2 sm:gap-2.5">
              <li><Link href="/about" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">About</Link></li>
              <li><Link href="/about/story" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Our Story</Link></li>
              <li><Link href="/about/our-approach" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Our Approach</Link></li>
              <li><Link href="/about/leadership" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Leadership</Link></li>
              <li><Link href="/about/why-choose-us" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Why Choose Us</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-5">Services</h3>
            <ul className="flex flex-col gap-2 sm:gap-2.5">
              <li><Link href="/services/business-support" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Business Support Services</Link></li>
              <li><Link href="/services/people-operations" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">People & Operations Support</Link></li>
              <li><Link href="/services/finance-accounting" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Finance & Accounting Support</Link></li>
              <li><Link href="/services/Technology" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Technology, IT & AI Support</Link></li>
              <li><Link href="/services/Brand-Marketing" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm leading-tight inline-block">Brand, Marketing & Creative Support</Link></li>
              <li><Link href="/services/process-automation" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Process & Automation Support</Link></li>
            </ul>
          </div>
          
          {/* Industries */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-5">Industries</h3>
            <ul className="flex flex-col gap-2 sm:gap-2.5">
              <li><Link href="/industries/professional-services" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Professional Services</Link></li>
              <li><Link href="/industries/finance-and-accounting" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Financial & Accounting</Link></li>
              <li><Link href="/industries/technology-and-digital" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Technology & Digital</Link></li>
              <li><Link href="/industries/property-and-real-estate" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">Property & Real Estate</Link></li>
              <li><Link href="/industries/ecommerce-and-retail" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">E-Commerce & Retails</Link></li>
              <li><Link href="/industries/smes-and-growing-businesses" className="text-slate-300 hover:text-blue-400 active:text-blue-200 hover:translate-x-1 transition-all duration-200 text-xs sm:text-sm inline-block">SMEs & Growing Business</Link></li>
            </ul>
          </div>
          
          {/* Contact Us */}
          <div>
            <h3 className="text-white text-base sm:text-lg font-semibold mb-3 sm:mb-5">Contact Us</h3>
            <ul className="flex flex-col gap-3 sm:gap-4">
              <li className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#1c55d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3 h-3 text-white" />
                </div>
                <a href="tel:+61XXXXXXXXX" className="text-slate-300 hover:text-blue-400 active:text-blue-200 transition-colors text-xs sm:text-sm mt-0.5">+61 XXX XXX XXX</a>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#1c55d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3 h-3 text-white" />
                </div>
                <a href="mailto:admin@talentfrontier.com.au" className="text-slate-300 hover:text-blue-400 active:text-blue-200 transition-colors text-xs sm:text-sm break-all mt-0.5">admin@talentfrontier.com.au</a>
              </li>
              <li className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#1c55d4] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3 h-3 text-white" />
                </div>
                <span className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-0.5">
                  650 Nicholson Street<br />
                  Fitzroy North VIC 3068,<br />
                  Australia
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Links */}
        <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-slate-700/60">
          <Link 
            href="/privacy-policy" 
            className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-medium"
          >
            Privacy Policy
          </Link>
          <Link 
            href="/terms-conditions" 
            className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-medium"
          >
            Terms & Conditions
          </Link>
          <Link 
            href="/cookie-policy" 
            className="text-slate-400 hover:text-white transition-colors duration-200 text-xs sm:text-sm font-medium"
          >
            Cookie Policy
          </Link>
        </div>
        
      </div>
      
    </footer>
  );
}
