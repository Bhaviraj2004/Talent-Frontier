import Image from "next/image";

export default function HaveYouWorked() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8 mb-16">
      <div className="bg-[#f4f7fb] rounded-3xl overflow-hidden flex flex-col md:flex-row items-center border border-gray-100">
        {/* Left Content */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col items-start justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-6 leading-tight max-w-sm">
            Have You Worked With Talent Frontier?
          </h2>
          <p className="text-gray-600 mb-8 max-w-sm text-sm md:text-base leading-relaxed">
            Your feedback helps us improve the way we support your businesses.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-sm transition duration-300 mb-3 text-sm">
            Submit Your Feedback
          </button>
          <p className="text-xs text-gray-500">
            Feedback is published only with written approval.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[400px]">
          {/* Using Rectangle 99.png as it seems to match the style of the "Have you worked with..." image from the screenshot */}
          <div className="absolute inset-4 md:inset-8 rounded-3xl overflow-hidden">
             <Image
              src="/sub pages/Testimonials/Rectangle 97.png" // Falling back to 97 as 99 is already used above. In a real app we might have a specific image. Let's use 99 since the screenshot shows a similar one, or 97. Actually, let's use 97 for variety or 99. Wait, the screenshot shows the same woman and a guy. Let's use Rectangle 97 or maybe there is another image. Oh, wait, the design shows a woman and a guy, different from others. Let's use Rectangle 97 as placeholder.
              alt="Client Feedback"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
