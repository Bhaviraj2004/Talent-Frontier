import Image from 'next/image';

export default function MeetThePeople() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 flex flex-col items-start space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a192f] leading-tight">
            Meet the People <br /> Behind Our Business
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-md">
            Our leadership team brings deep industry expertise, commercial insight and a people-first mindset to every partnership. We are committed to delivering exceptional outcomes with integrity and care.
          </p>
          <button className="bg-[#0047FF] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors text-sm">
            Tell Us What You Need
          </button>
        </div>
        <div className="w-full md:w-1/2 relative h-[350px] md:h-[450px]">
          <div className="absolute inset-0 rounded-[32px] overflow-hidden">
            <Image
              src="/sub pages/About/Leadership/Rectangle 17.png"
              alt="People Behind Our Business"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
