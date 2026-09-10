import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <h1 className="text-9xl font-bold text-gray-900">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
      <p className="text-gray-600 mt-4 mb-8 max-w-md">
        Oops! The page you are looking for doesn't exist, has been moved, or is temporarily unavailable.
      </p>
      <Link 
        href="/" 
        className="bg-[#1d4ed8] hover:bg-blue-600 active:bg-blue-400 active:scale-[0.98] active:brightness-110 hover:-translate-y-0.5 text-white px-8 py-3.5 rounded-lg font-semibold text-sm md:text-base transition-all duration-300 shadow-lg shadow-blue-900/50"
      >
        Return to Home
      </Link>
    </div>
  );
}
