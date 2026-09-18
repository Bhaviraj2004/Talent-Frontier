"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { 
  FileText, Eye, Clock, ArrowRight, 
  Users, Target, CheckCircle, BarChart3, 
  Magnet, Filter, Layers, Zap
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardOverview() {
  const [insightStats, setInsightStats] = useState({ total: 0, published: 0 });
  const [leadsData, setLeadsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('admin_token');
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const [insightsRes, leadsRes] = await Promise.all([
          axios.get(`${API_URL}/api/insights`, { headers: { Authorization: `Bearer ${token}` } }),
          axios.get(`${API_URL}/api/leads`, { headers: { Authorization: `Bearer ${token}` } })
        ]);
        
        if (insightsRes.data.success) {
          const insights = insightsRes.data.insights;
          setInsightStats({
            total: insights.length,
            published: insights.filter((i: any) => i.published).length
          });
        }
        
        if (leadsRes.data.success) {
          setLeadsData(leadsRes.data.leads);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalLeads = leadsData.length;
  const stageCounts = {
    'Client Created': leadsData.filter(l => l.status === 'Client Created').length,
    'Client Confirmed': leadsData.filter(l => l.status === 'Client Confirmed').length,
    'Onboarding Created': leadsData.filter(l => l.status === 'Onboarding Created').length,
    'Welcome Email': leadsData.filter(l => l.status === 'Welcome Email').length,
  };
  const activeLeads = totalLeads - stageCounts['Welcome Email'];

  const sourceCounts = [
    { label: 'Manual Entry', count: leadsData.filter(l => l.contactMethod === 'MANUAL').length, color: 'bg-slate-500' },
    { label: 'Website Form', count: leadsData.filter(l => l.contactMethod === 'CONTACT_FORM').length, color: 'bg-blue-500' },
    { label: 'Chatbot', count: leadsData.filter(l => l.contactMethod === 'CHATBOT').length, color: 'bg-indigo-500' },
  ].sort((a, b) => b.count - a.count);

  const statCards = [
    { name: 'Total Leads', value: totalLeads, icon: Users, desc: 'All time inquiries', theme: 'text-blue-600 bg-blue-50' },
    { name: 'Active Pipeline', value: activeLeads, icon: Target, desc: 'Leads in progress', theme: 'text-indigo-600 bg-indigo-50' },
    { name: 'Published Insights', value: insightStats.published, icon: Eye, desc: 'Live on website', theme: 'text-emerald-600 bg-emerald-50' },
    { name: 'Draft Insights', value: insightStats.total - insightStats.published, icon: Clock, desc: 'Pending review', theme: 'text-amber-600 bg-amber-50' },
  ];

  const pipelineStages = [
    { name: 'Client Created', count: stageCounts['Client Created'], color: 'bg-blue-500' },
    { name: 'Client Confirmed', count: stageCounts['Client Confirmed'], color: 'bg-indigo-500' },
    { name: 'Onboarding Created', count: stageCounts['Onboarding Created'], color: 'bg-purple-500' },
    { name: 'Welcome Email', count: stageCounts['Welcome Email'], color: 'bg-pink-500' },
  ];

  const maxStageCount = Math.max(...pipelineStages.map(s => s.count), 1);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      
      <div>
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Executive Summary</h2>
        <p className="text-[13px] text-slate-500 mt-1.5 font-medium">Platform performance, leads analytics, and content overview</p>
      </div>

      {/* High Level Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {statCards.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 flex flex-col justify-between group hover:border-slate-300 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.theme} group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-[20px] h-[20px]" />
              </div>
            </div>
            <div>
              <div className="text-[28px] font-black text-slate-900 tracking-tight leading-none mb-1">
                {loading ? '-' : stat.value}
              </div>
              <div className="text-[13px] font-bold text-slate-700">{stat.name}</div>
              <div className="text-[11px] text-slate-400 mt-1">{stat.desc}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Leads Pipeline Funnel */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 p-7">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Leads Pipeline Funnel</h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">Distribution of leads across conversion stages</p>
            </div>
            <div className="p-2 bg-slate-50 rounded-lg text-slate-400">
              <Filter className="w-4 h-4" />
            </div>
          </div>
          
          <div className="space-y-6">
            {pipelineStages.map((stage, i) => {
              const percentage = loading ? 0 : Math.round((stage.count / totalLeads) * 100) || 0;
              const barWidth = loading ? 0 : Math.max((stage.count / maxStageCount) * 100, 2); // min width for visibility
              
              return (
                <div key={stage.name} className="relative">
                  <div className="flex justify-between items-end mb-2">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">
                        {i + 1}
                      </span>
                      <span className="text-[13px] font-bold text-slate-700">{stage.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[15px] font-black text-slate-900">{loading ? '-' : stage.count}</span>
                      <span className="text-[11px] font-semibold text-slate-400 ml-2">({percentage}%)</span>
                    </div>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${stage.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${barWidth}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lead Sources Breakdown */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 p-7 flex flex-col">
          <div className="mb-6">
            <h3 className="text-lg font-bold text-slate-900">Lead Sources</h3>
            <p className="text-xs text-slate-500 mt-1 font-medium">Where your leads are coming from</p>
          </div>
          
          <div className="flex-1 flex flex-col justify-center gap-5">
            {sourceCounts.map(source => {
              const percentage = loading ? 0 : Math.round((source.count / totalLeads) * 100) || 0;
              return (
                <div key={source.label} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${source.color}`} />
                      <span className="text-[13px] font-bold text-slate-700">{source.label}</span>
                    </div>
                    <span className="text-[14px] font-black text-slate-900">{loading ? '-' : source.count}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-1.5 mt-3">
                    <div className={`h-1.5 rounded-full ${source.color} transition-all duration-1000 ease-out`} style={{ width: `${percentage}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        {/* Leads CTA */}
        <div className="bg-gradient-to-br from-[#005B82] to-[#004a69] rounded-2xl shadow-lg border border-[#004a69] p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-white/20">
              <Zap className="w-3 h-3" />
              <span>Lead Manager</span>
            </div>
            <h3 className="text-[20px] font-bold text-white mb-2 tracking-tight">Process active leads</h3>
            <p className="text-[13px] text-[#b3d4e5] mb-0 font-medium leading-relaxed max-w-sm">
              You have {loading ? '...' : activeLeads} leads waiting in the pipeline. Move them through the stages to close more clients.
            </p>
          </div>
          <Link 
            href="/console/dashboard/leads" 
            className="relative z-10 shrink-0 inline-flex items-center px-6 py-3 bg-white text-[#005B82] rounded-xl hover:bg-slate-50 transition-colors text-[13px] font-bold group shadow-sm"
          >
            Manage Leads
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Content CTA */}
        <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 p-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-[-10%] top-[-20%] w-[50%] h-[150%] bg-gradient-to-l from-[#eef4f8] to-transparent pointer-events-none rounded-full blur-3xl opacity-60" />
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#eef4f8] text-[#005B82] rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-[#d6e5ef]">
              <FileText className="w-3 h-3" />
              <span>Content Studio</span>
            </div>
            <h3 className="text-[20px] font-bold text-slate-900 mb-2 tracking-tight">Publish new insights</h3>
            <p className="text-[13px] text-slate-500 mb-0 font-medium leading-relaxed max-w-sm">
              Author new articles and publish them directly to your audience to drive more organic lead traffic.
            </p>
          </div>
          <Link 
            href="/console/dashboard/insights" 
            className="relative z-10 shrink-0 inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition-colors text-[13px] font-bold group shadow-sm"
          >
            Content Studio
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

    </div>
  );
}
