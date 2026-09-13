"use client";
import Link from 'next/link';
import { useState, FormEvent, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    subject: '',
    requirements: '',
    privacyAgree: false,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const industries = [
    { value: '', label: 'Select Industry' },
    { value: 'property', label: 'Property & Real Estate' },
    { value: 'ecommerce', label: 'Ecommerce & Retail' },
    { value: 'tech', label: 'Technology & Digital' },
    { value: 'finance', label: 'Finance & Accounting' },
    { value: 'services', label: 'Professional Services' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', company: '',
          industry: '', subject: '', requirements: '', privacyAgree: false
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setErrorMessage('Failed to connect to the server. Please try again later.');
    }
  };
  return (
    <section id="contact-form" className="w-full bg-[#f8fafc] py-16 sm:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Form Side */}
        <div className="w-full lg:w-[60%] bg-white rounded-3xl p-6 sm:p-8 md:p-12 shadow-sm border border-gray-100">
          <h4 className="text-[#3b82f6] font-bold text-[12px] uppercase tracking-wider mb-4">
            Business Enquiry
          </h4>
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-bold text-[#0f172a] mb-4 sm:mb-6 tracking-tight">
            How Can We Help?
          </h2>
          <p className="text-[#64748b] text-[13px] leading-relaxed mb-8 sm:mb-10 font-medium">
            Tell us about your business, current priorities and the support you require.<br className="hidden md:block" />
            Our team help you identify the right next step.
          </p>

          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md text-[13px] font-medium">
              Thank you! Your enquiry has been submitted successfully. A confirmation email has been sent to you.
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md text-[13px] font-medium">
              {errorMessage}
            </div>
          )}

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#1e293b]">First Name*</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="John" className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-[13px] transition-all duration-200 shadow-sm placeholder:text-gray-400" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#1e293b]">Last Name*</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Doe" className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-[13px] transition-all duration-200 shadow-sm placeholder:text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#1e293b]">Business Email Address*</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-[13px] transition-all duration-200 shadow-sm placeholder:text-gray-400" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#1e293b]">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+61 ..." className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-[13px] transition-all duration-200 shadow-sm placeholder:text-gray-400" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-bold text-[#1e293b]">Company Name*</label>
                <input type="text" name="company" value={formData.company} onChange={handleChange} required placeholder="Company Ltd" className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-[13px] transition-all duration-200 shadow-sm placeholder:text-gray-400" />
              </div>
              <div className="flex flex-col gap-2" ref={dropdownRef}>
                <label className="text-[12px] font-bold text-[#1e293b]">Industry</label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full bg-[#f8fafc] border ${isDropdownOpen ? 'border-blue-500 bg-white ring-4 ring-blue-500/10' : 'border-gray-200 hover:border-gray-300'} rounded-lg px-4 py-3.5 text-left outline-none text-[13px] text-gray-700 flex items-center justify-between transition-all duration-200 shadow-sm`}
                  >
                    <span className={!formData.industry ? "text-gray-400" : "font-medium"}>
                      {industries.find(i => i.value === formData.industry)?.label || 'Select Industry'}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180 text-blue-500' : ''}`} />
                  </button>

                  <div 
                    className={`absolute z-20 w-full mt-2 bg-white border border-gray-100 rounded-xl py-2 overflow-y-auto overflow-x-hidden origin-top transition-all duration-200 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] 
                    ${isDropdownOpen ? 'opacity-100 scale-y-100 max-h-60' : 'opacity-0 scale-y-95 max-h-0 pointer-events-none border-none py-0'}`}
                  >
                    {industries.map((industry) => (
                      <button
                        key={industry.value}
                        type="button"
                        onClick={() => {
                          setFormData(prev => ({ ...prev, industry: industry.value }));
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[13px] transition-all duration-150 flex items-center justify-between ${
                          formData.industry === industry.value && industry.value !== ''
                            ? 'bg-blue-50/80 text-blue-700 font-semibold pl-5'
                            : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600 hover:pl-5'
                        }`}
                      >
                        <span className={industry.value === '' ? 'text-gray-400 font-medium' : ''}>
                          {industry.label}
                        </span>
                        {formData.industry === industry.value && industry.value !== '' && (
                          <Check className="w-4 h-4 text-blue-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[12px] font-bold text-[#1e293b]">Subject*</label>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="How can we help you?" className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-[13px] transition-all duration-200 shadow-sm placeholder:text-gray-400" />
            </div>

            <div className="flex flex-col gap-2 mb-2">
              <label className="text-[12px] font-bold text-[#1e293b]">Tell Us About Your Requirements*</label>
              <textarea name="requirements" value={formData.requirements} onChange={handleChange} rows={5} required placeholder="Describe your staffing or support needs..." className="w-full bg-[#f8fafc] border border-gray-200 rounded-lg px-4 py-3.5 outline-none focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 text-[13px] transition-all duration-200 shadow-sm placeholder:text-gray-400 resize-none"></textarea>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="relative flex items-center justify-center">
                <input type="checkbox" name="privacyAgree" checked={formData.privacyAgree} onChange={handleChange} required id="privacy-agree" className="peer w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer transition-all duration-200" />
              </div>
              <label htmlFor="privacy-agree" className="text-[12px] font-medium text-[#64748b] cursor-pointer hover:text-gray-700 transition-colors">
                I have read and agree to Talent frontier's <Link href="/contact" className="text-[#3b82f6] hover:text-blue-700 hover:underline font-bold transition-colors">Privacy Policy.</Link>
              </label>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
              <button type="submit" disabled={status === 'loading'} className="bg-[#1d4ed8] hover:bg-blue-700 active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed text-white px-8 py-3.5 rounded-lg font-bold text-[13px] transition-all duration-200 shadow-lg shadow-blue-500/25 text-center flex items-center justify-center">
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Enquiry'}
              </button>
              <a href="mailto:admin@talentfrontier.com.au?subject=Consultation%20Request" className="text-[#3b82f6] font-bold text-[13px] hover:text-blue-700 transition-all duration-200 inline-flex items-center justify-center group py-2">
                Book a Consultation 
                <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </form>
        </div>

        {/* Right Info Side */}
        <div className="w-full lg:w-[40%] flex flex-col pt-4 lg:pt-8">
          <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-bold text-[#0f172a] mb-4 sm:mb-6 tracking-tight">
            Talk to Our Team
          </h2>
          <p className="text-[#64748b] text-[13px] leading-relaxed mb-8 sm:mb-12 font-medium max-w-xs">
            Prefer to speak with someone directly? connect with our team using the details below
          </p>

          <div className="flex flex-col gap-8 sm:gap-10 mb-8 sm:mb-12">
            <a href="tel:+61XXXXXXXXX" className="flex items-start gap-5 group">
              <div className="w-10 h-10 rounded-full bg-[#3b82f6] group-hover:bg-blue-600 transition-colors flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <div className="flex flex-col border-l-2 border-gray-300 pl-4 py-1">
                <span className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wider mb-1">Phone</span>
                <span className="text-[13px] font-medium text-[#475569] group-hover:text-blue-600 transition-colors">+61 XXX XXX XXX</span>
              </div>
            </a>

            <a href="mailto:admin@talentfrontier.com.au" className="flex items-start gap-5 group">
              <div className="w-10 h-10 rounded-full bg-[#3b82f6] group-hover:bg-blue-600 transition-colors flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <div className="flex flex-col border-l-2 border-gray-300 pl-4 py-1">
                <span className="text-[11px] font-bold text-[#0f172a] uppercase tracking-wider mb-1">Email</span>
                <span className="text-[13px] font-medium text-[#475569] group-hover:text-blue-600 transition-colors break-all">admin@talentfrontier.com.au</span>
              </div>
            </a>

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

          <a href="mailto:admin@talentfrontier.com.au?subject=Consultation%20Booking" className="bg-[#f8fafc] border border-gray-300 hover:bg-gray-100 text-[#0f172a] px-6 py-3 rounded-md font-bold text-[12px] transition-colors shadow-sm w-full sm:w-fit flex items-center justify-center gap-3">
            <svg className="w-4 h-4 text-[#3b82f6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a Consultation
          </a>

        </div>
      </div>
    </section>
  );
}
