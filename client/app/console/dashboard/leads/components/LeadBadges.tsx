export const getStatusBadge = (status: string) => {
  switch (status) {
    case 'Client Created':
      return <span className="px-3 py-1.5 text-[10px] font-black tracking-widest rounded-full bg-[#f0f6fa] text-[#005B82] border border-[#e0eef6] whitespace-nowrap">CLIENT CREATED</span>;
    case 'Client Confirmed':
      return <span className="px-3 py-1.5 text-[10px] font-black tracking-widest rounded-full bg-indigo-50 text-indigo-600 border border-indigo-100 whitespace-nowrap">CLIENT CONFIRMED</span>;
    case 'Onboarding Created':
      return <span className="px-3 py-1.5 text-[10px] font-black tracking-widest rounded-full bg-purple-50 text-purple-600 border border-purple-100 whitespace-nowrap">ONBOARDING CREATED</span>;
    case 'Welcome Email':
      return <span className="px-3 py-1.5 text-[10px] font-black tracking-widest rounded-full bg-pink-50 text-pink-600 border border-pink-100 whitespace-nowrap">WELCOME EMAIL</span>;
    default:
      return <span className="px-3 py-1.5 text-[10px] font-black tracking-widest rounded-full bg-slate-100 text-slate-600 border border-slate-200 whitespace-nowrap">{status}</span>;
  }
};

export const getSourceBadge = (source: string | null) => {
  if (!source) return null;
  let label = source;
  if (source === 'CONTACT_FORM') label = 'FORM';
  if (source === 'CHATBOT') label = 'BOT';
  
  return (
    <span className="px-2.5 py-1 text-[10px] font-bold tracking-widest rounded-md bg-slate-100 text-slate-500 uppercase">
      {label}
    </span>
  );
};
