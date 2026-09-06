export default function FromProductToCustomerSection() {
  const steps = ['List', 'Promote', 'Order', 'Coordinate', 'Improve'];

  return (
    <section className="w-full bg-white py-8 md:py-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <h2 className="text-xl sm:text-2xl font-bold text-[#0f172a] tracking-tight mb-6">
          From Product to Customer
        </h2>

        <div className="flex flex-wrap items-center gap-6 sm:gap-10 md:gap-14">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-6 sm:gap-10 md:gap-14">
              <span className="text-[#1d4ed8] font-bold text-base sm:text-lg tracking-tight">
                {step}
              </span>
              {idx < steps.length - 1 && (
                <div className="hidden sm:block w-8 md:w-12 h-[2px] bg-blue-200" />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
