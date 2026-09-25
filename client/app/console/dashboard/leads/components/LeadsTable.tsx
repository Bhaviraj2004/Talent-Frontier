import { Calendar, Mail, Phone, Trash2, Eye } from 'lucide-react';
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
    <div className="bg-white rounded-xl sm:rounded-2xl border border-neutral-200/60 overflow-hidden">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[780px]">
          <thead>
            <tr className="border-b border-neutral-200/60">
              <th className="py-3 px-5 text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] whitespace-nowrap bg-neutral-50/70">Lead</th>
              <th className="py-3 px-5 text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] whitespace-nowrap bg-neutral-50/70">Contact Details</th>
              <th className="py-3 px-5 text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] whitespace-nowrap bg-neutral-50/70">Source</th>
              <th className="py-3 px-5 text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] whitespace-nowrap bg-neutral-50/70">Stage</th>
              <th className="py-3 px-5 text-[10px] font-extrabold text-neutral-900 uppercase tracking-[0.1em] whitespace-nowrap bg-neutral-50/70 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              Array.from({ length: 4 }).map((_, i) => (
                <tr key={i} className="border-b border-neutral-50">
                  <td className="py-4 px-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 bg-neutral-100 rounded-full animate-pulse" />
                      <div className="space-y-1.5">
                        <div className="w-24 h-3.5 bg-neutral-100 rounded animate-pulse" />
                        <div className="w-16 h-2.5 bg-neutral-50 rounded animate-pulse" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-5"><div className="w-32 h-3 bg-neutral-100 rounded animate-pulse" /></td>
                  <td className="py-4 px-5"><div className="w-14 h-5 bg-neutral-100 rounded animate-pulse" /></td>
                  <td className="py-4 px-5"><div className="w-24 h-5 bg-neutral-100 rounded animate-pulse" /></td>
                  <td className="py-4 px-5"><div className="w-16 h-7 bg-neutral-100 rounded ml-auto animate-pulse" /></td>
                </tr>
              ))
            ) : leads.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-20 text-center">
                  <div className="w-14 h-14 bg-neutral-50 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neutral-100">
                    <Mail className="w-6 h-6 text-neutral-300" strokeWidth={1.5} />
                  </div>
                  <p className="text-[14px] text-neutral-800 font-bold mb-1">No leads found</p>
                  <p className="text-[12px] text-neutral-400 max-w-xs mx-auto">Try adjusting your search terms or clearing the active filters.</p>
                </td>
              </tr>
            ) : (
              leads.map((lead, index) => (
                <tr 
                  key={lead.id} 
                  className={`group transition-colors hover:bg-neutral-50/60 cursor-pointer ${
                    index !== leads.length - 1 ? 'border-b border-neutral-100/80' : ''
                  }`}
                  onClick={() => onView(lead)}
                >
                  <td className="py-3.5 px-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 bg-neutral-900 rounded-full flex items-center justify-center text-[11px] font-bold text-white uppercase shrink-0 group-hover:scale-105 transition-transform duration-200">
                        {lead.name?.charAt(0) || '?'}
                      </div>
                      <div>
                        <span className="text-[13px] font-bold text-neutral-900 block leading-tight group-hover:text-neutral-700 transition-colors">{lead.name}</span>
                        <div className="flex items-center gap-1.5 mt-1">
                          <Calendar className="w-3 h-3 text-neutral-900" strokeWidth={2.5} />
                          <span className="text-[10px] text-neutral-400 font-medium">
                            {new Date(lead.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5">
                    <div className="space-y-1">
                      <div className="flex items-center text-[12px] text-neutral-600 font-medium">
                        <Mail className="w-3 h-3 mr-2 text-neutral-900 shrink-0" strokeWidth={2.5} />
                        {lead.email ? (
                          <span className="truncate max-w-[180px]">{lead.email}</span>
                        ) : (
                          <span className="text-neutral-300">—</span>
                        )}
                      </div>
                      <div className="flex items-center text-[12px] text-neutral-600 font-medium">
                        <Phone className="w-3 h-3 mr-2 text-neutral-900 shrink-0" strokeWidth={2.5} />
                        {lead.phone ? (
                          <span>{lead.phone}</span>
                        ) : (
                          <span className="text-neutral-300">—</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-5">{getSourceBadge(lead.contactMethod)}</td>
                  <td className="py-3.5 px-5">{getStatusBadge(lead.status)}</td>
                  <td className="py-3.5 px-5 text-right" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-end gap-1">
                      <button 
                        onClick={() => onView(lead)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white text-[10px] font-bold rounded-lg transition-all duration-200 active:scale-95 uppercase tracking-wide"
                      >
                        <Eye className="w-3 h-3" strokeWidth={2.5} />
                        Open
                      </button>
                      <button
                        onClick={() => onDelete(lead)}
                        className="p-1.5 text-neutral-200 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" strokeWidth={2} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden divide-y divide-neutral-100">
        {loading ? (
           <div className="p-8 text-center">
             <div className="w-6 h-6 border-2 border-neutral-200 border-t-neutral-900 rounded-full animate-spin mx-auto mb-3"></div>
             <p className="text-[12px] text-neutral-400 font-medium">Loading leads...</p>
           </div>
        ) : leads.length === 0 ? (
          <div className="p-10 text-center">
            <div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-neutral-100">
              <Mail className="w-5 h-5 text-neutral-300" strokeWidth={1.5} />
            </div>
            <p className="text-[13px] text-neutral-800 font-bold mb-1">No leads found</p>
          </div>
        ) : (
          leads.map((lead) => (
            <div 
              key={lead.id} 
              className="p-4 bg-white hover:bg-neutral-50/50 transition-colors cursor-pointer"
              onClick={() => onView(lead)}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-10 h-10 bg-neutral-900 rounded-full flex items-center justify-center text-[12px] font-bold text-white uppercase shrink-0">
                    {lead.name?.charAt(0) || '?'}
                  </div>
                  <div className="min-w-0">
                    <span className="text-[14px] font-bold text-neutral-900 block truncate">{lead.name}</span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-3 h-3 text-neutral-400" strokeWidth={2} />
                      <span className="text-[10px] text-neutral-400 font-medium truncate">
                        {new Date(lead.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="shrink-0 ml-2" onClick={(e) => e.stopPropagation()}>
                  <button
                    onClick={() => onDelete(lead)}
                    className="p-2 text-neutral-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>
              </div>
              
              <div className="space-y-1.5 mb-3 bg-neutral-50/50 p-3 rounded-xl border border-neutral-100/50">
                <div className="flex items-center text-[12px] text-neutral-600 font-medium">
                  <Mail className="w-3.5 h-3.5 mr-2 text-neutral-900 shrink-0" strokeWidth={2} />
                  <span className="truncate">{lead.email || <span className="text-neutral-300">—</span>}</span>
                </div>
                <div className="flex items-center text-[12px] text-neutral-600 font-medium">
                  <Phone className="w-3.5 h-3.5 mr-2 text-neutral-900 shrink-0" strokeWidth={2} />
                  <span>{lead.phone || <span className="text-neutral-300">—</span>}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div>{getStatusBadge(lead.status)}</div>
                <div>{getSourceBadge(lead.contactMethod)}</div>
              </div>
            </div>
          ))
        )}
      </div>
      
      {/* Table Footer */}
      {!loading && leads.length > 0 && (
        <div className="px-4 sm:px-5 py-3 bg-neutral-50/50 border-t border-neutral-100 flex items-center justify-between">
          <span className="text-[10px] sm:text-[11px] font-medium text-neutral-400">{leads.length} record{leads.length !== 1 ? 's' : ''}</span>
          <span className="text-[9px] sm:text-[10px] font-medium text-neutral-300 hidden sm:block">Click any row to view details</span>
          <span className="text-[9px] sm:text-[10px] font-medium text-neutral-300 sm:hidden">Tap card for details</span>
        </div>
      )}
    </div>
  );
};
