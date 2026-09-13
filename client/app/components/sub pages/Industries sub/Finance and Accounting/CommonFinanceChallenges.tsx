import { TrendingUp, FolderArchive, Clock, GitFork, EyeOff } from 'lucide-react';

export default function CommonFinanceChallenges() {
  const challenges = [
    { title: 'Increasing Transactions', desc: 'Overwhelming volume during month-end surges', icon: TrendingUp },
    { title: 'Disorganised Records', desc: 'Incomplete receipts and scattered source files', icon: FolderArchive },
    { title: 'Delayed Invoices', desc: 'Sluggish billing and late accounts payable cycles', icon: Clock },
    { title: 'Inconsistent Workflows', desc: 'Non-standardized manual spreadsheet tracking', icon: GitFork },
    { title: 'Limited Visibility', desc: 'Lack of real-time cash flow & budget transparency', icon: EyeOff },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a1835] rounded-[24px] md:rounded-[32px] p-6 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 relative z-10">
            <span className="text-blue-400 text-xs font-bold tracking-widest uppercase inline-block mb-2">
              OPERATIONAL BOTTLENECKS
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Common Finance Challenges
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2">
              The everyday friction points that slow down finance teams and obscure cash flow clarity.
            </p>
          </div>

          {/* 5 Cards Balanced Responsive Layout:
              - Mobile: 2x2 cards + 5th card spans full width (col-span-2)
              - Tablet: 3 cards in row 1, 2 cards in row 2 (sm:grid-cols-6)
              - Desktop: 5 cards in 1 row (lg:grid-cols-5)
          */}
          <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {challenges.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white/[0.07] hover:bg-white/[0.14] border border-white/10 hover:border-blue-400/50 rounded-2xl p-4 sm:p-5 flex flex-col items-center text-center justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-pointer ${
                    idx === 4 
                      ? 'col-span-2 sm:col-span-3 lg:col-span-1' 
                      : 'col-span-1 sm:col-span-2 lg:col-span-1'
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-300 flex items-center justify-center mb-3 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-[13.5px] sm:text-[14.5px] leading-snug mb-1 group-hover:text-blue-200 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-300 text-[11px] sm:text-[12px] leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
