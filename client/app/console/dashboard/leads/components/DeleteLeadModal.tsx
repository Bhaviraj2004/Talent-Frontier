import { Trash2, AlertTriangle } from 'lucide-react';
import { Lead } from './types';

interface DeleteLeadModalProps {
  lead: Lead | null;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteLeadModal = ({ lead, onClose, onConfirm }: DeleteLeadModalProps) => {
  if (!lead) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center sm:p-4" onClick={onClose}>
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full max-w-[420px] overflow-hidden border-t sm:border border-neutral-200/40" onClick={(e) => e.stopPropagation()}>
        
        {/* Mobile drag handle */}
        <div className="w-full flex justify-center py-2 bg-white sm:hidden absolute top-0 z-10">
          <div className="w-12 h-1.5 bg-neutral-200 rounded-full" />
        </div>

        {/* Red accent top bar - Desktop only since mobile has drag handle */}
        <div className="hidden sm:block h-1.5 bg-gradient-to-r from-red-500 to-red-400" />
        
        <div className="px-5 sm:px-7 py-7 sm:py-7 text-center pt-8 sm:pt-7">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-5">
            <Trash2 className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" strokeWidth={1.8} />
          </div>
          <h3 className="text-[16px] sm:text-[17px] font-extrabold text-neutral-900 mb-1.5 sm:mb-2">Delete this lead?</h3>
          <p className="text-[12px] sm:text-[13px] text-neutral-500 leading-relaxed mb-1">
            You are about to permanently delete:
          </p>
          
          <div className="bg-neutral-50 border border-neutral-100 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 my-3 sm:my-4 flex items-center gap-2.5 sm:gap-3 text-left">
            <div className="w-8 h-8 bg-neutral-900 rounded-full flex items-center justify-center text-[10px] sm:text-[11px] font-bold text-white uppercase shrink-0">
              {lead.name?.charAt(0) || '?'}
            </div>
            <div className="min-w-0">
              <div className="text-[12px] sm:text-[13px] font-bold text-neutral-900 truncate">{lead.name}</div>
              <div className="text-[10px] sm:text-[11px] text-neutral-400 font-medium truncate">{lead.email || 'No email'}</div>
            </div>
          </div>
          
          <p className="text-[10px] sm:text-[11px] text-neutral-400 mb-5 sm:mb-6">
            This action is irreversible and all data will be lost.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5 pb-safe">
            <button 
              onClick={onClose} 
              className="w-full sm:flex-1 px-5 py-3 sm:py-2.5 text-[12px] font-semibold text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-all duration-200 order-2 sm:order-1"
            >
              Cancel
            </button>
            <button 
              onClick={onConfirm} 
              className="w-full sm:flex-1 px-5 py-3 sm:py-2.5 bg-red-600 hover:bg-red-700 text-white text-[12px] font-bold rounded-xl transition-all duration-200 active:scale-[0.98] order-1 sm:order-2"
            >
              Delete Lead
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
