"use client";

import { Settings } from "lucide-react";
import { openCookieSettings } from "./cookieUtils";

interface ManageCookiesButtonProps {
  className?: string;
  label?: string;
  showIcon?: boolean;
}

export default function ManageCookiesButton({
  className,
  label = "Manage Cookie Settings",
  showIcon = true,
}: ManageCookiesButtonProps) {
  return (
    <button
      type="button"
      onClick={openCookieSettings}
      className={
        className ||
        "inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 shadow-md hover:shadow-lg transition-all active:scale-[0.98] group/button cursor-pointer"
      }
    >
      {showIcon && (
        <Settings className="w-5 h-5 mr-2 group-hover/button:rotate-90 transition-transform duration-300" />
      )}
      {label}
    </button>
  );
}
