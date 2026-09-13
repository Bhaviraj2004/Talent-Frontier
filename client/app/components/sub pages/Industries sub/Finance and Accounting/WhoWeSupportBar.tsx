import { Calculator, BookOpen, Landmark, Users, Building2, TrendingUp } from 'lucide-react';

export default function WhoWeSupportBar() {
  const groups = [
    { title: 'Accounting Practices', icon: Calculator, desc: 'Compliance & Tax Prep' },
    { title: 'Bookkeeping Businesses', icon: BookOpen, desc: 'Ledger & Reconciliations' },
    { title: 'Financial Service Providers', icon: Landmark, desc: 'Advisory & Lending Teams' },
    { title: 'Internal Finance Teams', icon: Users, desc: 'Corporate FP&A Support' },
    { title: 'Professional Firms', icon: Building2, desc: 'Billing & Trust Accounting' },
    { title: 'Growing Businesses', icon: TrendingUp, desc: 'Operational Scale & AP/AR' },
  ];

  return (
    <section className="w-full bg-[#f4f7fb] py-8 md:py-12 border-y border-slate-200/70">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with badge */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <span className="text-[#2563eb] text-xs font-bold tracking-widest uppercase inline-block bg-blue-100/70 px-3 py-1 rounded-full mb-2">
            WHO WE SUPPORT
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0f172a] tracking-tight">
            Tailored Support Across the Financial Ecosystem
          </h3>
        </div>

        {/* 6 Modern Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 items-stretch">
          {groups.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-500 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col items-center text-center justify-between min-h-[140px]"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563eb] flex items-center justify-center mb-3 group-hover:bg-[#2563eb] group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[13px] sm:text-[14px] font-bold text-[#0f172a] group-hover:text-blue-600 transition-colors leading-snug mb-1">
                    {item.title}
                  </h4>
                  <span className="text-[11px] sm:text-[11.5px] text-[#64748b] leading-tight block">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
