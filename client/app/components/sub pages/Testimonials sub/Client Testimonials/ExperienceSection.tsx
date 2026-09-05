export default function ExperienceSection() {
  const experiences = [
    {
      title: "Responsive",
      description: "Clear communication.",
    },
    {
      title: "Organised",
      description: "Defined workflows.",
    },
    {
      title: "Collaborative",
      description: "Working alongside your team.",
    },
    {
      title: "Adaptable",
      description: "Support that evolves.",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8">
      <div className="bg-[#f4f7fb] rounded-xl py-12 px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-12">
          The Experience We Aim to Deliver
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col items-center pt-6 sm:pt-0">
              <h3 className="text-xl font-bold text-[#1a2332] mb-2">{exp.title}</h3>
              <p className="text-sm text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
