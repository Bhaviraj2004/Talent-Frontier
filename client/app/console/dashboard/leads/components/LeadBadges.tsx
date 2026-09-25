export const getStatusBadge = (status: string) => {
  const config: Record<string, { bg: string; text: string; border: string; dot: string }> = {
    'Client Created': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200/60', dot: 'bg-blue-500' },
    'Client Confirmed': { bg: 'bg-neutral-900', text: 'text-white', border: 'border-neutral-900', dot: 'bg-white' },
    'Onboarding Created': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200/60', dot: 'bg-amber-500' },
    'Welcome Email': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200/60', dot: 'bg-emerald-500' },
  };

  const style = config[status] || { bg: 'bg-neutral-100', text: 'text-neutral-600', border: 'border-neutral-200', dot: 'bg-neutral-400' };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-lg border whitespace-nowrap uppercase ${style.bg} ${style.text} ${style.border}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`} />
      {status}
    </span>
  );
};

export const getSourceBadge = (source: string | null) => {
  if (!source) return <span className="text-[11px] text-neutral-300">—</span>;
  
  const labels: Record<string, string> = {
    'CONTACT_FORM': 'Form',
    'CHATBOT': 'Bot',
    'MANUAL': 'Manual',
  };

  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold tracking-wider rounded-lg bg-neutral-50 text-neutral-500 border border-neutral-100 uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
      {labels[source] || source}
    </span>
  );
};
