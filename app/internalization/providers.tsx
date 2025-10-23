"use client";
import { createContext, useContext, useMemo, ReactNode } from "react";

type I18nCtx = { locale: string; t: (k: string) => string };

export const Ctx = createContext<I18nCtx | null>(null);

export function I18nProvider({ locale, messages, children }: { locale: string; messages: Record<string, string>; children: ReactNode }) {
  const value = useMemo(() => ({ locale, t: (k: string) => messages[k] ?? k }), [locale, messages]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

// Translate function buat read json file
export function useT() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useT must be used within I18nProvider");
  return v.t;
}

// Function to detect current lang
export function useLocale() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useLocale must be used within I18nProvider");
  return v.locale;
}
