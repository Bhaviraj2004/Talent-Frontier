import Link from 'next/link';
import Image from 'next/image';

export default function ContactFormSection() {
  return (
    <section className="w-full bg-[#f8fafc] py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Form Side */}
        <div className="w-full lg:w-[60%] bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h4 className="text-[#3b82f6] font-bold text-[12px] uppercase tracking-wider mb-4">
            Business Enquiry
          </h4>
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#0f172a] mb-6 tracking-tight">
            How Can We Help?
          </h2>
          <p className="text-[#64748b] text-[13px] leading-relaxed mb-10 font-medium">
            Tell us about your business, current priorities and the support you require.<br className="hidden md:block" />
            Our team help you identify the right next step.
          </p>

          <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#1e293b]">First Name*</label>
                <input type="text" className="bg-[#f8fafc] border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-blue-500 text-[13px]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#1e293b] text-transparent select-none hidden md:block">Last Name*</label>
                <input type="text" className="bg-[#f8fafc] border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-blue-500 text-[13px] mt-0 md:-mt-[22px]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#1e293b]">Business Email Address*</label>
                <input type="email" className="bg-[#f8fafc] border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-blue-500 text-[13px]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#1e293b]">Phone Number</label>
                <input type="tel" className="bg-[#f8fafc] border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-blue-500 text-[13px]" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#1e293b]">Company Name*</label>
                <input type="text" className="bg-[#f8fafc] border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-blue-500 text-[13px]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#1e293b]">Industry</label>
                <select className="bg-[#f8fafc] border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-blue-500 text-[13px] text-gray-500 appearance-none">
                  <option value="">Select Industry</option>
                  <option value="tech">Technology & Digital</option>
                  <option value="finance">Finance & Accounting</option>
                  <option value="services">Professional Services</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-[#1e293b]">Subject*</label>
              <input type="text" className="bg-[#f8fafc] border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-blue-500 text-[13px]" />
            </div>

            <div className="flex flex-col gap-2 mb-2">
              <label className="text-[12px] font-bold text-[#1e293b]">Tell Us About Your Requirements*</label>
              <textarea rows={5} className="bg-[#f8fafc] border border-gray-200 rounded-md px-4 py-3 outline-none focus:border-blue-500 text-[13px] resize-none"></textarea>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
              <p className="text-[12px] font-medium text-[#64748b]">
                I have read and agree to Talent frontier's <Link href="#" className="text-[#3b82f6] hover:underline font-bold">Privacy Policy.</Link>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button type="submit" className="bg-[#1d4ed8] hover:bg-blue-600 text-white px-8 py-3.5 rounded-md font-bold text-[13px] transition-colors shadow-md">
                Send Enquiry
              </button>
              <Link href="#" className="text-[#3b82f6] font-bold text-[13px] hover:text-blue-700 transition-colors inline-flex items-center group">
                Book a Consultation 
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

          </form>
        </div>

        {/* Right Info Side */}
        <div className="w-full lg:w-[40%] flex flex-col pt-8">
          <h2 className="text-[24px] md:text-[28px] font-bold text-[#0f172a] mb-6 tracking-tight">
            Talk to Our Team
          </h2>
          <p className="text-[#64748b] text-[13px] leading-relaxed mb-12 font-medium max-w-xs">
            Prefer to speak with someone directly? connect with our team using the details below
          </p>

          <div className="flex flex-col gap-10 mb-12">
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div className="flex flex-col border-l-2 border-gray-300 pl-4 py-1">
                <span className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wider mb-1">Phone</span>
                <span className="text-[13px] font-medium text-[#475569]">+61 423 728 511</span>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="flex flex-col border-l-2 border-gray-300 pl-4 py-1">
                <span className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wider mb-1">Email</span>
                <span className="text-[13px] font-medium text-[#475569]">admin@talentfrontier.com.au</span>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-[#3b82f6] flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <div className="flex flex-col border-l-2 border-gray-300 pl-4 py-0">
                <span className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wider mb-1">Office</span>
                <span className="text-[13px] font-medium text-[#475569] leading-relaxed">
                  650 Nicholson Street Fitzroy<br/>North VIC 3068, Australia
                </span>
              </div>
            </div>
          </div>

          <button className="bg-[#f8fafc] border border-gray-300 hover:bg-gray-100 text-[#0f172a] px-6 py-3 rounded-md font-bold text-[12px] transition-colors shadow-sm w-fit flex items-center gap-3 mb-12">
            <svg className="w-4 h-4 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Consultation
          </button>

          <div className="flex items-center gap-3">
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0077b5] text-white hover:opacity-90 transition-opacity">
              {/* LinkedIn Icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] text-white hover:opacity-90 transition-opacity">
              {/* Instagram Icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </Link>
            <Link href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1877f2] text-white hover:opacity-90 transition-opacity">
              {/* Facebook Icon */}
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
