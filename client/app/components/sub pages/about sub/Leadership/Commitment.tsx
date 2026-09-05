export default function Commitment() {
  const commitments = [
    {
      title: 'Clear Communication',
      description: 'We keep you informed every step of the way.'
    },
    {
      title: 'Transparency',
      description: 'We are open, honest and straightforward in everything we do'
    },
    {
      title: 'Service Quality',
      description: 'We are committed to delivering high standards and great experiences'
    },
    {
      title: 'Accountability',
      description: 'We take ownership and do what we say we will do.'
    }
  ];

  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0a192f] mb-12 text-center">
          Our Commitment to Clients
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {commitments.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-8 border border-gray-200 rounded-[20px] bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-[#0a192f] mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
