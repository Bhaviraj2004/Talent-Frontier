import { Calendar, Mail, Phone, Trash2 } from 'lucide-react';
import { Lead } from './types';
import { getSourceBadge, getStatusBadge } from './LeadBadges';

interface LeadsTableProps {
  leads: Lead[];
  loading: boolean;
  onView: (lead: Lead) => void;
  onDelete: (lead: Lead) => void;
}

export const LeadsTable = ({ leads, loading, onView, onDelete }: LeadsTableProps) => {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/80 border-b border-slate-100">
              <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em] whitespace-nowrap">Lead Info</th>
              <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em] whitespace-nowrap">Contact</th>
              <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em] whitespace-nowrap">Source</th>
              <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em] whitespace-nowrap">Status</th>
              <th className="py-4 px-6 text-[11px] font-bold text-slate-400 uppercase tracking-[0.1em] whitespace-nowrap text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-400 text-sm font-medium">
                  Loading leads...
                </td>
              </tr>
            ) : leads.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-12 text-center text-slate-500 text-sm font-medium bg-slate-50">
                  No leads found matching your criteria.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="group bg-white hover:bg-slate-50/50 transition-colors">
                  <td className="py-5 px-6 align-top max-w-[200px]">
                    <div className="flex flex-col">
                      <span className="text-[14px] font-extrabold text-slate-900 mb-1">{lead.name}</span>
                      <div className="flex items-center text-[12px] text-slate-500 font-medium">
                        <Calendar className="w-3.5 h-3.5 mr-1.5" />
                        {new Date(lead.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </div>
                      <span className="text-[10px] text-slate-400 font-mono mt-1 uppercase">ID: {lead.id.slice(-6)}</span>
                    </div>
                  </td>
                  <td className="py-5 px-6 align-top">
                    <div className="flex flex-col space-y-2.5">
                      <div className="flex items-center text-[13px] text-slate-600 font-medium">
                        <Mail className="w-3.5 h-3.5 mr-3 text-slate-400" />
                        {lead.email ? (
                          <a href={`mailto:${lead.email}`} className="hover:text-[#005B82] hover:underline truncate max-w-[150px]">{lead.email}</a>
                        ) : (
                          <span className="text-slate-400 italic">No email</span>
                        )}
                      </div>
                      <div className="flex items-center text-[13px] text-slate-600 font-medium">
                        <Phone className="w-3.5 h-3.5 mr-3 text-slate-400" />
                        {lead.phone ? (
                          <span>{lead.phone}</span>
                        ) : (
                          <span className="text-slate-400 italic">No phone</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-5 px-6 align-top">
                    <div className="pt-0.5">{getSourceBadge(lead.contactMethod)}</div>
                  </td>
                  <td className="py-5 px-6 align-top">
                    <div className="pt-0.5">{getStatusBadge(lead.status)}</div>
                  </td>
                  <td className="py-5 px-6 align-top text-right">
                    <div className="flex items-center justify-end space-x-3 pt-0.5">
                      <button 
                        onClick={() => onView(lead)}
                        className="px-4 py-2 bg-slate-50 hover:bg-[#eef4f8] text-slate-700 hover:text-[#005B82] text-[12px] font-bold rounded-xl transition-colors border border-slate-200"
                      >
                        View
                      </button>
                      <button
                        onClick={() => onDelete(lead)}
                        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                        title="Delete Lead"
                      >
                        <Trash2 className="w-[18px] h-[18px]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
