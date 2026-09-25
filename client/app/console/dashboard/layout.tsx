"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { LayoutDashboard, LogOut, Users, Activity, ChevronRight, Menu, X } from 'lucide-react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isAuth, setIsAuth] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
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

  // Close sidebar on route change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    Cookies.remove('admin_token');
    router.push('/console');
  };

  if (!isAuth) {
    return <div className="min-h-screen bg-white" />;
  }

  const navItems = [
    { name: 'Overview', href: '/console/dashboard', icon: LayoutDashboard },
    { name: 'Leads', href: '/console/dashboard/leads', icon: Users },
  ];

  return (
    <div className="min-h-screen flex bg-[#fafafa] font-sans text-neutral-900">
      
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-[260px] sm:w-[252px] bg-white flex flex-col border-r border-neutral-200/80 z-50
        transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:transform-none
      `}>
        
        {/* Brand */}
        <div className="px-5 sm:px-7 py-5 sm:py-7 border-b border-neutral-100 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-neutral-900 rounded-md sm:rounded-lg flex items-center justify-center">
              <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[10px] sm:text-[11px] font-extrabold text-neutral-900 tracking-tight leading-none">
                TALENT FRONTIER
              </div>
              <div className="text-[7.5px] sm:text-[8px] font-semibold text-neutral-400 tracking-[0.15em] uppercase mt-0.5">
                Admin Console
              </div>
            </div>
          </div>
          {/* Close button - mobile only */}
          <button 
            onClick={() => setSidebarOpen(false)} 
            className="lg:hidden w-8 h-8 flex items-center justify-center text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" strokeWidth={2} />
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 py-5 sm:py-6 px-3 sm:px-4">
          <div className="text-[10px] font-bold text-neutral-400 uppercase tracking-[0.12em] mb-3 px-3">
            Navigation
          </div>
          <nav className="space-y-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between px-3 py-3 sm:py-2.5 rounded-xl transition-all duration-200 group ${
                    isActive
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className={`w-[18px] h-[18px] sm:w-[17px] sm:h-[17px] ${isActive ? 'text-white' : 'text-neutral-900'}`} strokeWidth={2} />
                    <span className="text-[14px] sm:text-[13px] font-semibold">{item.name}</span>
                  </div>
                  {isActive && <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer / User */}
        <div className="p-3 sm:p-4 border-t border-neutral-100">
          <div className="flex items-center px-3 py-2.5 mb-2">
            <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center mr-3 text-white text-[11px] font-bold">
              A
            </div>
            <div className="overflow-hidden flex-1">
              <div className="text-[12px] font-bold text-neutral-900 truncate">Administrator</div>
              <div className="text-[10px] text-neutral-400 truncate">admin@talentfrontier.com</div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center space-x-2 px-3 py-2.5 sm:py-2 text-[13px] sm:text-[12px] font-semibold text-neutral-400 hover:bg-red-50 hover:text-red-600 rounded-xl transition-all duration-200"
          >
            <LogOut className="w-[15px] h-[15px] sm:w-[14px] sm:h-[14px]" strokeWidth={2} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen lg:h-screen lg:overflow-hidden relative w-full">
        <header className="h-[56px] sm:h-[60px] bg-white/90 backdrop-blur-xl border-b border-neutral-200/60 flex items-center justify-between px-4 sm:px-8 z-10 sticky top-0 shrink-0">
          <div className="flex items-center space-x-3">
            {/* Hamburger - mobile */}
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden w-9 h-9 flex items-center justify-center text-neutral-900 hover:bg-neutral-100 rounded-xl transition-colors -ml-1"
            >
              <Menu className="w-5 h-5" strokeWidth={2} />
            </button>
            <div className="w-1.5 h-5 bg-neutral-900 rounded-full hidden sm:block"></div>
            <h1 className="text-[14px] sm:text-[15px] font-bold text-neutral-900 tracking-tight">
              {navItems.find(i => i.href === pathname)?.name || 'Dashboard'}
            </h1>
          </div>
          <div className="text-[10px] sm:text-[11px] font-medium text-neutral-400 hidden sm:block">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>
        <div className="flex-1 lg:overflow-auto p-4 sm:p-6 lg:p-8 relative">
          <div className="max-w-[1140px] mx-auto">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}
