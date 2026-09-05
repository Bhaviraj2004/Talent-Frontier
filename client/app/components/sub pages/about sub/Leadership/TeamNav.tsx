import Image from 'next/image';

export default function TeamNav() {
  return (
    <section className="w-full flex flex-col items-center mt-12 mb-20">
      <div className="w-full h-[300px] md:h-[450px] relative">
        <Image
          src="/sub pages/About/Leadership/Rectangle 37.png"
          alt="Our Team"
          fill
          className="object-cover"
        />
      </div>
      <div className="w-full max-w-4xl mx-auto mt-6 px-6">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 text-center">
          <div className="px-6 md:px-10 py-2 w-full md:w-auto">
            <span className="font-bold text-[#0a192f] text-sm md:text-base">Leadership</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-300"></div>
          <div className="px-6 md:px-10 py-2 w-full md:w-auto">
            <span className="font-medium text-gray-500 hover:text-[#0a192f] transition-colors cursor-pointer text-sm md:text-base">Client Success Team</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-gray-300"></div>
          <div className="px-6 md:px-10 py-2 w-full md:w-auto">
            <span className="font-medium text-gray-500 hover:text-[#0a192f] transition-colors cursor-pointer text-sm md:text-base">Service Delivery Team</span>
          </div>
        </div>
      </div>
    </section>
  );
}
