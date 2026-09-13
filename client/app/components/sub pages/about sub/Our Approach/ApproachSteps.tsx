import Image from "next/image";

export default function ApproachSteps() {
  const steps = [
    {
      id: 1,
      title: "Understand Your Business",
      description: "We begin by understanding your operations, current challenges, priorities and long-term goals to establish a clear view of what your business needs.",
      image: "/sub pages/About/Our Approach/Rectangle 8.png",
      imageRight: false,
    },
    {
      id: 2,
      title: "Assess Your Requirements",
      description: "We carefully evaluate your requirements to identify the right combination of services, resources and professional expertise.",
      image: "/sub pages/About/Our Approach/Rectangle 9.png",
      imageRight: true,
    },
    {
      id: 3,
      title: "Develop the Right Solution",
      description: "Based on our assessment, we create a practical, tailored support plan aligned with your objectives, processes and expected outcomes.",
      image: "/sub pages/About/Our Approach/Rectangle 10.png",
      imageRight: false,
    },
    {
      id: 4,
      title: "Deliver with Clarity",
      description: "Our team implements the agreed solution through structured execution, clear communication and defined responsibilities at every stage.",
      image: "/sub pages/About/Our Approach/Rectangle 11.png",
      imageRight: true,
    },
    {
      id: 5,
      title: "Review the Outcomes",
      description: "We monitor progress, review performance and evaluate the results to ensure our support continues to deliver meaningful value.",
      image: "/sub pages/About/Our Approach/Rectangle 12.png",
      imageRight: false,
    },
    {
      id: 6,
      title: "Provide Ongoing Support",
      description: "As your business evolves, we adapt our services and support model to address new priorities, challenges and opportunities.",
      image: "/sub pages/About/Our Approach/Rectangle 13.png",
      imageRight: true,
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 md:px-8 space-y-12 md:space-y-20">
      {steps.map((step) => (
        <div 
          key={step.id} 
          className={`flex flex-col gap-6 md:gap-16 items-center ${
            step.imageRight ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {/* Image - Exact aspect card framing */}
          <div className="w-full md:w-1/2 relative aspect-[602/231] md:aspect-auto md:h-[260px] lg:h-[290px] rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 border border-gray-100 bg-slate-50 group cursor-pointer transition-all duration-300">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col justify-center max-w-md">
            <h3 className="text-2xl font-bold text-[#1a2332] mb-4">
              {step.title}
            </h3>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
