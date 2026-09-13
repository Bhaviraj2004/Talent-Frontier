import Image from "next/image";

export default function HowWeCanSupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-gray-900 text-center md:text-left">
        How We Can Support You
      </h2>
      
      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div>
              <span className="text-[#1150fb] text-3xl sm:text-4xl font-black mb-4 sm:mb-6 block group-hover:scale-110 origin-left transition-transform duration-300">01</span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">Bookkeeping Assistance</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Routine bookkeeping support within approved systems.</p>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div>
              <span className="text-[#1150fb] text-3xl sm:text-4xl font-black mb-4 sm:mb-6 block group-hover:scale-110 origin-left transition-transform duration-300">02</span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">Accounts Payable<br/>Administration</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Invoice organisation and approval-workflow preparation.</p>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div>
              <span className="text-[#1150fb] text-3xl sm:text-4xl font-black mb-4 sm:mb-6 block group-hover:scale-110 origin-left transition-transform duration-300">03</span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">Accounts Receivable<br/>Administration</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Invoice records and approved payment follow-ups.</p>
            </div>
          </div>
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div>
              <span className="text-[#1150fb] text-3xl sm:text-4xl font-black mb-4 sm:mb-6 block group-hover:scale-110 origin-left transition-transform duration-300">04</span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">Bank Reconciliation<br/>Support</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Transaction information prepared for review.</p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div className="p-6 sm:p-8 w-full sm:w-1/2 flex flex-col justify-center">
              <span className="text-[#1150fb] text-3xl sm:text-4xl font-black mb-3 block group-hover:scale-110 origin-left transition-transform duration-300">05</span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Expense Administration</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Organised expense records and supporting documents.</p>
            </div>
            <div className="w-full sm:w-1/2 relative aspect-[235/200] sm:aspect-auto min-h-[180px] sm:min-h-0 overflow-hidden bg-slate-50">
              <Image 
                src="/sub pages/Services/Finance & Accounting Support/Card 05 Image — Expense administration.png" 
                alt="Expense Administration" 
                fill 
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
          
          <div className="bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-center shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer min-h-[180px]">
            <span className="text-[#1150fb] text-3xl sm:text-4xl font-black mb-3 block group-hover:scale-110 origin-left transition-transform duration-300">06</span>
            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Financial Data Organisation</h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Structured records, spreadsheets and information.</p>
          </div>

          <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden flex flex-col sm:flex-row shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer">
            <div className="p-6 sm:p-8 w-full sm:w-1/2 flex flex-col justify-center">
              <span className="text-[#1150fb] text-3xl sm:text-4xl font-black mb-3 block group-hover:scale-110 origin-left transition-transform duration-300">07</span>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Reporting Preparation</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">Information organised for internal reporting.</p>
            </div>
            <div className="w-full sm:w-1/2 relative aspect-square sm:aspect-auto min-h-[180px] sm:min-h-0 overflow-hidden bg-slate-50">
              <Image 
                src="/sub pages/Services/Finance & Accounting Support/Card 07 Image — Reporting preparation.png" 
                alt="Reporting Preparation" 
                fill 
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
