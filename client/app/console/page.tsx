"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import axios from 'axios';
import { Shield, Mail, Lock, Eye, EyeOff, ArrowRight, Building, LockKeyhole } from 'lucide-react';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      if (res.data.success && res.data.token) {
        // If remember me is checked, token lasts 30 days, else 1 day
        Cookies.set('admin_token', res.data.token, { expires: rememberMe ? 30 : 1 });
        router.push('/console/dashboard');
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSSO = () => {
    alert("SSO configuration is currently pending for this environment.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7f9] via-white to-[#e8eff5] flex flex-col items-center justify-center p-4 font-sans text-slate-900 overflow-hidden">
      
      {/* Header Logo Area */}
      <div className="text-center mb-8 flex flex-col items-center">
        <div className="w-12 h-12 bg-[#eef4f8] text-[#005B82] flex items-center justify-center rounded-xl mb-4 border border-[#d6e5ef] shadow-sm">
          <Shield className="w-6 h-6" />
        </div>
        <h1 className="text-2xl font-serif text-slate-900 tracking-wide font-bold">
          TALENT FRONTIER
        </h1>
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mt-1">
          Management Console
        </p>
      </div>

      {/* Main Login Card */}
      <div className="bg-white w-full max-w-[440px] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 sm:p-10">
        <div className="mb-8">
          <h2 className="text-[22px] font-bold text-slate-900 mb-1">Admin Portal Sign In</h2>
          <p className="text-sm text-slate-500">Enter your administrative credentials to continue.</p>
        </div>

        {error && (
          <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm flex items-center">
            <span className="block sm:inline">{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-1.5">
            <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide">
              Admin Work Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Mail className="h-[18px] w-[18px] text-slate-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] text-sm text-slate-900 placeholder-slate-400 transition-all outline-none"
                placeholder="admin@talentfrontier.com"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                Password
              </label>
              <a href="#" onClick={(e) => { e.preventDefault(); alert('Please contact IT support to reset your password.'); }} className="text-[13px] font-medium text-[#005B82] hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Lock className="h-[18px] w-[18px] text-slate-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] text-sm text-slate-900 placeholder-slate-400 transition-all outline-none tracking-widest"
                placeholder="••••••••••••"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
              >
                {showPassword ? <EyeOff className="h-[18px] w-[18px]" /> : <Eye className="h-[18px] w-[18px]" />}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center pt-1 pb-1">
            <input
              id="remember-me"
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 text-[#005B82] border-slate-300 rounded focus:ring-[#005B82]"
            />
            <label htmlFor="remember-me" className="ml-2.5 block text-[13px] text-slate-600">
              Remember this device for 30 days
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#005B82] hover:bg-[#004a69] text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center group shadow-sm disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
              </span>
            ) : (
              <span className="flex items-center">
                Sign In to Admin Console
                <ArrowRight className="w-[18px] h-[18px] ml-2" />
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
