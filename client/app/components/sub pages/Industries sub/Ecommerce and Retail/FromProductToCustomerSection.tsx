import { Package, Megaphone, ShoppingCart, Truck, Sparkles } from 'lucide-react';

export default function FromProductToCustomerSection() {
  const steps = [
    { num: '01', title: 'List', desc: 'Catalog & Inventory Setup', icon: Package },
    { num: '02', title: 'Promote', desc: 'Merchandising & Campaigns', icon: Megaphone },
    { num: '03', title: 'Order', desc: 'Cart Processing & Checkout', icon: ShoppingCart },
    { num: '04', title: 'Coordinate', desc: 'Fulfillment & Logistics', icon: Truck },
    { num: '05', title: 'Improve', desc: 'Returns, Reviews & Retention', icon: Sparkles },
  ];

  return (
    <section className="w-full bg-white py-10 md:py-14">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center sm:text-left mb-8">
          <span className="text-[#2563eb] text-xs font-bold tracking-widest uppercase inline-block mb-2">
            ECOMMERCE LIFECYCLE
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0f172a] tracking-tight">
            From Product to Customer
          </h2>
          <p className="text-[#64748b] text-xs sm:text-sm mt-1 max-w-xl">
            Streamlining every stage of the retail journey from catalog upload to customer delivery.
          </p>
        </div>

        {/* 5 Steps Responsive Cards with Zero Blank Holes */}
        <div className="grid grid-cols-2 sm:grid-cols-6 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className={`bg-slate-50/90 hover:bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 hover:border-blue-500 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col justify-between ${
                  idx === 4 
                    ? 'col-span-2 sm:col-span-3 lg:col-span-1' 
                    : 'col-span-1 sm:col-span-2 lg:col-span-1'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#2563eb] text-xs font-black uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md group-hover:bg-[#2563eb] group-hover:text-white transition-colors">
                    Stage {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center text-slate-500 group-hover:text-[#2563eb] group-hover:border-blue-300 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="text-[#0f172a] group-hover:text-blue-600 font-bold text-[15px] sm:text-[16px] transition-colors mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[#64748b] text-[11.5px] sm:text-[12px] leading-snug">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

