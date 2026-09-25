"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { 
  Users, Target, ArrowRight, ArrowUpRight, ArrowDownRight,
  TrendingUp, Filter, Zap, BarChart3, Activity, 
  UserCheck, UserPlus, Send, Layers
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardOverview() {
  const [leadsData, setLeadsData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get('admin_token');
        const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const leadsRes = await axios.get(`${API_URL}/api/leads`, { 
          headers: { Authorization: `Bearer ${token}` } 
        });
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
  const conversionRate = totalLeads > 0 ? Math.round((stageCounts['Welcome Email'] / totalLeads) * 100) : 0;

  const sourceCounts = [
    { label: 'Manual Entry', count: leadsData.filter(l => l.contactMethod === 'MANUAL').length, icon: UserPlus },
    { label: 'Website Form', count: leadsData.filter(l => l.contactMethod === 'CONTACT_FORM').length, icon: Layers },
    { label: 'Chatbot', count: leadsData.filter(l => l.contactMethod === 'CHATBOT').length, icon: Send },
  ].sort((a, b) => b.count - a.count);

  const statCards = [
    { name: 'Total Leads', value: totalLeads, icon: Users, desc: 'All time inquiries', change: '+12%', up: true },
    { name: 'Active Pipeline', value: activeLeads, icon: Target, desc: 'Currently in progress', change: '+8%', up: true },
    { name: 'Converted', value: stageCounts['Welcome Email'], icon: UserCheck, desc: 'Completed onboarding', change: `${conversionRate}%`, up: true },
    { name: 'Conversion Rate', value: `${conversionRate}%`, icon: TrendingUp, desc: 'Lead to client ratio', change: '+3%', up: true },
  ];

  const pipelineStages = [
    { name: 'Client Created', count: stageCounts['Client Created'], icon: UserPlus },
    { name: 'Client Confirmed', count: stageCounts['Client Confirmed'], icon: UserCheck },
    { name: 'Onboarding Created', count: stageCounts['Onboarding Created'], icon: Activity },
    { name: 'Welcome Email', count: stageCounts['Welcome Email'], icon: Send },
  ];

  const maxStageCount = Math.max(...pipelineStages.map(s => s.count), 1);
  const recentLeads = leadsData.slice(0, 5);

  return (
    <div className="space-y-4 sm:space-y-6 pb-10">
      
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {statCards.map((stat) => (
          <div key={stat.name} className="bg-white p-4 sm:p-5 rounded-xl sm:rounded-2xl border border-neutral-200/60 flex flex-col justify-between group hover:border-neutral-300 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="flex justify-between items-start mb-3 sm:mb-5">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-neutral-50 border border-neutral-100 rounded-lg sm:rounded-xl flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-all duration-300">
                <stat.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-neutral-900 group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
              </div>
              <div className={`hidden sm:flex items-center space-x-1 text-[11px] font-semibold ${stat.up ? 'text-emerald-600' : 'text-red-500'}`}>
                {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <div>
              <div className="text-[20px] sm:text-[26px] font-extrabold text-neutral-900 tracking-tight leading-none mb-1">
                {loading ? <div className="w-10 h-5 sm:h-7 bg-neutral-100 rounded animate-pulse" /> : stat.value}
              </div>
              <div className="text-[11px] sm:text-[12px] font-semibold text-neutral-500 mt-1">{stat.name}</div>
              <div className="text-[10px] sm:text-[11px] text-neutral-400 mt-0.5 hidden sm:block">{stat.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Pipeline Funnel */}
        <div className="lg:col-span-2 bg-white rounded-xl sm:rounded-2xl border border-neutral-200/60 overflow-hidden">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-neutral-100">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-neutral-50 border border-neutral-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-900" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[13px] sm:text-[14px] font-bold text-neutral-900">Pipeline Funnel</h3>
                <p className="text-[10px] sm:text-[11px] text-neutral-400 font-medium hidden sm:block">Lead distribution across stages</p>
              </div>
            </div>
            <div className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 bg-neutral-50 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border border-neutral-100">
              {totalLeads} Total
            </div>
          </div>
          
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-5">
            {pipelineStages.map((stage) => {
              const percentage = loading ? 0 : totalLeads > 0 ? Math.round((stage.count / totalLeads) * 100) : 0;
              const barWidth = loading ? 0 : Math.max((stage.count / maxStageCount) * 100, 3);
              
              return (
                <div key={stage.name}>
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 bg-neutral-50 border border-neutral-100 rounded-lg flex items-center justify-center">
                        <stage.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-900" strokeWidth={2} />
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-semibold text-neutral-800">{stage.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="text-[13px] sm:text-[15px] font-extrabold text-neutral-900">{loading ? '-' : stage.count}</span>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 bg-neutral-50 px-1.5 sm:px-2 py-0.5 rounded-md">{percentage}%</span>
                    </div>
                  </div>
                  <div className="h-1.5 sm:h-2 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <div className="h-full bg-neutral-900 rounded-full transition-all duration-1000 ease-out" style={{ width: `${barWidth}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lead Sources */}
        <div className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200/60 overflow-hidden flex flex-col">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-neutral-100">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-neutral-50 border border-neutral-100 rounded-lg flex items-center justify-center">
                <Filter className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-900" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[13px] sm:text-[14px] font-bold text-neutral-900">Lead Sources</h3>
                <p className="text-[10px] sm:text-[11px] text-neutral-400 font-medium hidden sm:block">Acquisition channels</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex flex-col justify-center p-4 sm:p-6 gap-3">
            {sourceCounts.map(source => {
              const percentage = loading ? 0 : totalLeads > 0 ? Math.round((source.count / totalLeads) * 100) : 0;
              return (
                <div key={source.label} className="p-3 sm:p-4 rounded-xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-all duration-200 group">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="flex items-center gap-2.5 sm:gap-3">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white border border-neutral-200/80 rounded-lg flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-all duration-300">
                        <source.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-900 group-hover:text-white transition-colors duration-300" strokeWidth={2} />
                      </div>
                      <span className="text-[12px] sm:text-[13px] font-semibold text-neutral-700">{source.label}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[14px] sm:text-[16px] font-extrabold text-neutral-900">{loading ? '-' : source.count}</span>
                      <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 ml-1">{percentage}%</span>
                    </div>
                  </div>
                  <div className="w-full bg-neutral-200/50 rounded-full h-1 sm:h-1.5">
                    <div className="h-full rounded-full bg-neutral-900 transition-all duration-1000 ease-out" style={{ width: `${percentage}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        
        {/* Recent Leads */}
        <div className="lg:col-span-2 bg-white rounded-xl sm:rounded-2xl border border-neutral-200/60 overflow-hidden">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-neutral-100">
            <div className="flex items-center space-x-2.5 sm:space-x-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-neutral-50 border border-neutral-100 rounded-lg flex items-center justify-center">
                <Activity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-900" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[13px] sm:text-[14px] font-bold text-neutral-900">Recent Activity</h3>
                <p className="text-[10px] sm:text-[11px] text-neutral-400 font-medium hidden sm:block">Latest leads received</p>
              </div>
            </div>
            <Link href="/console/dashboard/leads" className="text-[11px] sm:text-[12px] font-semibold text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-1">
              View All <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          
          <div className="divide-y divide-neutral-50">
            {loading ? (
              <div className="p-6 sm:p-8 text-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-neutral-200 border-t-neutral-900 rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-[11px] sm:text-[12px] text-neutral-400 font-medium">Loading...</p>
              </div>
            ) : recentLeads.length === 0 ? (
              <div className="p-6 sm:p-8 text-center">
                <div className="w-10 h-10 bg-neutral-50 rounded-full flex items-center justify-center mx-auto mb-3 border border-neutral-100">
                  <Users className="w-5 h-5 text-neutral-300" />
                </div>
                <p className="text-[12px] sm:text-[13px] text-neutral-500 font-medium">No leads yet</p>
              </div>
            ) : (
              recentLeads.map((lead) => (
                <div key={lead.id} className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 hover:bg-neutral-50/50 transition-colors group">
                  <div className="flex items-center space-x-2.5 sm:space-x-3 min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-neutral-100 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-neutral-600 uppercase shrink-0">
                      {lead.name?.charAt(0) || '?'}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[12px] sm:text-[13px] font-semibold text-neutral-900 truncate">{lead.name}</div>
                      <div className="text-[10px] sm:text-[11px] text-neutral-400 font-medium truncate">
                        {lead.email || 'No email'} · {new Date(lead.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short' })}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-2">
                    <span className="text-[9px] sm:text-[10px] font-bold text-neutral-500 bg-neutral-100 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md uppercase tracking-wide">
                      {lead.status?.split(' ')[0]}
                    </span>
                    <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-300 group-hover:text-neutral-900 transition-colors hidden sm:block" />
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Action CTA */}
        <div className="bg-neutral-900 rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl -translate-y-10 translate-x-10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-3xl translate-y-10 -translate-x-10" />
          
          <div className="relative z-10">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center mb-4 sm:mb-5">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-[16px] sm:text-[18px] font-bold text-white mb-2 tracking-tight">Manage Pipeline</h3>
            <p className="text-[12px] sm:text-[13px] text-neutral-400 leading-relaxed mb-5 sm:mb-6">
              You have <span className="text-white font-bold">{loading ? '...' : activeLeads}</span> active leads in the pipeline.
            </p>
          </div>
          
          <Link 
            href="/console/dashboard/leads" 
            className="relative z-10 w-full inline-flex items-center justify-center px-5 py-3 bg-white text-neutral-900 rounded-xl hover:bg-neutral-100 transition-colors text-[12px] sm:text-[13px] font-bold group"
          >
            Open Lead Manager
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
