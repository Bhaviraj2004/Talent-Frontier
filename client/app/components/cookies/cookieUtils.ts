import Cookies from "js-cookie";

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  preferences: boolean;
  marketing: boolean;
  updatedAt?: string;
}

export const COOKIE_CONSENT_KEY = "tf_cookie_consent";

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: true,
  preferences: true,
  marketing: false,
};

export const getStoredCookiePreferences = (): CookiePreferences | null => {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY) || Cookies.get(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookiePreferences;
  } catch {
    return null;
  }
};

export const saveCookiePreferences = (prefs: CookiePreferences) => {
  if (typeof window === "undefined") return;

  const dataToSave = {
    ...prefs,
    necessary: true, // Always locked to true
    updatedAt: new Date().toISOString(),
  };

  try {
    const json = JSON.stringify(dataToSave);
    localStorage.setItem(COOKIE_CONSENT_KEY, json);
    Cookies.set(COOKIE_CONSENT_KEY, json, { expires: 365, sameSite: "lax" });
  } catch (e) {
    console.error("Failed to save cookie preferences", e);
  }

  // Dispatch custom event to notify any listeners
  window.dispatchEvent(
    new CustomEvent("cookie-consent-updated", { detail: dataToSave })
  );
};

export const openCookieSettings = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-cookie-settings"));
  }
};
