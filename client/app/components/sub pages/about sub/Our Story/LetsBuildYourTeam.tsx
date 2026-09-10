import Link from "next/link";

export default function LetsBuildYourTeam() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4 md:px-8">
      <div className="bg-[#08154a] rounded-2xl py-12 px-6 flex flex-col items-center text-center text-white shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Let's Build Your Team
        </h2>
        <Link 
          href="/contact"
          className="inline-block bg-white text-[#08154a] font-bold py-3 px-8 rounded-sm text-sm hover:bg-gray-100 active:bg-blue-50 active:scale-[0.98] active:brightness-105 transition-all text-center shadow-md"
        >
          Talk to Our Team
        </Link>
      </div>
    </section>
  );
}
