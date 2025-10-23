"use client";
import { usePathname, useRouter } from "next/navigation";
import { useContext } from "react";
import { Ctx } from "./providers";

const SUPPORTED_LOCALES = ["en", "id", "ja"] as const;

// component buat swithc language,
export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const context = useContext(Ctx);
  const currentLocale = context?.locale || "en";

  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    const newPathname = segments.join("/");
    router.push(newPathname);
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      {SUPPORTED_LOCALES.map((locale, index) => (
        <button
          key={`${locale}-${index}`}
          onClick={() => switchLanguage(locale)}
          className={`px-3 py-2 rounded-xl shadow-md text-sm ${currentLocale === locale ? "bg-rose-500" : "bg-zinc-300"}`}>
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
