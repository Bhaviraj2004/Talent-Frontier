import Image from 'next/image';

const points = [
  { title: "Built Around Your Requirements", desc: "We take the time to understand your business and hiring needs." },
  { title: "Quality Over Quantity", desc: "We focus on quality candidates who match your role and culture." },
  { title: "Transparent Process", desc: "You're kept informed at every stage of the recruitment journey." },
  { title: "Dedicated Support", desc: "Our team is here to support you before, during and after the hire." },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0">
    <circle cx="12" cy="12" r="10" fill="currentColor"/>
    <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0b1121] py-24 px-6 w-full font-sans text-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative w-full aspect-[16/9] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
          <Image src="/main%20page/teamdiscussion.png" alt="Team Discussion" fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight">Why Businesses Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {points.map((p, i) => (
              <div key={i} className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-50">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
