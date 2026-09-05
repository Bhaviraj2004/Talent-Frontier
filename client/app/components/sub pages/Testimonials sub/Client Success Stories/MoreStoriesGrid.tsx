import Image from "next/image";

const stories = [
  {
    id: 1,
    image: "/sub pages/Testimonials/Client Success Stories/Rectangle 125.png",
    title: "Improving Finance Administration",
    category: "Finance Team",
    description: "Better record organisation and clearer routine workflows.",
  },
  {
    id: 2,
    image: "/sub pages/Testimonials/Client Success Stories/Rectangle 129.png",
    title: "Connecting Digital Workflows",
    category: "Digital Business",
    description: "More consistent information flow across approved systems.",
  },
  {
    id: 3,
    image: "/sub pages/Testimonials/Client Success Stories/Rectangle 126.png",
    title: "Strengthening Internal Coordination",
    category: "Growing Business",
    description: "Clearer responsibilities, communication and follow-up.",
  },
  {
    id: 4,
    image: "/sub pages/Testimonials/Client Success Stories/Rectangle 130.png",
    title: "Improving Finance Administration",
    category: "Process Improvement",
    description: "Simplified activities supported by practical automation.",
  },
];

export default function MoreStoriesGrid() {
  return (
    <section className="w-full max-w-7xl mx-auto py-16 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-12 text-center">
        More Client Success Stories
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stories.map((story) => (
          <div key={story.id} className="bg-white rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden flex flex-col sm:flex-row h-full">
            {/* Image side */}
            <div className="w-full sm:w-2/5 relative h-48 sm:h-auto min-h-[200px]">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover"
              />
            </div>
            {/* Content side */}
            <div className="w-full sm:w-3/5 p-6 md:p-8 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-[#1a2332] mb-2">{story.title}</h3>
              <p className="text-blue-600 text-xs font-bold mb-4">{story.category}</p>
              <p className="text-sm text-gray-700 leading-relaxed mb-6 flex-grow">
                {story.description}
              </p>
              <a href="#" className="text-blue-600 text-xs font-bold hover:underline flex items-center gap-1">
                View Success Story <span className="text-sm leading-none">→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
