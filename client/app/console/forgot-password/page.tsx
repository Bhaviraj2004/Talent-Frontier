"use client";

import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { Shield, Mail, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await axios.post(`${API_URL}/api/auth/forgot-password`, { email });
      if (res.data.success) {
        setSuccess(true);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || 'Failed to send reset link. Please try again.');
    } finally {
      setLoading(false);
    }
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

      {/* Main Card */}
      <div className="bg-white w-full max-w-[440px] rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 sm:p-10 relative">
        {success ? (
          <div className="text-center py-6">
            <div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Check your inbox</h2>
            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              We've sent a password reset link to <strong>{email}</strong>. 
              Please click the link in the email to set a new password.
            </p>
            <Link 
              href="/console" 
              className="inline-flex items-center justify-center w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium py-2.5 px-4 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Return to Login
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <Link href="/console" className="inline-flex items-center text-sm text-slate-500 hover:text-[#005B82] mb-6 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-1.5" />
                Back
              </Link>
              <h2 className="text-[22px] font-bold text-slate-900 mb-2">Reset Password</h2>
              <p className="text-sm text-slate-500">
                Enter your admin email address and we'll send you a link to reset your password.
              </p>
            </div>

            {error && (
              <div className="mb-6 p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-sm flex items-center">
                <span className="block sm:inline">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
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

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !email}
                className="w-full bg-[#005B82] hover:bg-[#004a69] text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center group shadow-sm disabled:opacity-70 disabled:cursor-not-allowed mt-2"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    Send Reset Link
                    <ArrowRight className="w-[18px] h-[18px] ml-2" />
                  </span>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
