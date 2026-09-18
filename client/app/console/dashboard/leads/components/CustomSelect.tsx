"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

export const CustomSelect = ({ value, onChange, options, icon: Icon, placeholder, widthClass }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedOption = options.find((o: any) => o.value === value) || options[0];

  return (
    <div className={`relative ${widthClass}`} ref={dropdownRef}>
      {Icon && (
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none z-10">
          <Icon className="h-4 w-4 text-slate-400" />
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full ${Icon ? 'pl-9' : 'px-4'} pr-8 py-2.5 bg-white border border-slate-200 rounded-xl text-[13px] font-bold text-slate-600 outline-none focus:ring-2 focus:ring-[#005B82]/20 hover:bg-slate-50 transition-colors flex items-center justify-between text-left relative z-0`}
      >
        <span className="truncate">{selectedOption.label}</span>
      </button>
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none z-10">
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {isOpen && (
        <div className="absolute z-50 w-full mt-1.5 bg-white border border-slate-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-1.5 min-w-[140px] left-0 animate-in fade-in zoom-in-95 duration-100">
          <div className="px-3 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">{placeholder}</div>
          {options.map((opt: any) => (
            <button
              key={opt.value}
              onClick={() => { onChange(opt.value); setIsOpen(false); }}
              className={`w-full text-left px-4 py-2 text-[13px] font-bold transition-colors ${value === opt.value ? 'bg-[#f0f6fa] text-[#005B82]' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
