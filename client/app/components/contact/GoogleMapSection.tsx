import { MapPin, Navigation, Clock, Mail } from 'lucide-react';

export default function GoogleMapSection() {
  const address = "650 Nicholson Street Fitzroy North VIC 3068, Australia";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <section className="w-full bg-[#f8fafc] pb-20 sm:pb-28 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-8 sm:mb-10">
          <p className="text-[#3b82f6] font-bold text-xs md:text-sm tracking-widest uppercase mb-2">
            LOCATION &amp; DIRECTIONS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0f172a] tracking-tight mb-3">
            Visit Our Melbourne Office
          </h2>
          <p className="text-[#64748b] text-sm md:text-base max-w-xl font-medium">
            Conveniently located in Fitzroy North. Our team is available for scheduled in-person consultations and strategic briefings.
          </p>
        </div>

        {/* Map & Card Container */}
        <div className="relative w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-white">
          
          {/* Interactive Google Map */}
          <div className="w-full h-[380px] sm:h-[460px] md:h-[520px] relative bg-slate-100">
            <iframe
              title="Talent Frontier Melbourne Location"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[0.95] contrast-[1.02]"
            />
          </div>

          {/* Location Details Card */}
          <div className="md:absolute md:top-6 md:left-6 md:max-w-[380px] w-full bg-white/95 md:backdrop-blur-md p-6 sm:p-7 md:rounded-2xl border-t md:border border-slate-200 shadow-lg flex flex-col gap-4">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563eb] shrink-0 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-bold text-blue-600 tracking-wider uppercase">Headquarters</span>
                <h3 className="text-[16px] font-bold text-[#0f172a] leading-snug">Talent Frontier Australia</h3>
                <p className="text-[13px] text-slate-600 font-medium mt-1 leading-relaxed">
                  650 Nicholson Street, Fitzroy North<br />VIC 3068, Australia
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-3 border-t border-slate-100 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Monday – Friday: 9:00 AM – 5:30 PM AEST</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <a href="mailto:admin@talentfrontier.com.au" className="hover:text-blue-600 transition-colors">
                  admin@talentfrontier.com.au
                </a>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 w-full bg-[#1d4ed8] hover:bg-blue-700 active:scale-[0.98] text-white py-3 px-4 rounded-xl font-bold text-xs sm:text-[13px] flex items-center justify-center gap-2 transition-all duration-200 shadow-md shadow-blue-500/20"
            >
              <Navigation className="w-4 h-4" />
              Open in Google Maps
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
