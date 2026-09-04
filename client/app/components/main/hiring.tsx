import Image from 'next/image';

const CheckIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-blue-600 mt-0.5">
    <circle cx="12" cy="12" r="11" fill="currentColor"/>
    <path d="M7 12.5L10.5 16L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 text-blue-600">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Hiring() {
  return (
    <section className="bg-[#f3f7fb] py-20 px-6 md:px-12 w-full font-sans">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Image Section */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
          <Image 
            src="/main%20page/hiringmetting.png" 
            alt="Team meeting discussing hiring" 
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f172a] leading-[1.2] mb-10 tracking-tight">
            Hiring Shouldn’t Slow<br className="hidden md:block" />
            Your Business Down.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8 mb-12">
            <div className="flex items-start gap-3">
              <CheckIcon />
              <p className="text-sm md:text-base text-gray-600 font-medium leading-tight">Finding the right people takes time</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon />
              <p className="text-sm md:text-base text-gray-600 font-medium leading-tight">Hiring needs can change quickly</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon />
              <p className="text-sm md:text-base text-gray-600 font-medium leading-tight">Quality candidates can be difficult<br/>to identify</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon />
              <p className="text-sm md:text-base text-gray-600 font-medium leading-tight">Managing the process becomes<br/>complicated</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckIcon />
              <p className="text-sm md:text-base text-gray-600 font-medium leading-tight">Too much time spent screening</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mt-4">
            <ArrowRightIcon />
            <p className="text-blue-600 font-bold text-sm md:text-base max-w-md leading-snug">
              We simplify the journey from hiring requirement<br/>to the right candidate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
