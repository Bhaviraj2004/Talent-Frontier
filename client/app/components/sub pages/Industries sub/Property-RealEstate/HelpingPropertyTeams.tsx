import Image from 'next/image';

export default function HelpingPropertyTeams() {
  return (
    <section className="w-full py-20 font-sans bg-white">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left: Text */}
        <div className="flex-1 max-w-lg">
          <div className="w-8 h-1 bg-blue-600 mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-6 leading-tight">
            Helping Property<br />Teams Stay Organised
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            We provide reliable operational support that helps property professionals keep things moving.
          </p>
        </div>

        {/* Right: Image */}
        <div className="flex-1 w-full relative min-h-[350px] md:min-h-[400px] rounded-3xl overflow-hidden shadow-sm">
          <Image 
            src="/sub pages/Industries/Property & Real Estate/Image placeholder – Property team reviewing plans.png" 
            alt="Team reviewing plans" 
            fill 
            className="object-cover" 
          />
        </div>

      </div>
    </section>
  );
}
