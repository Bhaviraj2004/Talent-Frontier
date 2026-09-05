export default function ImportantServiceBoundaries() {
  return (
    <section className="w-full bg-[#f4f7fe] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 md:gap-8 justify-between">
        <div className="w-full md:w-[22%]">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            Important<br />Service Boundaries
          </h2>
        </div>
        <div className="w-full md:w-[30%]">
          <p className="text-gray-800 text-[15px] leading-relaxed">
            The following services should only be offered where
            appropriate capability and registration are
            available.
          </p>
        </div>
        <div className="w-full md:w-[20%]">
          <ul className="text-gray-800 text-[15px] space-y-3 font-medium">
            <li>Tax advice</li>
            <li>Financial advice</li>
            <li>Auditing</li>
            <li>Statutory reporting</li>
          </ul>
        </div>
        <div className="w-full md:w-[28%]">
          <ul className="text-gray-800 text-[15px] space-y-3 font-medium">
            <li>BAS-agent services</li>
            <li>Tax-agent services</li>
            <li>Independent financial approvals</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
