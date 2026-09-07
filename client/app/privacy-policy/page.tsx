import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Talent Frontier",
  description: "Privacy policy and data handling practices for Talent Frontier.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 6, 2026";

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-zinc-950 text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <ShieldCheck className="w-12 h-12 text-blue-50" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl font-light">
            Talent Frontier respects your privacy and is committed to handling personal information responsibly and securely.
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
                1. Information We Collect
              </h2>
              <p className="leading-relaxed text-lg">
                We may collect your name, company name, job title, email address, phone number, service requirements, consultation details and information submitted through our forms or chatbot. We may also collect technical information such as your IP address, browser, device and website activity.
              </p>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                2. How We Use Your Information
              </h2>
              <p className="leading-relaxed text-lg mb-4">We may use your information to:</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {[
                  "Respond to enquiries",
                  "Understand your business requirements",
                  "Recommend and provide relevant services",
                  "Manage consultations and client relationships",
                  "Send confirmations, reminders and follow-ups",
                  "Improve our website and services",
                  "Meet legal and security obligations",
                  "Send marketing communications where permitted"
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
                3. Disclosure of Information
              </h2>
              <p className="leading-relaxed text-lg">
                We may share relevant information with trusted providers supporting our website, CRM, email, analytics, chatbot, scheduling and service delivery. We may also disclose information where required by law.
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-xl my-6">
                <p className="font-semibold text-lg text-blue-900 dark:text-blue-100">
                  We do not sell personal information.
                </p>
              </div>
              <p className="leading-relaxed text-lg">
                Some providers or team members may process information outside Australia. Where this occurs, we take reasonable steps to ensure information is handled appropriately.
              </p>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                4. Chatbot and Cookies
              </h2>
              <p className="leading-relaxed text-lg">
                Our chatbot may collect and store conversations to answer questions, manage enquiries and improve service quality. <strong className="text-slate-900 dark:text-white font-semibold">Please do not share passwords, payment details or sensitive information through the chatbot.</strong>
              </p>
              <p className="leading-relaxed text-lg">
                Our website may use cookies and analytics technologies. Further details are available in our Cookie Policy.
              </p>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                5. Security and Retention
              </h2>
              <p className="leading-relaxed text-lg">
                We use reasonable safeguards to protect personal information. Information is retained only for as long as required for business, legal or regulatory purposes.
              </p>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                6. Your Rights
              </h2>
              <p className="leading-relaxed text-lg">
                You may request access to or correction of your personal information. You may also unsubscribe from marketing communications at any time.
              </p>
            </section>

            <section className="space-y-6 pt-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                7. Contact Us
              </h2>
              <p className="leading-relaxed text-lg">
                For privacy enquiries or complaints, please reach out to us using the contact details below:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-5 mt-6">
                <div className="flex items-center p-5 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-200 dark:border-zinc-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all group/card cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mr-5 shrink-0 text-blue-600 dark:text-blue-400 group-hover/card:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-1">Email</p>
                    <a href="mailto:privacy@talentfrontier.com.au" className="font-semibold text-slate-900 dark:text-white group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors text-sm sm:text-base">privacy@talentfrontier.com.au</a>
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
