import { useState, useEffect } from 'react';
import { User, Mail, Phone, Calendar, CheckCircle, MessageSquare, Edit2, Save, X, ChevronRight, ArrowRight, Clock, Hash } from 'lucide-react';
import { Lead, PIPELINE_STAGES } from './types';
import { getSourceBadge, getStatusBadge } from './LeadBadges';

interface ViewLeadModalProps {
  lead: Lead | null;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (id: string, data: any) => Promise<void>;
  onStatusChange: (id: string, newStatus: string) => void;
}

export const ViewLeadModal = ({ lead, isOpen, onClose, onUpdate, onStatusChange }: ViewLeadModalProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', query: '' });

  useEffect(() => {
    if (lead && isOpen) {
      setIsEditing(false);
      setFormData({
        name: lead.name,
        email: lead.email || '',
        phone: lead.phone || '',
        query: lead.query
      });
    }
  }, [lead, isOpen]);

  if (!isOpen || !lead) return null;

  const handleSave = async () => {
    await onUpdate(lead.id, formData);
    setIsEditing(false);
  };

  const currentIdx = PIPELINE_STAGES.findIndex(s => s.value === lead.status);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center sm:p-4" onClick={onClose}>
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-[880px] overflow-hidden flex flex-col max-h-[95vh] sm:max-h-[92vh] border-t sm:border border-neutral-200/40" onClick={(e) => e.stopPropagation()}>
        
        {/* Mobile drag handle */}
        <div className="w-full flex justify-center py-2 bg-neutral-900 sm:hidden">
          <div className="w-12 h-1.5 bg-white/20 rounded-full" />
        </div>

        {/* Hero Header */}
        <div className="bg-neutral-900 text-white px-5 sm:px-7 py-5 sm:py-6 shrink-0 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/[0.03] rounded-full translate-y-1/2 -translate-x-1/3" />
          
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-0">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 border border-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-[15px] sm:text-[16px] font-bold uppercase shrink-0">
                {lead.name?.charAt(0) || '?'}
              </div>
              <div className="min-w-0 flex-1">
                {isEditing ? (
                  <input 
                    type="text" 
                    value={formData.name} 
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="text-[16px] sm:text-[18px] font-bold text-white bg-white/10 border border-white/20 rounded-lg px-2 sm:px-3 py-1 w-full outline-none focus:bg-white/15"
                  />
                ) : (
                  <h3 className="text-[16px] sm:text-[18px] font-extrabold leading-tight truncate">{lead.name}</h3>
                )}
                <div className="flex items-center gap-1.5 sm:gap-2 mt-1 sm:mt-1.5 flex-wrap">
                  <span className="text-[9px] sm:text-[10px] font-mono text-white/40 bg-white/5 px-1.5 sm:px-2 py-0.5 rounded-md border border-white/10 shrink-0">
                    {lead.id.slice(-8).toUpperCase()}
                  </span>
                  {getSourceBadgeLight(lead.contactMethod)}
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-2 self-end sm:self-auto w-full sm:w-auto justify-end">
              {!isEditing ? (
                <button 
                  onClick={() => setIsEditing(true)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-white/15 border border-white/10 text-white text-[11px] font-semibold rounded-xl transition-all duration-200"
                >
                  <Edit2 className="w-3 h-3" strokeWidth={2.5} />
                  Edit
                </button>
              ) : (
                <button 
                  onClick={handleSave}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-3.5 py-2 bg-white text-neutral-900 text-[11px] font-bold rounded-xl transition-all duration-200 hover:bg-neutral-100"
                >
                  <Save className="w-3 h-3" strokeWidth={2.5} />
                  Save
                </button>
              )}
              <button onClick={onClose} className="hidden sm:flex w-8 h-8 items-center justify-center text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 shrink-0">
                <X className="w-4 h-4" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Pipeline Stepper */}
        <div className="w-full bg-white border-b border-neutral-200/60 shrink-0 px-4 sm:px-7 py-3 sm:py-4">
          <div className="text-[9px] sm:text-[10px] font-extrabold text-neutral-400 uppercase tracking-[0.12em] mb-2 sm:mb-3">Pipeline Progress</div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-1.5 overflow-x-auto hide-scrollbar pb-1 sm:pb-0">
            {PIPELINE_STAGES.map((stage, idx) => {
              const isPast = currentIdx > idx;
              const isCurrent = currentIdx === idx;
              
              return (
                <div key={stage.value} className="flex flex-row sm:flex-row items-center flex-1 min-w-[120px] sm:min-w-0">
                  <button
                    onClick={() => onStatusChange(lead.id, stage.value)}
                    className={`w-full py-2.5 sm:py-2.5 px-2 rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.06em] transition-all duration-300 cursor-pointer text-center relative overflow-hidden ${
                      isCurrent 
                        ? 'bg-neutral-900 text-white shadow-sm' 
                        : isPast 
                        ? 'bg-neutral-200/80 text-neutral-700 hover:bg-neutral-300' 
                        : 'bg-neutral-100/80 text-neutral-400 hover:bg-neutral-200 hover:text-neutral-600'
                    }`}
                    title={`Move to: ${stage.label}`}
                  >
                    {isCurrent && <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0" />}
                    <span className="relative z-10 whitespace-nowrap">{stage.label}</span>
                  </button>
                  {idx < PIPELINE_STAGES.length - 1 && (
                    <div className="px-1 sm:px-0.5 shrink-0 hidden sm:block">
                      <ChevronRight className={`w-3.5 h-3.5 ${idx < currentIdx ? 'text-neutral-400' : 'text-neutral-200'}`} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Body */}
        <div className="p-4 sm:p-7 overflow-y-auto bg-white flex-1">
          
          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
            {/* Email */}
            <div className="bg-neutral-50/80 border border-neutral-100 rounded-xl p-3.5 sm:p-4">
              <div className="text-[9px] sm:text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] mb-2 sm:mb-2.5 flex items-center gap-1.5">
                <Mail className="w-3 h-3" strokeWidth={2.5} />
                Email Address
              </div>
              {isEditing ? (
                <input 
                  type="email" 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full text-[12px] sm:text-[13px] font-medium text-neutral-900 bg-white border border-neutral-200/80 rounded-lg px-2.5 sm:px-3 py-2 focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 outline-none"
                />
              ) : (
                <div className="text-[12px] sm:text-[13px] text-neutral-700 font-semibold break-all">
                  {lead.email || <span className="text-neutral-300 font-normal">Not provided</span>}
                </div>
              )}
            </div>
            
            {/* Phone */}
            <div className="bg-neutral-50/80 border border-neutral-100 rounded-xl p-3.5 sm:p-4">
              <div className="text-[9px] sm:text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] mb-2 sm:mb-2.5 flex items-center gap-1.5">
                <Phone className="w-3 h-3" strokeWidth={2.5} />
                Phone Number
              </div>
              {isEditing ? (
                <input 
                  type="tel" 
                  value={formData.phone} 
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full text-[12px] sm:text-[13px] font-medium text-neutral-900 bg-white border border-neutral-200/80 rounded-lg px-2.5 sm:px-3 py-2 focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 outline-none"
                />
              ) : (
                <div className="text-[12px] sm:text-[13px] text-neutral-700 font-semibold">
                  {lead.phone || <span className="text-neutral-300 font-normal">Not provided</span>}
                </div>
              )}
            </div>
            
            {/* Created On */}
            <div className="bg-neutral-50/80 border border-neutral-100 rounded-xl p-3.5 sm:p-4">
              <div className="text-[9px] sm:text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] mb-2 sm:mb-2.5 flex items-center gap-1.5">
                <Calendar className="w-3 h-3" strokeWidth={2.5} />
                Created On
              </div>
              <div className="text-[12px] sm:text-[13px] text-neutral-700 font-semibold">
                {new Date(lead.createdAt).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}
              </div>
            </div>
            
            {/* Current Stage */}
            <div className="bg-neutral-50/80 border border-neutral-100 rounded-xl p-3.5 sm:p-4">
              <div className="text-[9px] sm:text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] mb-2 sm:mb-2.5 flex items-center gap-1.5">
                <CheckCircle className="w-3 h-3" strokeWidth={2.5} />
                Current Stage
              </div>
              <div>{getStatusBadge(lead.status)}</div>
            </div>
          </div>
          
          {/* Message Card */}
          <div className={`rounded-xl p-4 sm:p-5 transition-all border ${isEditing ? 'bg-white border-neutral-300' : 'bg-neutral-50/80 border-neutral-100'}`}>
            <div className="text-[9px] sm:text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] mb-2.5 sm:mb-3 flex items-center gap-1.5">
              <MessageSquare className="w-3 h-3" strokeWidth={2.5} />
              Lead Query / Message
            </div>
            {isEditing ? (
              <textarea 
                value={formData.query} 
                onChange={e => setFormData({...formData, query: e.target.value})}
                rows={5}
                className="w-full text-[12px] sm:text-[13px] text-neutral-700 font-medium bg-neutral-50 border border-neutral-200/80 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 outline-none resize-y min-h-[100px]"
              />
            ) : (
              <div className="text-[12px] sm:text-[13px] text-neutral-600 whitespace-pre-wrap leading-relaxed font-medium">
                {lead.query || <span className="text-neutral-300 italic">No message provided.</span>}
              </div>
            )}
          </div>
        </div>
        
        {/* Footer */}
        <div className="px-4 sm:px-7 py-3 sm:py-4 border-t border-neutral-100 bg-neutral-50/50 flex flex-col sm:flex-row sm:justify-between items-center shrink-0 gap-3 sm:gap-0 pb-safe">
          <div className="text-[9px] sm:text-[10px] text-neutral-400 font-medium w-full sm:w-auto text-center sm:text-left order-2 sm:order-1">
            Last updated: {new Date(lead.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
          </div>
          <div className="flex gap-2 w-full sm:w-auto order-1 sm:order-2">
            {isEditing ? (
              <>
                <button onClick={() => setIsEditing(false)} className="flex-1 sm:flex-none px-4 py-2.5 sm:py-2 bg-white border border-neutral-200 text-[11px] font-semibold text-neutral-600 hover:bg-neutral-50 rounded-xl transition-all duration-200">
                  Cancel
                </button>
                <button onClick={handleSave} className="flex-1 sm:flex-none px-4 py-2.5 sm:py-2 bg-neutral-900 text-white text-[11px] font-bold rounded-xl hover:bg-neutral-800 transition-all duration-200">
                  Save Changes
                </button>
              </>
            ) : (
              <button onClick={onClose} className="w-full sm:w-auto px-4 py-2.5 sm:py-2 bg-neutral-100 border border-neutral-200 text-[11px] font-semibold text-neutral-600 hover:bg-neutral-200 rounded-xl transition-all duration-200">
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Light version of source badge for dark header background
const getSourceBadgeLight = (source: string | null) => {
  if (!source) return null;
  const labels: Record<string, string> = {
    'CONTACT_FORM': 'Form',
    'CHATBOT': 'Bot',
    'MANUAL': 'Manual',
  };
  return (
    <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 text-[8px] sm:text-[9px] font-bold tracking-wider rounded-md bg-white/10 text-white/60 border border-white/10 uppercase">
      {labels[source] || source}
    </span>
  );
};
