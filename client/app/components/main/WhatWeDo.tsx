import React from 'react';

const services = [
  { title: "Talent Sourcing", desc: "We proactively find skilled professionals who match your role requirements.", active: true, icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 mb-5">
      <circle cx="12" cy="7" r="4"></circle>
      <path d="M5.5 21v-2a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2"></path>
      <circle cx="17" cy="17" r="3"></circle>
      <path d="M19.5 19.5L22 22"></path>
    </svg>
  )},
  { title: "Screening & Shortlisting", desc: "We assess, screen and shortlist candidates based on skills, experience and fit.", active: false, icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 mb-5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <circle cx="12" cy="14" r="3"></circle>
      <path d="M14.5 16.5L17 19"></path>
    </svg>
  )},
  { title: "Interview Coordination", desc: "We coordinate interviews and keep the process moving smoothly.", active: false, icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 mb-5">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  )},
  { title: "Recruitment Support", desc: "We support you through offers, onboarding and beyond.", active: false, icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-10 h-10 mb-5">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  )}
];

export default function WhatWeDo() {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto w-full font-sans">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0f172a] mb-14 tracking-tight">What We Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <div key={i} className={`p-10 rounded-2xl flex flex-col items-center text-center transition-all ${s.active ? 'bg-[#2563eb] text-white shadow-xl shadow-blue-500/20' : 'bg-white text-gray-700 border border-gray-100 hover:border-blue-200 hover:shadow-lg'}`}>
            <div className={s.active ? 'text-white' : 'text-blue-600'}>
              {s.icon}
            </div>
            <h3 className="font-bold text-lg mb-3 tracking-tight">{s.title}</h3>
            <p className={`text-sm leading-relaxed ${s.active ? 'text-blue-100' : 'text-gray-500'}`}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
