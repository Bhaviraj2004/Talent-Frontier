import { useState } from 'react';
import { XCircle } from 'lucide-react';

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
    // Note: page.tsx should clear formData and close modal on success, 
    // or we can just reset it here when modal closes, but for simplicity we rely on page to unmount it or we just keep it simple.
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[500px] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-slate-100">
          <h3 className="text-lg font-bold text-slate-900">Add Manual Lead</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 p-1 rounded-lg hover:bg-slate-100 transition-colors">
            <XCircle className="w-6 h-6" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-left">
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-1.5">Full Name *</label>
            <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] text-sm text-slate-900 transition-all outline-none" placeholder="e.g. John Doe" />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-1.5">Email</label>
              <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] text-sm text-slate-900 transition-all outline-none" placeholder="john@example.com" />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-1.5">Phone</label>
              <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] text-sm text-slate-900 transition-all outline-none" placeholder="+61 400 000 000" />
            </div>
          </div>
          
          <div>
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide mb-1.5">Lead Details / Query *</label>
            <textarea required rows={4} value={formData.query} onChange={e => setFormData({...formData, query: e.target.value})} className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] text-sm text-slate-900 transition-all outline-none resize-none" placeholder="Enter notes or the user's initial query..." />
          </div>
          
          <div className="pt-4 flex justify-end gap-3">
            <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
              Cancel
            </button>
            <button type="submit" disabled={formLoading} className="px-5 py-2.5 bg-[#005B82] hover:bg-[#004a69] text-white text-sm font-medium rounded-xl transition-colors shadow-sm disabled:opacity-70 flex items-center">
              {formLoading ? 'Saving...' : 'Save Lead'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
