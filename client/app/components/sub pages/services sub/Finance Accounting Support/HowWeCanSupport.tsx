import Image from "next/image";

export default function HowWeCanSupport() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">
        How We Can Support You
      </h2>
      
      <div className="flex flex-col gap-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-gray-200 p-8 flex flex-col">
            <span className="text-[#1150fb] text-4xl font-medium mb-6">01</span>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Bookkeeping Assistance</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">Routine bookkeeping support within approved systems.</p>
          </div>
          <div className="border border-gray-200 p-8 flex flex-col">
            <span className="text-[#1150fb] text-4xl font-medium mb-6">02</span>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Accounts Payable<br/>Administration</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">Invoice organisation and approval-workflow preparation.</p>
          </div>
          <div className="border border-gray-200 p-8 flex flex-col">
            <span className="text-[#1150fb] text-4xl font-medium mb-6">03</span>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Accounts Receivable<br/>Administration</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">Invoice records and approved payment follow-ups.</p>
          </div>
          <div className="border border-gray-200 p-8 flex flex-col">
            <span className="text-[#1150fb] text-4xl font-medium mb-6">04</span>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Bank Reconciliation<br/>Support</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">Transaction information prepared for review.</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="border border-gray-200 flex flex-col sm:flex-row h-auto sm:h-[220px]">
            <div className="p-8 w-full sm:w-1/2 flex flex-col justify-center">
              <span className="text-[#1150fb] text-4xl font-medium mb-4">05</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expense Administration</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Organised expense records and supporting documents.</p>
            </div>
            <div className="w-full sm:w-1/2 relative min-h-[200px] sm:min-h-0 h-full">
              <Image src="/sub pages/Services/Finance & Accounting Support/Card 05 Image — Expense administration.png" alt="Expense Administration" fill className="object-cover" />
            </div>
          </div>
          
          <div className="border border-gray-200 p-8 flex flex-col justify-center h-auto sm:h-[220px]">
            <span className="text-[#1150fb] text-4xl font-medium mb-4">06</span>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Financial Data Organisation</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">Structured records, spreadsheets and information.</p>
          </div>

          <div className="border border-gray-200 flex flex-col sm:flex-row h-auto sm:h-[220px]">
            <div className="p-8 w-full sm:w-1/2 flex flex-col justify-center">
              <span className="text-[#1150fb] text-4xl font-medium mb-4">07</span>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Reporting Preparation</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">Information organised for internal reporting.</p>
            </div>
            <div className="w-full sm:w-1/2 relative min-h-[200px] sm:min-h-0 h-full">
              <Image src="/sub pages/Services/Finance & Accounting Support/Card 07 Image — Reporting preparation.png" alt="Reporting Preparation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
