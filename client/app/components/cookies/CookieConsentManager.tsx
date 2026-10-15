"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Cookie,
  ShieldCheck,
  BarChart3,
  Settings2,
  Megaphone,
  X,
  Check,
  SlidersHorizontal,
  Lock,
} from "lucide-react";
import {
  CookiePreferences,
  DEFAULT_PREFERENCES,
  getStoredCookiePreferences,
  saveCookiePreferences,
} from "./cookieUtils";

export default function CookieConsentManager() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Preference state inside modal
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    setMounted(true);
    const existing = getStoredCookiePreferences();
    if (existing) {
      setPreferences(existing);
    } else {
      // First time visitor, show banner after brief delay for smooth appearance
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen for open-cookie-settings event from any button (e.g. Cookie Policy page or Footer)
  useEffect(() => {
    const handleOpenSettings = () => {
      const current = getStoredCookiePreferences();
      if (current) {
        setPreferences(current);
      }
      setShowModal(true);
    };

    window.addEventListener("open-cookie-settings", handleOpenSettings);
    return () => {
      window.removeEventListener("open-cookie-settings", handleOpenSettings);
    };
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showModal]);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleAcceptAll = () => {
    const fullConsent: CookiePreferences = {
      necessary: true,
      analytics: true,
      preferences: true,
      marketing: true,
    };
    saveCookiePreferences(fullConsent);
    setPreferences(fullConsent);
    setShowBanner(false);
    setShowModal(false);
    triggerToast("All cookies accepted");
  };

  const handleRejectNonEssential = () => {
    const minimalConsent: CookiePreferences = {
      necessary: true,
      analytics: false,
      preferences: false,
      marketing: false,
    };
    saveCookiePreferences(minimalConsent);
    setPreferences(minimalConsent);
    setShowBanner(false);
    setShowModal(false);
    triggerToast("Non-essential cookies declined");
  };

  const handleSaveCustomPreferences = () => {
    saveCookiePreferences(preferences);
    setShowBanner(false);
    setShowModal(false);
    triggerToast("Cookie preferences saved successfully");
  };

  const toggleCategory = (key: keyof Omit<CookiePreferences, "necessary" | "updatedAt">) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!mounted) return null;

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-[9999] flex items-center gap-3 px-5 py-3.5 bg-slate-900/95 dark:bg-white/95 text-white dark:text-slate-900 rounded-2xl shadow-2xl backdrop-blur-md border border-slate-700/50 dark:border-slate-200 text-sm font-medium animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 dark:text-emerald-600 flex items-center justify-center shrink-0">
            <Check className="w-4 h-4" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Bottom Cookie Banner (Only shown if no consent given yet) */}
      {showBanner && !showModal && (
        <aside
          role="region"
          aria-label="Cookie consent banner"
          className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-xl z-50 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-2xl shadow-blue-950/15 animate-in fade-in slide-in-from-bottom-6 duration-400"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-inner">
              <Cookie className="w-6 h-6" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  We respect your privacy
                </h3>
                <button
                  type="button"
                  onClick={() => setShowBanner(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 transition-colors p-1 -mr-1"
                  aria-label="Dismiss banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                We use cookies to improve your browsing experience, analyze site performance, and assist in our marketing efforts. You can choose to accept all or customize your preferences anytime.
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-sm transition-all"
                >
                  Accept All
                </button>
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 active:scale-95 rounded-xl transition-all"
                >
                  Reject Non-Essential
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowBanner(false);
                    setShowModal(true);
                  }}
                  className="px-3.5 py-2 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-950/40 rounded-xl transition-all flex items-center gap-1.5"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Customize
                </button>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 dark:border-zinc-800/80 flex items-center gap-3 text-[11px] text-slate-400 dark:text-zinc-500">
                <Link
                  href="/cookie-policy"
                  className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-2"
                >
                  Read Cookie Policy
                </Link>
                <span>&bull;</span>
                <Link
                  href="/privacy-policy"
                  className="hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Full Preferences Modal */}
      {showModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          {/* Backdrop blur overlay */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setShowModal(false)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-zinc-800 overflow-hidden flex flex-col max-h-[90vh] z-10 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-6 py-5 border-b border-slate-100 dark:border-zinc-800 flex items-start justify-between gap-4 bg-slate-50/50 dark:bg-zinc-800/30">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-inner">
                  <Cookie className="w-6 h-6" />
                </div>
                <div>
                  <h2
                    id="cookie-modal-title"
                    className="text-xl font-bold text-slate-900 dark:text-white"
                  >
                    Cookie Preferences
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                    Customize which cookies you want to permit on Talent Frontier.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body: Cookie Categories */}
            <div className="p-6 overflow-y-auto space-y-4 divide-y divide-slate-100 dark:divide-zinc-800/80">
              
              {/* Category 1: Strictly Necessary */}
              <div className="pt-2 first:pt-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                          Strictly Necessary Cookies
                        </h4>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                          <Lock className="w-2.5 h-2.5" />
                          Always Active
                        </span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                        Required for website navigation, user sessions, cybersecurity protection, and form submissions. These cannot be disabled.
                      </p>
                    </div>
                  </div>

                  {/* Disabled Locked Toggle */}
                  <div className="relative inline-flex h-6 w-11 shrink-0 cursor-not-allowed items-center rounded-full bg-blue-600 opacity-60">
                    <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform" />
                  </div>
                </div>
              </div>

              {/* Category 2: Analytics Cookies */}
              <div className="pt-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <BarChart3 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        Analytics Cookies
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                        Help us count visits and traffic sources so we can measure and improve website performance and see how visitors move around our site.
                      </p>
                    </div>
                  </div>

                  {/* Interactive Toggle */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.analytics}
                    onClick={() => toggleCategory("analytics")}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      preferences.analytics
                        ? "bg-blue-600"
                        : "bg-slate-300 dark:bg-zinc-700"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
                        preferences.analytics ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Category 3: Preference Cookies */}
              <div className="pt-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Settings2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        Preference Cookies
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                        Enable the website to provide enhanced functionality and personalization, such as remembering selected region or interface settings.
                      </p>
                    </div>
                  </div>

                  {/* Interactive Toggle */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.preferences}
                    onClick={() => toggleCategory("preferences")}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      preferences.preferences
                        ? "bg-blue-600"
                        : "bg-slate-300 dark:bg-zinc-700"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
                        preferences.preferences ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Category 4: Marketing Cookies */}
              <div className="pt-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Megaphone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                        Marketing & Advertising Cookies
                      </h4>
                      <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                        May be set through our site by advertising partners to build a profile of your interests and show you relevant talent solutions on other platforms.
                      </p>
                    </div>
                  </div>

                  {/* Interactive Toggle */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.marketing}
                    onClick={() => toggleCategory("marketing")}
                    className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      preferences.marketing
                        ? "bg-blue-600"
                        : "bg-slate-300 dark:bg-zinc-700"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-200 ${
                        preferences.marketing ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-100 dark:border-zinc-800 bg-slate-50/70 dark:bg-zinc-800/40 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="w-full sm:w-auto flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleRejectNonEssential}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-700 transition-colors shadow-sm"
                >
                  Reject All Non-Essential
                </button>
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-4 py-2.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/50 rounded-xl hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors shadow-sm"
                >
                  Accept All
                </button>
              </div>

              <button
                type="button"
                onClick={handleSaveCustomPreferences}
                className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
              >
                <Check className="w-4 h-4" />
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
