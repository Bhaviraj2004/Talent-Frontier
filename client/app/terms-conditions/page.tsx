import { Scale, Mail, Phone, MapPin, AlertCircle } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions | Talent Frontier",
  description: "Website terms and conditions for using Talent Frontier services.",
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "September 6, 2026";

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-zinc-950 text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <Scale className="w-12 h-12 text-blue-50" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Website Terms and Conditions
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl font-light">
            By accessing the Talent Frontier website, you agree to these Terms and Conditions.
          </p>
          <div className="mt-8 inline-flex items-center px-4 py-2 rounded-full bg-black/20 text-sm font-medium text-blue-100 backdrop-blur-md">
            Last updated: {lastUpdated}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 -mt-10 relative z-10">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-100 dark:border-zinc-800 p-8 md:p-12">
          
          <div className="space-y-12 text-slate-700 dark:text-zinc-300">
            
            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                1. Website Information
              </h2>
              <p className="leading-relaxed text-lg">
                This website provides general information about Talent Frontier and its services. It does not constitute legal, financial, taxation or other professional advice.
              </p>
              <p className="leading-relaxed text-lg">
                Service availability, scope, fees, responsibilities and timelines will be confirmed separately through a proposal, engagement letter or service agreement.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-xl my-4">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 mr-3 shrink-0 mt-0.5" />
                  <p className="font-semibold text-lg text-blue-900 dark:text-blue-100">
                    Submitting an enquiry, using our chatbot or booking a consultation does not automatically create a client relationship.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                2. No Guaranteed Outcomes
              </h2>
              <p className="leading-relaxed text-lg">
                Talent Frontier provides professional and practical business support. However, we do not guarantee specific commercial, financial, operational or marketing outcomes unless expressly stated in a written agreement.
              </p>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                3. Acceptable Use
              </h2>
              <p className="leading-relaxed text-lg mb-4">You must not:</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Use the website for unlawful or fraudulent purposes",
                  "Submit false or misleading information",
                  "Attempt to access restricted systems",
                  "Introduce viruses or harmful technology",
                  "Copy or commercially use our content without permission",
                  "Interfere with website security or functionality"
                ].map((item, i) => (
                  <li key={i} className="flex items-start bg-slate-50 dark:bg-zinc-800/50 p-4 rounded-xl border border-slate-100 dark:border-zinc-700/50 hover:shadow-md transition-shadow">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-3 shrink-0"></div>
                    <span className="font-medium text-slate-800 dark:text-zinc-200">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                4. Intellectual Property
              </h2>
              <p className="leading-relaxed text-lg">
                Unless otherwise stated, all website content, branding, graphics and materials belong to Talent Frontier or are used with permission. They may not be reproduced or distributed without written authorisation.
              </p>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                5. Third-Party Services
              </h2>
              <p className="leading-relaxed text-lg">
                Our website may contain links to external platforms, booking systems or service providers. Talent Frontier is not responsible for their content, availability, security or privacy practices.
              </p>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                6. Liability
              </h2>
              <p className="leading-relaxed text-lg">
                To the extent permitted by law, Talent Frontier is not liable for loss arising from reliance on general website information, website interruptions or third-party services.
              </p>
              <p className="leading-relaxed text-lg">
                Nothing in these Terms excludes rights that cannot legally be excluded, including rights under the Australian Consumer Law where applicable.
              </p>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                7. Governing Law
              </h2>
              <p className="leading-relaxed text-lg">
                These Terms are governed by the laws of New South Wales, Australia.
              </p>
            </section>

            <section className="space-y-6 pt-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                8. Contact Us
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-5 mt-6">
                <div className="flex items-center p-5 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-200 dark:border-zinc-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all group/card cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-5 shrink-0 text-blue-600 dark:text-blue-400 group-hover/card:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1">Email</p>
                    <a href="mailto:contact@talentfrontier.com.au" className="font-semibold text-slate-900 dark:text-white group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors text-sm sm:text-base">contact@talentfrontier.com.au</a>
                  </div>
                </div>
                
                <div className="flex items-center p-5 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-200 dark:border-zinc-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all group/card cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-5 shrink-0 text-blue-600 dark:text-blue-400 group-hover/card:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1">Phone</p>
                    <a href="tel:+61XXXXXXXXX" className="font-semibold text-slate-900 dark:text-white group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors text-sm sm:text-base">+61 XXX XXX XXX</a>
                  </div>
                </div>

                <div className="flex items-center p-5 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-200 dark:border-zinc-700 sm:col-span-2 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all group/card cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-5 shrink-0 text-blue-600 dark:text-blue-400 group-hover/card:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1">Address</p>
                    <p className="font-semibold text-slate-900 dark:text-white text-sm sm:text-base">Talent Frontier, Sydney, NSW, Australia</p>
                  </div>
                </div>
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </main>
  );
}
