import { useState } from 'react';
import { X, UserPlus, Loader2, User, Mail, Phone, MessageSquare } from 'lucide-react';

interface AddLeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (formData: any) => void;
  formLoading: boolean;
}

export const AddLeadModal = ({ isOpen, onClose, onAdd, formLoading }: AddLeadModalProps) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', query: '' });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center sm:p-4" onClick={onClose}>
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-[540px] overflow-hidden border-t sm:border border-neutral-200/40" onClick={(e) => e.stopPropagation()}>
        
        {/* Mobile drag handle */}
        <div className="w-full flex justify-center py-2 bg-neutral-900 sm:hidden">
          <div className="w-12 h-1.5 bg-white/20 rounded-full" />
        </div>

        {/* Dark Header */}
        <div className="bg-neutral-900 text-white px-5 sm:px-7 py-4 sm:py-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/[0.03] rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 border border-white/10 rounded-xl flex items-center justify-center shrink-0">
                <UserPlus className="w-[18px] h-[18px] text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[14px] sm:text-[15px] font-bold">New Lead</h3>
                <p className="text-[10px] sm:text-[11px] text-white/40 font-medium hidden sm:block">Add a manual lead entry</p>
              </div>
            </div>
            <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-white/30 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 shrink-0">
              <X className="w-4 h-4" strokeWidth={2} />
            </button>
          </div>
        </div>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-7 space-y-4 sm:space-y-5 max-h-[80vh] overflow-y-auto">
          {/* Name */}
          <div>
            <label className="text-[9px] sm:text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] mb-1.5 sm:mb-2 flex items-center gap-1.5">
              <User className="w-3 h-3" strokeWidth={2.5} />
              Full Name <span className="text-red-400">*</span>
            </label>
            <input 
              required 
              type="text" 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})} 
              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-neutral-50 border border-neutral-200/80 rounded-xl focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 text-[12px] sm:text-[13px] text-neutral-900 font-medium transition-all outline-none placeholder:text-neutral-400" 
              placeholder="e.g. John Doe" 
            />
          </div>
          
          {/* Email & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[9px] sm:text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] mb-1.5 sm:mb-2 flex items-center gap-1.5">
                <Mail className="w-3 h-3" strokeWidth={2.5} />
                Email
              </label>
              <input 
                type="email" 
                value={formData.email} 
                onChange={e => setFormData({...formData, email: e.target.value})} 
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-neutral-50 border border-neutral-200/80 rounded-xl focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 text-[12px] sm:text-[13px] text-neutral-900 font-medium transition-all outline-none placeholder:text-neutral-400" 
                placeholder="john@example.com" 
              />
            </div>
            <div>
              <label className="text-[9px] sm:text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] mb-1.5 sm:mb-2 flex items-center gap-1.5">
                <Phone className="w-3 h-3" strokeWidth={2.5} />
                Phone
              </label>
              <input 
                type="tel" 
                value={formData.phone} 
                onChange={e => setFormData({...formData, phone: e.target.value})} 
                className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-neutral-50 border border-neutral-200/80 rounded-xl focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 text-[12px] sm:text-[13px] text-neutral-900 font-medium transition-all outline-none placeholder:text-neutral-400" 
                placeholder="+61 400 000 000" 
              />
            </div>
          </div>
          
          {/* Query */}
          <div>
            <label className="text-[9px] sm:text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] mb-1.5 sm:mb-2 flex items-center gap-1.5">
              <MessageSquare className="w-3 h-3" strokeWidth={2.5} />
              Lead Details <span className="text-red-400">*</span>
            </label>
            <textarea 
              required 
              rows={4} 
              value={formData.query} 
              onChange={e => setFormData({...formData, query: e.target.value})} 
              className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 bg-neutral-50 border border-neutral-200/80 rounded-xl focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400 text-[12px] sm:text-[13px] text-neutral-900 font-medium transition-all outline-none resize-y min-h-[80px] sm:min-h-[100px] placeholder:text-neutral-400" 
              placeholder="Enter notes or the user's initial query..." 
            />
          </div>
          
          {/* Footer Actions */}
          <div className="pt-4 flex flex-col sm:flex-row justify-end gap-2 border-t border-neutral-100 pb-safe">
            <button 
              type="button" 
              onClick={onClose} 
              className="w-full sm:w-auto px-5 py-3 sm:py-2.5 text-[11px] font-semibold text-neutral-500 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-all duration-200 order-2 sm:order-1"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              disabled={formLoading} 
              className="w-full sm:w-auto flex justify-center px-6 py-3 sm:py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-[11px] font-bold rounded-xl transition-all duration-200 disabled:opacity-50 items-center gap-2 active:scale-[0.98] order-1 sm:order-2"
            >
              {formLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Saving...
                </>
              ) : (
                'Create Lead'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
