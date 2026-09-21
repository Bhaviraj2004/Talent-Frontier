import Image from 'next/image';
import Link from 'next/link';

export default function ServicesCTA() {
  return (
    <section className="w-full bg-white pb-12 md:pb-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="w-full bg-[#041133] rounded-2xl md:rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-lg">
          
          {/* Left Content */}
          <div className="w-full md:w-[50%] p-8 sm:p-10 md:p-14 lg:p-16 flex flex-col justify-center">
            <h2 className="text-[26px] sm:text-[28px] md:text-[32px] font-bold text-white mb-4 md:mb-5 tracking-tight leading-tight">
              Need a Position Not Listed Here?
            </h2>
            <p className="text-[#93c5fd] text-[14px] leading-relaxed mb-8 md:mb-10 max-w-[440px] font-medium">
              Your talent requirements may extend beyond the positions shown above. Tell us about the role, experience and capabilities you need, and our team can discuss how Talent Frontier may assist.
            </p>
            <div>
              <Link 
                href="/contact"
                className="inline-block bg-[#1d4ed8] hover:bg-blue-600 text-white px-8 py-3.5 rounded-md font-bold text-sm transition-colors shadow-lg shadow-blue-500/20 text-center w-full sm:w-auto"
              >
                Discuss Your Hiring Requirement
              </Link>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="w-full md:w-[50%] relative min-h-[220px] aspect-[643/426] md:aspect-auto md:min-h-full">
            <Image 
              src="/Services page/Rectangle 16.png" 
              alt="Support team" 
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Soft gradient fade on the left side of the image to blend with background */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#041133] to-transparent hidden md:block"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
