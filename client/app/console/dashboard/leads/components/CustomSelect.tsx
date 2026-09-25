"use client";

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';

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
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
          <Icon className="h-3.5 w-3.5 text-neutral-900" strokeWidth={2} />
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full ${Icon ? 'pl-8' : 'px-3.5'} pr-7 sm:pr-8 py-2.5 sm:py-2.5 bg-neutral-50 border border-neutral-200/80 rounded-xl text-[11px] sm:text-[12px] font-semibold text-neutral-700 outline-none focus:ring-2 focus:ring-neutral-900/10 hover:bg-neutral-100 transition-all duration-200 flex items-center justify-between text-left relative z-0`}
      >
        <span className="truncate">{selectedOption.label}</span>
      </button>
      <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none z-10">
        <ChevronDown className={`w-3.5 h-3.5 text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </div>
      
      {isOpen && (
        <div className="absolute z-[999] w-[140px] sm:w-full mt-1 bg-white border border-neutral-200/80 rounded-xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.15)] py-1 right-0 sm:left-0 sm:right-auto origin-top-right sm:origin-top-left max-h-[300px] overflow-y-auto">
          <div className="px-3 py-2 text-[9px] sm:text-[10px] font-bold text-neutral-400 uppercase tracking-[0.1em] border-b border-neutral-100 mb-1">{placeholder}</div>
          {options.map((opt: any) => (
            <button
              key={opt.value}
              onClick={() => { onChange(opt.value); setIsOpen(false); }}
              className={`w-full text-left px-3 py-2 sm:py-2 text-[11px] sm:text-[12px] font-semibold transition-colors flex items-center justify-between ${value === opt.value ? 'bg-neutral-900 text-white' : 'text-neutral-600 hover:bg-neutral-50'}`}
            >
              <span className="truncate pr-2">{opt.label}</span>
              {value === opt.value && <Check className="w-3.5 h-3.5 shrink-0" strokeWidth={2.5} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
