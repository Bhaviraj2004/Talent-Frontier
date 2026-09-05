export default function ClientPerspective() {
  return (
    <section className="w-full bg-[#f4f7fb] py-16 px-4 md:px-8 text-center border-t border-gray-200 mt-8">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1a2332] mb-4">
        The Client Perspective
      </h2>
      <div className="w-16 h-0.5 bg-blue-600 mx-auto mb-6"></div>
      
      <p className="text-blue-600 text-lg md:text-xl font-medium mb-6">
        [Approved client feedback will appear here.]
      </p>
      
      <p className="text-xs text-gray-600">
        Client identity and feedback are displayed only with permission.
      </p>
    </section>
  );
}
