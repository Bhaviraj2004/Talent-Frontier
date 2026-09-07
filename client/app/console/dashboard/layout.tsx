"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { LayoutDashboard, FileText, LogOut, Shield } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const token = Cookies.get('admin_token');
    if (!token) {
      router.push('/console');
    } else {
      setIsAuth(true);
    }
  }, [router]);

  const handleLogout = () => {
    Cookies.remove('admin_token');
    router.push('/console');
  };

  if (!isAuth) {
    return <div className="min-h-screen bg-[#f4f7f9]" />; // Loading state
  }

  const navItems = [
    { name: 'Overview', href: '/console/dashboard', icon: LayoutDashboard },
    { name: 'Insights', href: '/console/dashboard/insights', icon: FileText },
  ];

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-[#f4f7f9] via-white to-[#e8eff5] font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-[260px] bg-white flex flex-col border-r border-[#eef4f8] shadow-[4px_0_24px_rgb(0,0,0,0.02)] z-20">
        <div className="p-7 border-b border-[#eef4f8] flex flex-col items-center justify-center text-center">
          <div className="w-10 h-10 bg-[#eef4f8] text-[#005B82] flex items-center justify-center rounded-lg mb-3 border border-[#d6e5ef]">
            <Shield className="w-5 h-5" />
          </div>
          <div className="font-serif font-bold text-slate-900 tracking-wide text-sm">
            TALENT FRONTIER
          </div>
          <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 mt-1">
            Console
          </div>
        </div>

        <div className="flex-1 py-8 px-5">
          <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-3">
            Menu
          </div>
          <nav className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-3.5 py-3 rounded-lg transition-all font-medium text-[13px] ${
                    isActive
                      ? 'bg-[#eef4f8] text-[#005B82]'
                      : 'hover:bg-slate-50 hover:text-slate-900 text-slate-500'
                  }`}
                >
                  <item.icon className={`w-[18px] h-[18px] ${isActive ? 'text-[#005B82]' : 'text-slate-400'}`} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="p-5 border-t border-[#eef4f8]">
          <div className="flex items-center px-3 py-3 mb-3 bg-slate-50 rounded-xl border border-slate-100">
            <div className="w-8 h-8 rounded-full bg-[#005B82] flex items-center justify-center mr-3 text-white font-bold text-xs">
              AD
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-bold text-slate-800 truncate">Administrator</div>
              <div className="text-[10px] text-slate-500 truncate mt-0.5">admin@talentfrontier.com</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-3 py-2.5 text-[13px] font-medium text-slate-500 hover:bg-slate-50 hover:text-red-600 rounded-lg transition-colors border border-transparent hover:border-red-100"
          >
            <LogOut className="w-[16px] h-[16px]" />
            <span>Secure Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="h-[72px] bg-white/80 backdrop-blur-md border-b border-[#eef4f8] flex items-center px-10 z-10 sticky top-0">
          <h1 className="text-lg font-bold text-slate-800 tracking-tight">
            {navItems.find(i => i.href === pathname)?.name || 'Dashboard'}
          </h1>
        </header>
        <div className="flex-1 overflow-auto p-10 relative">
          <div className="max-w-[1200px] mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
