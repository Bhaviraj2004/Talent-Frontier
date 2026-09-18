"use client";

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import { Shield, Lock, Eye, EyeOff, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

function ResetPasswordForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const id = searchParams.get('id');

  useEffect(() => {
    if (!token || !id) {
      setError('Invalid or missing password reset token.');
    }
  }, [token, id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token || !id) return;
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/reset-password', {
        id,
        token,
        newPassword: password
      });

      if (res.data.success) {
        setSuccess(true);
        // Automatically redirect to login after 3 seconds
        setTimeout(() => {
          router.push('/console');
        }, 3000);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to reset password. The link might be expired.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-6">
        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Password Updated</h2>
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          Your password has been reset successfully. You will be redirected to the login page shortly.
        </p>
        <Link 
          href="/console" 
          className="inline-flex items-center justify-center w-full bg-[#005B82] hover:bg-[#004a69] text-white font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          Go to Login Now
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mb-8 text-center">
        <h2 className="text-[22px] font-bold text-slate-900 mb-2">Create New Password</h2>
        <p className="text-sm text-slate-500">
          Please enter your new password below.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm flex items-center">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* New Password Field */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide">
            New Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Lock className="h-[18px] w-[18px] text-slate-400" />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={!token || !id}
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] text-sm text-slate-900 placeholder-slate-400 transition-all outline-none"
              placeholder="Min 8 characters"
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

        {/* Confirm Password Field */}
        <div className="space-y-1.5">
          <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wide">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
              <Lock className="h-[18px] w-[18px] text-slate-400" />
            </div>
            <input
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              disabled={!token || !id}
              className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#005B82]/20 focus:border-[#005B82] text-sm text-slate-900 placeholder-slate-400 transition-all outline-none"
              placeholder="Confirm new password"
            />
            <button 
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
            >
              {showConfirmPassword ? <EyeOff className="h-[18px] w-[18px]" /> : <Eye className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !token || !id}
          className="w-full bg-[#005B82] hover:bg-[#004a69] text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center group shadow-sm disabled:opacity-70 disabled:cursor-not-allowed mt-4"
        >
          {loading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Updating...
            </span>
          ) : (
            <span className="flex items-center">
              Set New Password
              <CheckCircle2 className="w-[18px] h-[18px] ml-2" />
            </span>
          )}
        </button>
      </form>
    </>
  );
}

export default function ResetPassword() {
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

      {/* Main Card */}
      <div className="bg-white w-full max-w-[440px] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 sm:p-10 relative">
        <Suspense fallback={<div className="text-center text-slate-500 py-10">Loading...</div>}>
          <ResetPasswordForm />
        </Suspense>
      </div>
    </div>
  );
}
