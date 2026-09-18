import { useState, useEffect } from 'react';
import { User, Mail, Phone, Calendar, CheckCircle, MessageSquare, Edit2, Save, XCircle } from 'lucide-react';
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

  return (
    <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] shadow-2xl w-full max-w-[850px] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="flex items-start justify-between p-7 border-b border-slate-100 shrink-0">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-[#f0f6fa] text-[#005B82] rounded-full flex items-center justify-center mr-5 shrink-0 border border-[#e0eef6]">
              <User className="w-6 h-6" />
            </div>
            <div className="flex-1">
              {isEditing ? (
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="text-xl font-bold text-slate-900 w-full bg-white border border-slate-200 rounded-lg px-3 py-1.5 focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] outline-none"
                />
              ) : (
                <h3 className="text-[22px] font-extrabold text-slate-900 leading-tight">{lead.name}</h3>
              )}
              <div className="flex items-center text-[13px] text-slate-500 mt-1 font-medium">
                ID: <span className="font-mono ml-1">{lead.id}</span>
                <span className="mx-2 text-slate-300">&bull;</span>
                {getSourceBadge(lead.contactMethod)}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!isEditing ? (
              <button 
                onClick={() => setIsEditing(true)}
                className="flex items-center px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 text-sm font-medium rounded-xl transition-colors border border-slate-200"
              >
                <Edit2 className="w-4 h-4 mr-2" /> Edit
              </button>
            ) : (
              <button 
                onClick={handleSave}
                className="flex items-center px-4 py-2 bg-[#005B82] hover:bg-[#004a69] text-white text-sm font-medium rounded-xl transition-colors shadow-sm"
              >
                <Save className="w-4 h-4 mr-2" /> Save
              </button>
            )}
            <button onClick={onClose} className="text-slate-400 hover:text-slate-700 p-2 rounded-xl hover:bg-slate-100 transition-colors ml-2">
              <XCircle className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Chevron Stepper */}
        <div className="w-full bg-[#f8fafc] border-b border-slate-200 shrink-0">
          <div className="flex items-center p-5 max-w-full overflow-x-auto hide-scrollbar">
            {(() => {
              const currentIdx = PIPELINE_STAGES.findIndex(s => s.value === lead.status);
              return PIPELINE_STAGES.map((stage, idx) => {
                const isPast = currentIdx > idx;
                const isCurrent = currentIdx === idx;
                
                const clipPath = idx === 0 
                  ? "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)" 
                  : idx === PIPELINE_STAGES.length - 1
                  ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 16px 50%)"
                  : "polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%, 16px 50%)";

                const bgClass = isCurrent 
                  ? "bg-[#005B82] text-white" 
                  : isPast 
                  ? "bg-[#e5f0f6] text-[#005B82] hover:bg-[#d6e7f0]" 
                  : "bg-[#e2e8f0] text-slate-500 hover:bg-[#cbd5e1]";
                
                return (
                  <div 
                    key={stage.value}
                    onClick={() => onStatusChange(lead.id, stage.value)}
                    className={`relative flex-1 flex items-center justify-center px-6 py-3.5 text-[11px] font-black uppercase tracking-[0.08em] transition-all cursor-pointer min-w-[160px] ${bgClass}`}
                    style={{ clipPath, marginLeft: idx === 0 ? '0' : '-14px', zIndex: PIPELINE_STAGES.length - idx }}
                    title={`Move to ${stage.label}`}
                  >
                    <span className={`${idx !== 0 ? 'ml-3' : ''} ${idx !== PIPELINE_STAGES.length - 1 ? 'mr-3' : ''}`}>
                      {stage.label}
                    </span>
                  </div>
                );
              });
            })()}
          </div>
        </div>
        
        {/* Modal Body */}
        <div className="p-7 overflow-y-auto bg-white flex-1">
          <div className="grid grid-cols-2 gap-8 mb-8">
            {/* Email */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                <Mail className="w-3.5 h-3.5 mr-2 text-slate-300"/> Email
              </div>
              {isEditing ? (
                <input 
                  type="email" 
                  value={formData.email} 
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full text-[15px] font-semibold text-slate-900 bg-white border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] outline-none"
                />
              ) : (
                <div className="text-[15px] text-slate-800 font-semibold px-1">{lead.email || 'N/A'}</div>
              )}
            </div>
            
            {/* Phone */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                <Phone className="w-3.5 h-3.5 mr-2 text-slate-300"/> Phone
              </div>
              {isEditing ? (
                <input 
                  type="tel" 
                  value={formData.phone} 
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                  className="w-full text-[15px] font-semibold text-slate-900 bg-white border border-slate-200 rounded-xl px-4 py-2.5 focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] outline-none"
                />
              ) : (
                <div className="text-[15px] text-slate-800 font-semibold px-1">{lead.phone || 'N/A'}</div>
              )}
            </div>
            
            {/* Created On */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                <Calendar className="w-3.5 h-3.5 mr-2 text-slate-300"/> Created On
              </div>
              <div className="text-[15px] text-slate-800 font-semibold px-1">{new Date(lead.createdAt).toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })}</div>
            </div>
            
            {/* Current Status */}
            <div className="space-y-2">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center">
                <CheckCircle className="w-3.5 h-3.5 mr-2 text-slate-300"/> Current Status
              </div>
              <div className="mt-1">{getStatusBadge(lead.status)}</div>
            </div>
          </div>
          
          {/* Message / Query */}
          <div className={`border rounded-2xl p-6 transition-colors ${isEditing ? 'border-[#005B82]/30 bg-[#f8fbfe]' : 'border-slate-100 bg-slate-50'}`}>
            <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center">
              <MessageSquare className="w-3.5 h-3.5 mr-2 text-slate-300"/> Message / Query Details
            </div>
            {isEditing ? (
              <textarea 
                value={formData.query} 
                onChange={e => setFormData({...formData, query: e.target.value})}
                rows={6}
                className="w-full text-[15px] text-slate-700 font-medium bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] outline-none resize-y min-h-[120px]"
              />
            ) : (
              <div className="text-[15px] text-slate-700 whitespace-pre-wrap leading-relaxed font-medium">
                {lead.query || <span className="text-slate-400 italic">No query provided.</span>}
              </div>
            )}
          </div>
        </div>
        
        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/80 flex justify-end shrink-0 gap-3">
          {isEditing ? (
            <>
              <button onClick={() => setIsEditing(false)} className="px-6 py-2.5 bg-white border border-slate-200 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900 rounded-xl transition-colors shadow-sm">
                Cancel Edit
              </button>
              <button onClick={handleSave} className="px-6 py-2.5 bg-[#005B82] text-white text-sm font-bold rounded-xl hover:bg-[#004a69] transition-colors shadow-sm">
                Save Changes
              </button>
            </>
          ) : (
            <button onClick={onClose} className="px-6 py-2.5 bg-white border border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 rounded-xl transition-colors shadow-sm">
              Close View
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
