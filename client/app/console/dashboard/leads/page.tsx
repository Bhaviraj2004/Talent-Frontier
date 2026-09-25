"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { 
  Plus, Search, RefreshCw, Filter, Users, 
  Target, UserCheck, TrendingUp
} from 'lucide-react';
import { Lead, PIPELINE_STAGES } from './components/types';
import { CustomSelect } from './components/CustomSelect';
import { LeadsTable } from './components/LeadsTable';
import { AddLeadModal } from './components/AddLeadModal';
import { ViewLeadModal } from './components/ViewLeadModal';
import { DeleteLeadModal } from './components/DeleteLeadModal';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [sourceFilter, setSourceFilter] = useState('ALL');
  
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [leadToDelete, setLeadToDelete] = useState<Lead | null>(null);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const token = Cookies.get('admin_token');
      const res = await axios.get(`${API_URL}/api/leads`, { headers: { Authorization: `Bearer ${token}` } });
      setLeads(res.data.leads || []);
    } catch (error) { console.error('Error fetching leads:', error); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchLeads(); }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const token = Cookies.get('admin_token');
      await axios.put(`${API_URL}/api/leads/${id}/status`, { status: newStatus }, { headers: { Authorization: `Bearer ${token}` } });
      fetchLeads();
      if (selectedLead && selectedLead.id === id) setSelectedLead({ ...selectedLead, status: newStatus });
    } catch (error) { console.error('Error updating status:', error); }
  };

  const handleUpdateLead = async (id: string, data: any) => {
    try {
      const token = Cookies.get('admin_token');
      await axios.put(`${API_URL}/api/leads/${id}`, data, { headers: { Authorization: `Bearer ${token}` } });
      fetchLeads();
      if (selectedLead && selectedLead.id === id) setSelectedLead({ ...selectedLead, ...data });
    } catch (error) { console.error('Error updating lead:', error); }
  };

  const handleDeleteConfirm = async () => {
    if (!leadToDelete) return;
    try {
      const token = Cookies.get('admin_token');
      await axios.delete(`${API_URL}/api/leads/${leadToDelete.id}`, { headers: { Authorization: `Bearer ${token}` } });
      setLeadToDelete(null); fetchLeads();
    } catch (error) { console.error('Error deleting lead:', error); }
  };

  const handleAddSubmit = async (formData: any) => {
    try {
      setFormLoading(true);
      const token = Cookies.get('admin_token');
      await axios.post(`${API_URL}/api/leads/manual`, formData, { headers: { Authorization: `Bearer ${token}` } });
      setIsAddModalOpen(false); fetchLeads();
    } catch (error) { console.error('Error adding lead:', error); }
    finally { setFormLoading(false); }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'ALL' || lead.status === statusFilter;
    const matchesSource = sourceFilter === 'ALL' || lead.contactMethod === sourceFilter;
    return matchesSearch && matchesStatus && matchesSource;
  });

  const totalLeads = leads.length;
  const activeLeads = leads.filter(l => l.status !== 'Welcome Email').length;
  const convertedLeads = leads.filter(l => l.status === 'Welcome Email').length;
  const conversionRate = totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100) : 0;

  const miniStats = [
    { label: 'Total', value: totalLeads, icon: Users },
    { label: 'Active', value: activeLeads, icon: Target },
    { label: 'Converted', value: convertedLeads, icon: UserCheck },
    { label: 'Rate', value: `${conversionRate}%`, icon: TrendingUp },
  ];

  return (
    <div className="space-y-4 sm:space-y-5 pb-10">

      {/* KPI Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
        {miniStats.map((s) => (
          <div key={s.label} className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200/60 px-3.5 sm:px-5 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 group hover:border-neutral-300 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 group-hover:border-neutral-900 transition-all duration-300 shrink-0">
              <s.icon className="w-4 h-4 sm:w-[18px] sm:h-[18px] text-neutral-900 group-hover:text-white transition-colors duration-300" strokeWidth={1.8} />
            </div>
            <div className="min-w-0">
              <div className="text-[16px] sm:text-[20px] font-extrabold text-neutral-900 leading-none tracking-tight">
                {loading ? <div className="w-7 h-4 sm:w-8 sm:h-5 bg-neutral-100 rounded animate-pulse" /> : s.value}
              </div>
              <div className="text-[10px] sm:text-[11px] font-semibold text-neutral-400 mt-0.5">{s.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200/60 relative z-30">
        <div className="px-3.5 sm:px-5 py-3 sm:py-4 space-y-3">
          {/* Search row */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-neutral-900" strokeWidth={2.2} />
              </div>
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-200/80 rounded-xl focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 text-[12px] sm:text-[13px] text-neutral-900 font-medium transition-all outline-none placeholder:text-neutral-400"
              />
            </div>
            <button 
              onClick={fetchLeads}
              className="p-2.5 text-neutral-900 hover:bg-neutral-100 rounded-xl transition-all border border-neutral-200/80 shrink-0 active:scale-95"
              title="Refresh"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} strokeWidth={2.2} />
            </button>
            <button 
              onClick={() => setIsAddModalOpen(true)}
              className="hidden sm:flex items-center bg-neutral-900 hover:bg-neutral-800 text-white text-[12px] font-semibold py-2.5 px-4 rounded-xl transition-all active:scale-[0.98]"
            >
              <Plus className="w-4 h-4 mr-1" strokeWidth={2.5} />
              New Lead
            </button>
          </div>

          {/* Filters row */}
          <div className="flex items-center gap-2">
            <CustomSelect
              value={statusFilter}
              onChange={setStatusFilter}
              icon={Filter}
              placeholder="Filter by Stage"
              options={[{ value: 'ALL', label: 'All Stages' }, ...PIPELINE_STAGES]}
              widthClass="flex-1"
            />
            <CustomSelect
              value={sourceFilter}
              onChange={setSourceFilter}
              placeholder="Filter by Source"
              options={[
                { value: 'ALL', label: 'All Sources' },
                { value: 'MANUAL', label: 'Manual' },
                { value: 'CONTACT_FORM', label: 'Website' },
                { value: 'CHATBOT', label: 'Chatbot' }
              ]}
              widthClass="flex-1"
            />
          </div>

          {/* Mobile Add Button */}
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="sm:hidden w-full flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white text-[13px] font-semibold py-3 rounded-xl transition-all active:scale-[0.98]"
          >
            <Plus className="w-4 h-4 mr-1.5" strokeWidth={2.5} />
            New Lead
          </button>
        </div>

        {/* Results bar */}
        <div className="px-3.5 sm:px-5 py-2 sm:py-2.5 bg-neutral-50/80 border-t border-neutral-100 flex items-center justify-between rounded-b-xl sm:rounded-b-2xl">
          <div className="text-[10px] sm:text-[11px] font-medium text-neutral-400">
            <span className="text-neutral-700 font-bold">{filteredLeads.length}</span> of <span className="text-neutral-700 font-bold">{totalLeads}</span> leads
          </div>
          {(statusFilter !== 'ALL' || sourceFilter !== 'ALL' || searchTerm) && (
            <button 
              onClick={() => { setStatusFilter('ALL'); setSourceFilter('ALL'); setSearchTerm(''); }}
              className="text-[10px] sm:text-[11px] font-semibold text-neutral-500 hover:text-neutral-900 transition-colors"
            >
              Clear ×
            </button>
          )}
        </div>
      </div>

      {/* Table */}
      <LeadsTable 
        leads={filteredLeads}
        loading={loading}
        onView={(lead) => { setSelectedLead(lead); setIsViewModalOpen(true); }}
        onDelete={(lead) => setLeadToDelete(lead)}
      />

      {/* Modals */}
      <AddLeadModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onAdd={handleAddSubmit} formLoading={formLoading} />
      <ViewLeadModal isOpen={isViewModalOpen} lead={selectedLead} onClose={() => setIsViewModalOpen(false)} onUpdate={handleUpdateLead} onStatusChange={handleStatusChange} />
      <DeleteLeadModal lead={leadToDelete} onClose={() => setLeadToDelete(null)} onConfirm={handleDeleteConfirm} />
    </div>
  );
}
