"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Clock, 
  Link2,
  ArrowRight,
  Mail
} from "lucide-react";
import { FiLinkedin, FiFacebook } from "react-icons/fi";

export default function HardBlogPage() {
  return (
    <div className="bg-[#f8fafd] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-[#0b162c] text-white pt-24 pb-32 px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="flex items-center text-sm text-gray-400 mb-8 space-x-2">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-gray-200">Processes Ready for Automation</span>
            </div>

            <div className="inline-flex items-center space-x-2 bg-blue-900/40 border border-blue-800 rounded-full px-4 py-1.5 mb-8">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              <span className="text-xs font-semibold text-blue-200 uppercase tracking-wider">Technology & Automation</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Identifying Processes <span className="text-blue-300">Ready for Automation</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl">
              Pinpoint rule-based workflows ready for immediate efficiency gains.
            </p>

            <div className="flex flex-wrap items-center text-sm text-gray-400 gap-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shadow-md">
                  TF
                </div>
                <span className="text-gray-200">Talent Frontier Insights</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Sept 5, 2026</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[300px] sm:h-[400px] border border-gray-800/50">
            <Image 
              src="/hardblog/Screenshot 2026-09-06 075051.png" 
              alt="Team discussing workflow" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4">
              <span className="bg-white/10 backdrop-blur-md text-white/90 text-xs px-3 py-1.5 rounded-md border border-white/20 shadow-sm">
                Australian Corporate Advisory
              </span>
            </div>
            <div className="absolute bottom-4 right-4">
              <span className="text-white/80 text-xs italic tracking-wide">
                Strategy & Workflow Review
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Article */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 lg:p-12 shadow-sm border border-gray-100">
            <p className="text-lg md:text-xl text-gray-700 font-medium mb-10 leading-relaxed">
              In an era where operational speed defines competitive advantage, Australian enterprises must balance headcount efficiency with capital discipline. Attempting to automate an undocumented or broken process simply accelerates errors. The most successful organizations master disciplined process qualification first, ensuring automation delivers measurable leverage rather than unexpected overhead.
            </p>

            <h2 id="why-process-selection-matters" className="text-2xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24">
              Why Process Selection Matters
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Workflow automation should redeploy specialized talent toward high-leverage business growth. When senior team members spend significant hours extracting statements, reconciling invoices across disconnected spreadsheets, or manually updating CRM entries, strategic momentum inevitably stalls. Selecting the right workflows transforms direct labor costs into rapid capacity without disruptive organizational shifts.
            </p>

            <div className="border-l-4 border-blue-500 bg-[#f8fafe] p-8 rounded-r-2xl my-10">
              <p className="text-gray-800 italic text-lg lg:text-xl mb-6 font-medium">
                "Automation delivers peak ROI when applied to standardized, high-frequency workflows—freeing internal capability for proactive client stewardship."
              </p>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-wider flex items-center">
                <span className="w-4 h-[2px] bg-blue-500 mr-2"></span> TALENT FRONTIER STRATEGIC ADVISORY
              </p>
            </div>

            <h2 id="signs-of-automation-readiness" className="text-2xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24">
              Signs of Automation Readiness
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Before committing technical resources, evaluate candidate workflows against three foundational operational signals: deterministic logic, high transaction volume, and susceptibility to fatigue.
            </p>

            <div className="space-y-6 mb-12">
              <div className="bg-[#f8fafd] rounded-2xl p-8 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900 font-bold">Deterministic Rule-Based Logic:</strong> Ideal candidates operate on structured, reproducible rules where an input predictably dictates an outcome. If a process requires minimal subjective discretion and can be clearly expressed through clear condition branches, software bots or integrations can reliably handle execution end-to-end.
                </p>
              </div>
              <div className="bg-[#f8fafd] rounded-2xl p-8 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900 font-bold">High Transactional Volume:</strong> Prioritize recurring daily or weekly queues where cumulative minutes saved compound into substantial direct labor savings. Minor efficiency gains repeated thousands of times yield immediate payback periods and substantial margin improvements.
                </p>
              </div>
              <div className="bg-[#f8fafd] rounded-2xl p-8 border border-gray-100">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-gray-900 font-bold">High Vulnerability to Fatigue:</strong> Repetitive copy-paste operations across disparate systems inevitably generate human data-entry mistakes. Automating these sensitive handoffs eliminates costly reconciliation cycles, speeds up turnaround times, and maintains immaculate audit fidelity.
                </p>
              </div>
            </div>

            <h2 id="evaluating-the-process" className="text-2xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24">
              Evaluating the Process Before Digitization
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Thorough process qualification requires meeting essential infrastructure prerequisites. The candidate task should rely on structured, uniform data inputs such as predictable digital forms, clear schemas, or standardized spreadsheets. When incoming records vary wildly in format, preliminary data hygiene must happen before automated processing begins.
            </p>
            <p className="text-gray-600 mb-12 leading-relaxed text-lg">
              Equally critical is a low exception rate, typically under ten percent. When exceptions stay rare, standard operating procedures easily document the edge cases. Furthermore, stable software environments ensure scripts and API connections continue running smoothly without breaking during routine user interface changes.
            </p>

            <h2 id="when-to-preserve-human-stewardship" className="text-2xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24">
              When to Preserve Human Stewardship
            </h2>
            <p className="text-gray-600 mb-12 leading-relaxed text-lg">
              Not every operational touchpoint benefits from automation. While back-office invoice extraction, credential issuance, and system-to-system syncing thrive under automated rules, customer-centric interactions demand nuanced emotional intelligence. Complex client grievance resolutions, sensitive commercial negotiations, and volatile processes undergoing frequent strategic redesign should remain squarely in the hands of skilled human operators.
            </p>

            <h2 id="building-a-practical-roadmap" className="text-2xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-24">
              Building a Practical Implementation Roadmap
            </h2>
            <p className="text-gray-600 mb-16 leading-relaxed text-lg">
              Sustainable automation begins with a disciplined pilot program. Identify one high-confidence, low-complexity bottleneck, map its steps with precision, standardize the underlying documentation, and measure performance gains against baseline manual hours. By establishing clarity before code, businesses build a compounding capability that scales seamlessly alongside company growth.
            </p>

            <div className="border-t border-gray-100 pt-10">
              <div className="flex flex-wrap items-center gap-3 mb-10">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mr-2">Topics:</span>
                <span className="px-5 py-2 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold hover:bg-gray-200 transition cursor-pointer">Operations</span>
                <span className="px-5 py-2 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold hover:bg-gray-200 transition cursor-pointer">Optimization</span>
                <span className="px-5 py-2 bg-gray-100 text-gray-600 rounded-full text-xs font-semibold hover:bg-gray-200 transition cursor-pointer">RPA & AI</span>
              </div>

              <div className="border border-gray-100 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#fcfdfe]">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md relative overflow-hidden">
                  <Image src="/logo.png" alt="Talent Frontier Logo" fill className="object-contain p-2" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Talent Frontier Insights</h4>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    Practical perspectives on business operations, talent offshore integration, and sustainable workforce scalability across Australia.
                  </p>
                  <Link href="#" className="text-blue-600 text-sm font-bold hover:text-blue-700 flex items-center transition-colors">
                    View all author insights <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              {/* On This Page Nav */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider flex items-center">
                  <span className="w-4 h-[2px] bg-blue-500 mr-2"></span> ON THIS PAGE
                </h3>
                <span className="text-xs text-gray-400 font-bold uppercase tracking-wider">5 SECTIONS</span>
              </div>
              <ul className="space-y-4 text-sm font-medium text-gray-500">
                <li><Link href="#why-process-selection-matters" className="hover:text-blue-600 transition-colors block">Why Process Selection Matters</Link></li>
                <li><Link href="#signs-of-automation-readiness" className="hover:text-blue-600 transition-colors block">Signs of Automation Readiness</Link></li>
                <li><Link href="#evaluating-the-process" className="hover:text-blue-600 transition-colors block">Evaluating the Process</Link></li>
                <li><Link href="#when-to-preserve-human-stewardship" className="hover:text-blue-600 transition-colors block">When to Preserve Human Stewardship</Link></li>
                <li><Link href="#building-a-practical-roadmap" className="hover:text-blue-600 transition-colors block">Building a Practical Roadmap</Link></li>
              </ul>
            </div>

            {/* CTA Card */}
            <div className="bg-[#0b162c] rounded-2xl p-8 text-white relative overflow-hidden shadow-xl border border-blue-900/50">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl transform translate-x-10 -translate-y-10"></div>
              <div className="relative z-10">
                <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">Need Expert Support?</h4>
                <h3 className="text-xl font-bold mb-4 leading-tight">Ready to Improve Your Business Processes?</h3>
                <p className="text-gray-300 text-sm mb-8 leading-relaxed opacity-90">
                  Speak with Talent Frontier about practical technology, dedicated teams, and automation solutions tailored directly to your operational priorities.
                </p>
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md flex items-center justify-center">
                  Discuss Your Requirements <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>

            {/* Share */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-6">Share this insight</h4>
              <div className="flex flex-wrap items-center gap-3">
                <button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors border border-gray-100">
                  <FiLinkedin className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors border border-gray-100">
                  <FiFacebook className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 transition-colors border border-gray-100">
                  <span className="font-bold text-sm">X</span>
                </button>
                <button className="flex-1 min-w-[120px] bg-gray-50 hover:bg-gray-100 text-gray-700 text-sm font-semibold py-2.5 px-4 rounded-xl flex items-center justify-center transition-colors border border-gray-100">
                  <Link2 className="w-4 h-4 mr-2" /> Copy Link
                </button>
              </div>
            </div>
            </div>
          </div>

        </div>
      </section>

      {/* Related Insights */}
      <section className="bg-white border-t border-gray-100 py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3 block">Explore More Knowledge</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Related Insights</h2>
            </div>
            <Link href="#" className="text-blue-600 text-sm font-bold hover:text-blue-700 flex items-center mt-6 md:mt-0 transition-colors">
              View all insights <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
              <div className="h-52 relative overflow-hidden bg-gray-100">
                <Image 
                  src="/hardblog/Two executives discussing financial administration in an office meeting.png" 
                  alt="Finance & Operations" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs font-bold mb-5 tracking-wide">
                  <span className="text-blue-600 uppercase">Finance & Operations</span>
                  <span className="text-gray-400 font-medium">5 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  Building More Consistent Financial Administration Processes
                </h3>
                <p className="text-gray-600 text-sm mb-8 line-clamp-3 leading-relaxed">
                  Practical steps to organize recurring financial activities, streamline documentation, and allocate clear responsibilities
                </p>
                <div className="mt-auto pt-5 border-t border-gray-100">
                  <Link href="#" className="text-blue-600 text-sm font-bold hover:text-blue-700 flex items-center transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
              <div className="h-52 relative overflow-hidden bg-gray-100">
                <Image 
                  src="/hardblog/Background.png" 
                  alt="Business Insights" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs font-bold mb-5 tracking-wide">
                  <span className="text-blue-600 uppercase">Business Insights</span>
                  <span className="text-gray-400 font-medium">7 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  Five Signs Your Business Processes Need More Structure
                </h3>
                <p className="text-gray-600 text-sm mb-8 line-clamp-3 leading-relaxed">
                  Understand how inconsistent processes disrupt daily communication, drain productivity, and compromise...
                </p>
                <div className="mt-auto pt-5 border-t border-gray-100">
                  <Link href="#" className="text-blue-600 text-sm font-bold hover:text-blue-700 flex items-center transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
              <div className="h-52 relative overflow-hidden bg-gray-100">
                <Image 
                  src="/hardblog/Futuristic digital network sphere symbolizing business scaling and automation.png" 
                  alt="Technology & Automation" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center justify-between text-xs font-bold mb-5 tracking-wide">
                  <span className="text-blue-600 uppercase">Technology & Automation</span>
                  <span className="text-gray-400 font-medium">6 min read</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  Preparing Your Finance Processes for Scalable Business Growth
                </h3>
                <p className="text-gray-600 text-sm mb-8 line-clamp-3 leading-relaxed">
                  Establish foundational data integrity, automated reconciliation workflows, and robust audit trails to handle...
                </p>
                <div className="mt-auto pt-5 border-t border-gray-100">
                  <Link href="#" className="text-blue-600 text-sm font-bold hover:text-blue-700 flex items-center transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#f2f7fd] border border-blue-100/50 rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col xl:flex-row items-center justify-between gap-10">
            <div className="flex flex-col md:flex-row items-center md:items-start xl:items-center gap-8 text-center md:text-left">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-50 flex items-center justify-center flex-shrink-0">
                <Mail className="w-10 h-10 text-blue-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Business Insights Delivered to Your Inbox</h3>
                <p className="text-gray-600 text-lg">Subscribe for curated frameworks and advisory articles. Review our <Link href="#" className="underline hover:text-gray-900 transition-colors">Privacy Policy</Link>.</p>
              </div>
            </div>
            
            <div className="w-full xl:w-auto flex-shrink-0">
              <form className="flex flex-col sm:flex-row gap-4 w-full" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Business Email Address" 
                  className="px-6 py-4 rounded-xl border border-gray-200 w-full sm:w-[320px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base shadow-sm"
                  required
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg whitespace-nowrap text-base">
                  Subscribe to Insight
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-5 text-center sm:text-left">
                You can unsubscribe at any time. Read our <Link href="#" className="underline hover:text-gray-700 transition-colors">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
