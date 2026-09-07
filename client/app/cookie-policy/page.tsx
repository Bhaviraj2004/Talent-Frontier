import { Cookie, ShieldCheck, Settings2, BarChart3, Megaphone, Mail, Phone, Settings } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Talent Frontier",
  description: "Learn about how Talent Frontier uses cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  const lastUpdated = "September 6, 2026";

  const cookieTypes = [
    {
      title: "Necessary Cookies",
      description: "Required for website security, navigation, forms and basic functionality.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Preference Cookies",
      description: "Remember selected settings and improve your browsing experience.",
      icon: <Settings2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Analytics Cookies",
      description: "Help us understand website traffic, page performance and visitor behaviour.",
      icon: <BarChart3 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    },
    {
      title: "Marketing Cookies",
      description: "May be used to measure campaigns or provide more relevant communications where permitted and consented to.",
      icon: <Megaphone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-900 dark:to-zinc-950 text-white py-20 px-6 sm:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm shadow-lg">
            <Cookie className="w-12 h-12 text-blue-50" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Cookie Policy
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl font-light">
            Talent Frontier uses cookies and similar technologies to operate, secure and improve its website.
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
                1. What Are Cookies?
              </h2>
              <p className="leading-relaxed text-lg">
                Cookies are small files stored on your device when you visit a website. They help websites function properly, remember preferences and understand how visitors interact with content.
              </p>
            </section>

            <section className="space-y-6 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                2. Cookies We May Use
              </h2>
              <div className="grid sm:grid-cols-2 gap-5 mt-4">
                {cookieTypes.map((cookie, index) => (
                  <div key={index} className="p-5 bg-slate-50 dark:bg-zinc-800/50 rounded-2xl border border-slate-100 dark:border-zinc-700 hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4">
                      {cookie.icon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{cookie.title}</h3>
                    <p className="text-slate-600 dark:text-zinc-400">{cookie.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                3. Third-Party Services
              </h2>
              <p className="leading-relaxed text-lg">
                Third-party providers supporting analytics, maps, chatbot functionality, consultation booking or marketing may place cookies on your device. These providers manage information according to their own privacy policies.
              </p>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                4. Managing Cookies
              </h2>
              <p className="leading-relaxed text-lg">
                You can accept, reject or adjust non-essential cookies through our cookie settings where available. You can also manage or delete cookies through your browser.
              </p>
              <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-5 rounded-r-xl my-4">
                <p className="font-medium text-lg text-amber-900 dark:text-amber-200">
                  Disabling certain cookies may affect website functionality.
                </p>
              </div>
              <div className="pt-2">
                <Link href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-sm transition-colors group/button">
                  <Settings className="w-5 h-5 mr-2 group-hover/button:rotate-90 transition-transform" />
                  Manage Cookie Settings
                </Link>
              </div>
            </section>

            <section className="space-y-4 group">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                5. Updates
              </h2>
              <p className="leading-relaxed text-lg">
                We may update this Cookie Policy when our website, technologies or legal requirements change.
              </p>
            </section>

            <section className="space-y-6 pt-6">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white border-b border-slate-100 dark:border-zinc-800 pb-2">
                6. Contact Us
              </h2>
              <p className="leading-relaxed text-lg">
                For questions about our use of cookies, contact:
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
              </div>
            </section>
            
          </div>
        </div>
      </div>
    </main>
  );
}
