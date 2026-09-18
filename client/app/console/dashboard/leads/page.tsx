"use client";

import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Plus, Search, RefreshCw, Filter } from 'lucide-react';
import { Lead, PIPELINE_STAGES } from './components/types';
import { CustomSelect } from './components/CustomSelect';
import { LeadsTable } from './components/LeadsTable';
import { AddLeadModal } from './components/AddLeadModal';
import { ViewLeadModal } from './components/ViewLeadModal';
import { DeleteLeadModal } from './components/DeleteLeadModal';

export default function LeadsDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [sourceFilter, setSourceFilter] = useState('ALL');
  
  // Modal state
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  
  const [leadToDelete, setLeadToDelete] = useState<Lead | null>(null);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const token = Cookies.get('admin_token');
      const res = await axios.get('http://localhost:5000/api/leads', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeads(res.data.leads || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleStatusChange = async (id: string, newStatus: string) => {
    try {
      const token = Cookies.get('admin_token');
      await axios.put(`http://localhost:5000/api/leads/${id}/status`, { status: newStatus }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchLeads();
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead({ ...selectedLead, status: newStatus });
      }
    } catch (error) {
      console.error('Error updating status:', error);
      alert('Failed to update status');
    }
  };

  const handleUpdateLead = async (id: string, data: any) => {
    try {
      const token = Cookies.get('admin_token');
      await axios.put(`http://localhost:5000/api/leads/${id}`, data, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchLeads();
      if (selectedLead && selectedLead.id === id) {
        setSelectedLead({ ...selectedLead, ...data });
      }
    } catch (error) {
      console.error('Error updating lead:', error);
      alert('Failed to update lead');
    }
  };

  const handleDeleteConfirm = async () => {
    if (!leadToDelete) return;
    try {
      const token = Cookies.get('admin_token');
      await axios.delete(`http://localhost:5000/api/leads/${leadToDelete.id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLeadToDelete(null);
      fetchLeads();
    } catch (error) {
      console.error('Error deleting lead:', error);
      alert('Failed to delete lead');
    }
  };

  const handleAddSubmit = async (formData: any) => {
    try {
      setFormLoading(true);
      const token = Cookies.get('admin_token');
      await axios.post('http://localhost:5000/api/leads/manual', formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setIsAddModalOpen(false);
      fetchLeads();
    } catch (error) {
      console.error('Error adding lead:', error);
      alert('Failed to add lead');
    } finally {
      setFormLoading(false);
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (lead.email && lead.email.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesStatus = statusFilter === 'ALL' || lead.status === statusFilter;
    const matchesSource = sourceFilter === 'ALL' || lead.contactMethod === sourceFilter;
    return matchesSearch && matchesStatus && matchesSource;
  });

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 bg-white p-5 rounded-[20px] shadow-sm border border-slate-100">
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full xl:w-auto">
          <div className="relative w-full sm:w-64">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Search className="h-[16px] w-[16px] text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] text-[13px] text-slate-900 transition-all outline-none"
            />
          </div>
          <div className="h-8 w-px bg-slate-200 hidden sm:block mx-1"></div>
          <div className="flex gap-3 w-full sm:w-auto">
            <CustomSelect
              value={statusFilter}
              onChange={setStatusFilter}
              icon={Filter}
              placeholder="Filter by Status"
              options={[
                { value: 'ALL', label: 'All Stages' },
                ...PIPELINE_STAGES
              ]}
              widthClass="flex-1 sm:w-44"
            />
            <CustomSelect
              value={sourceFilter}
              onChange={setSourceFilter}
              placeholder="Filter by Source"
              options={[
                { value: 'ALL', label: 'All Sources' },
                { value: 'MANUAL', label: 'Manual' },
                { value: 'CONTACT_FORM', label: 'Website Form' },
                { value: 'CHATBOT', label: 'Chatbot' }
              ]}
              widthClass="flex-1 sm:w-36"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 w-full xl:w-auto mt-2 xl:mt-0">
          <button 
            onClick={fetchLeads}
            className="p-2.5 text-slate-400 hover:text-[#005B82] hover:bg-[#eef4f8] rounded-xl transition-colors border border-transparent shrink-0"
            title="Refresh list"
          >
            <RefreshCw className={`w-[18px] h-[18px] ${loading ? 'animate-spin' : ''}`} />
          </button>
          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="flex-1 xl:flex-none flex items-center justify-center bg-[#005B82] hover:bg-[#004a69] text-white text-[13px] font-bold py-2.5 px-5 rounded-xl transition-colors shadow-sm"
          >
            <Plus className="w-4 h-4 mr-1.5" />
            Add Manual Lead
          </button>
        </div>
      </div>

      <LeadsTable 
        leads={filteredLeads}
        loading={loading}
        onView={(lead) => {
          setSelectedLead(lead);
          setIsViewModalOpen(true);
        }}
        onDelete={(lead) => setLeadToDelete(lead)}
      />

      <AddLeadModal 
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAdd={handleAddSubmit}
        formLoading={formLoading}
      />

      <ViewLeadModal
        isOpen={isViewModalOpen}
        lead={selectedLead}
        onClose={() => setIsViewModalOpen(false)}
        onUpdate={handleUpdateLead}
        onStatusChange={handleStatusChange}
      />

      <DeleteLeadModal
        lead={leadToDelete}
        onClose={() => setLeadToDelete(null)}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
}
