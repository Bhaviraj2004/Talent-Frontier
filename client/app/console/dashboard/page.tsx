"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FileText, Eye, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function DashboardOverview() {
  const [stats, setStats] = useState({ total: 0, published: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const token = Cookies.get('admin_token');
        const res = await axios.get('http://localhost:5000/api/insights', {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (res.data.success) {
          const insights = res.data.insights;
          setStats({
            total: insights.length,
            published: insights.filter((i: any) => i.published).length
          });
        }
      } catch (error) {
        console.error("Failed to fetch insights", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInsights();
  }, []);

  const statCards = [
    { name: 'Total Insights', value: stats.total, icon: FileText, desc: 'All time articles' },
    { name: 'Published', value: stats.published, icon: Eye, desc: 'Live on website' },
    { name: 'Drafts', value: stats.total - stats.published, icon: Clock, desc: 'Pending review' },
    { name: 'Engagement', value: 'N/A', icon: TrendingUp, desc: 'Coming soon' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Summary</h2>
        <p className="text-[13px] text-slate-500 mt-1.5 font-medium">Platform performance and content overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between group hover:border-[#005B82]/20 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-xl bg-[#eef4f8] text-[#005B82] group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-[20px] h-[20px]" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Stat</span>
            </div>
            <div>
              <div className="text-[28px] font-bold text-slate-900 tracking-tight leading-none mb-1">
                {loading ? '-' : stat.value}
              </div>
              <div className="text-[13px] font-bold text-slate-700">{stat.name}</div>
              <div className="text-[11px] text-slate-400 mt-1">{stat.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-10 flex items-center justify-between mt-8 relative overflow-hidden">
        <div className="absolute right-[-5%] top-[-20%] w-[40%] h-[150%] bg-gradient-to-l from-[#eef4f8] to-transparent pointer-events-none rounded-full blur-3xl opacity-50" />
        
        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#eef4f8] text-[#005B82] rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-[#d6e5ef]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#005B82] animate-pulse"></span>
            <span>Content Studio</span>
          </div>
          <h3 className="text-[22px] font-bold text-slate-900 mb-2 tracking-tight">Ready to publish new insights?</h3>
          <p className="text-[13px] text-slate-500 mb-6 font-medium leading-relaxed">
            Head over to the Insights management suite to author new articles, upload professional cover imagery, and publish directly to the Talent Frontier audience.
          </p>
          <Link 
            href="/console/dashboard/insights" 
            className="inline-flex items-center px-5 py-2.5 bg-[#005B82] text-white rounded-lg hover:bg-[#004a69] transition-colors text-[13px] font-semibold group shadow-sm"
          >
            Manage Insights
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
}
