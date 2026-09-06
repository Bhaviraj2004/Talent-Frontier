import Link from "next/link";

export default function LetsBuildYourTeam() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8">
      <div className="bg-blue-600 rounded-2xl py-12 px-6 flex flex-col items-center text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Let's Build Your Team
        </h2>
        <Link 
          href="/contact"
          className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-sm text-sm hover:bg-gray-100 transition duration-300 text-center"
        >
          Talk to Our Team
        </Link>
      </div>
    </section>
  );
}
