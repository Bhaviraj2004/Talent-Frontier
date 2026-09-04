import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full flex flex-col lg:flex-row font-sans border-t border-gray-200">
      {/* Left Column (White) */}
      <div className="w-full lg:w-[30%] xl:w-[25%] bg-white flex lg:justify-end">
        <div className="w-full lg:max-w-[350px] px-8 md:px-12 py-12 lg:py-16 flex flex-col justify-between">
          <div>
            <Link href="/" className="inline-block mb-6">
              <img src="/logo.png" alt="Talent Frontier" className="h-12 w-auto object-contain" />
            </Link>
            
            <div className="w-10 h-[2px] bg-gray-400 mb-6"></div>
            
            <p className="text-[#475569] text-[15px] leading-relaxed mb-10 pr-4">
              Connecting businesses with the talent they need through a structured and transparent recruitment approach.
            </p>
            
            <div className="flex gap-3 mb-12 lg:mb-0">
              <Link href="#" className="w-10 h-10 bg-[#0077b5] text-white flex items-center justify-center rounded-lg hover:opacity-80 transition-opacity shadow-sm">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 text-white flex items-center justify-center rounded-lg hover:opacity-80 transition-opacity shadow-sm">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
              <Link href="#" className="w-10 h-10 bg-[#1877f2] text-white flex items-center justify-center rounded-lg hover:opacity-80 transition-opacity shadow-sm">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </Link>
            </div>
          </div>
          
          <p className="text-[13px] text-[#64748b] font-medium hidden lg:block">
            © 2026 Talent Frontier.<br/>All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Column (Dark Blue) */}
      <div className="w-full lg:w-[70%] xl:w-[75%] bg-[#0a1945] flex lg:justify-start">
        <div className="w-full lg:max-w-[1050px] px-8 md:px-12 py-12 lg:py-16 flex flex-col justify-between">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16 lg:mb-24">
            
            {/* Company */}
            <div className="flex flex-col">
              <h3 className="text-white text-[19px] font-medium mb-6 tracking-wide">Company</h3>
              <ul className="flex flex-col gap-3.5 text-[14.5px] text-[#93c5fd]">
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Our Approach</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Leadership</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Why Choose Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col">
              <h3 className="text-white text-[19px] font-medium mb-6 tracking-wide">Services</h3>
              <ul className="flex flex-col gap-3.5 text-[14.5px] text-[#93c5fd]">
                <li><Link href="#" className="hover:text-white transition-colors">Business Support Services</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">People & Operations Support</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Finance & Accounting Support</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Technology, IT & AI Support</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Brand, Marketing & Creative Support</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Process & Automation Support</Link></li>
              </ul>
            </div>

            {/* Industries */}
            <div className="flex flex-col">
              <h3 className="text-white text-[19px] font-medium mb-6 tracking-wide">Industries</h3>
              <ul className="flex flex-col gap-3.5 text-[14.5px] text-[#93c5fd]">
                <li><Link href="#" className="hover:text-white transition-colors">Professional Services</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Financial & Accounting</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Technology & Digital</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Property & Real Estate</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">E-Commerce & Retails</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">SMEs & Growing Business</Link></li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="flex flex-col">
              <h3 className="text-white text-[19px] font-medium mb-6 tracking-wide">Contact Us</h3>
              <ul className="flex flex-col gap-4 text-[14.5px] text-[#93c5fd]">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2563eb] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                  </div>
                  <span>+61 423 728 511</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2563eb] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                  </div>
                  <span>hello@talentfrontier.com.au</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#2563eb] flex items-center justify-center text-white shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  </div>
                  <span className="leading-snug">650 Nicholson Street<br/>Fitzroy North VIC 3068,<br/>Australia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between lg:justify-end gap-6 text-[13px] text-[#93c5fd]">
            {/* Mobile-only copyright */}
            <p className="text-center lg:hidden">
              © 2026 Talent Frontier. All rights reserved.
            </p>
            {/* Bottom Links */}
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
              <span className="text-white/30">|</span>
              <Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <span className="text-white/30">|</span>
              <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
