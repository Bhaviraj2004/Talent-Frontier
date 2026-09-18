import { AlertTriangle } from 'lucide-react';
import { Lead } from './types';

interface DeleteLeadModalProps {
  lead: Lead | null;
  onClose: () => void;
  onConfirm: () => void;
}

export const DeleteLeadModal = ({ lead, onClose, onConfirm }: DeleteLeadModalProps) => {
  if (!lead) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-[400px] overflow-hidden p-6 text-center animate-in fade-in zoom-in duration-200">
        <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Delete Lead?</h3>
        <p className="text-sm text-slate-500 mb-6">
          Are you sure you want to delete <strong>{lead.name}</strong>? This action cannot be undone.
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-xl transition-colors shadow-sm">
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};
