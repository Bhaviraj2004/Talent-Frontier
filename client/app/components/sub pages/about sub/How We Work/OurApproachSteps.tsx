export default function OurApproachSteps() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      subtitle: "Understanding Your Business",
      description:
        "We begin by learning about your organisation, your objectives, team environment and the capabilities you need. This helps us understand not just what you are looking for, but what success in the role looks like within your business.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      imageRight: false,
    },
    {
      num: "02",
      title: "Define",
      subtitle: "Creating the Right Profile",
      description:
        "We develop a clear understanding of the experience, capabilities and qualities that align with your requirements. We consider professional experience, technical skills, communication, aspirations and cultural alignment to create a well-rounded profile.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      imageRight: true,
    },
    {
      num: "03",
      title: "Identify",
      subtitle: "Connecting With Relevant Talent",
      description:
        "Using our professional network, market knowledge and targeted search approach, we identify professionals whose experience and aspirations align with your organisation. Our focus is on relevance and quality — not simply providing a long list of profiles.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80",
      imageRight: false,
    },
    {
      num: "04",
      title: "Assess",
      subtitle: "Looking Beyond the CV",
      description:
        "Experience on paper is only part of the picture. We consider relevant experience, capabilities, communication, professional goals and overall alignment to ensure the professionals we introduce are relevant to your requirements.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
      imageRight: true,
    },
    {
      num: "05",
      title: "Connect",
      subtitle: "Meet the Person Behind the Profile",
      description:
        "We facilitate introductions and conversations between you and suitable professionals. This gives you the opportunity to explore their experience, understand their approach and determine whether the connection feels right for your organisation. The final decision always remains with you.",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
      imageRight: false,
    },
    {
      num: "06",
      title: "Transition",
      subtitle: "Supporting the Next Step",
      description:
        "Once both sides decide to move forward, we help coordinate the next steps and maintain clear communication throughout the transition. Our support can continue beyond the initial introduction, helping establish a strong foundation for the relationship.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      imageRight: true,
    },
  ];

  return (
    <section className="w-full bg-[#f4f7fb] py-16 sm:py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-16 md:mb-20">
          <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-3">
            STRUCTURED PROCESS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-[#1a2332] tracking-tight">
            Our Approach
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-16 md:space-y-24">
          {steps.map((step) => (
            <div
              key={step.num}
              className={`flex flex-col gap-8 md:gap-16 items-center ${
                step.imageRight ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative aspect-[602/380] md:aspect-auto md:h-[300px] lg:h-[340px] rounded-2xl md:rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1 border border-gray-100 bg-white group cursor-pointer transition-all duration-300">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text Content */}
              <div className="w-full md:w-1/2 flex flex-col justify-center max-w-lg">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-[#2563eb] text-white text-sm font-bold rounded-xl shadow-md shadow-blue-500/20">
                    {step.num}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent"></div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#1a2332] mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-4">
                  {step.subtitle}
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
