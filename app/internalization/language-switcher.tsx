'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SUPPORTED_LOCALES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
] as const;

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState('en');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Deteksi bahasa dari URL setiap kali path berubah
  useEffect(() => {
    const segments = pathname.split('/');
    const detectedLocale = segments[1];
    if (SUPPORTED_LOCALES.some((l) => l.code === detectedLocale)) {
      setCurrentLocale(detectedLocale);
    } else {
      setCurrentLocale('en');
    }
  }, [pathname]);

  // Tutup dropdown jika klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Ganti bahasa (langsung update)
  const switchLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPathname = segments.join('/');

    setCurrentLocale(newLocale); // update langsung UI
    setIsOpen(false);
    router.push(newPathname);
  };

  const activeLocale =
    SUPPORTED_LOCALES.find((l) => l.code === currentLocale) ||
    SUPPORTED_LOCALES[0];

  return (
    <div ref={dropdownRef} className="relative select-none z-[9999]">
      {/* === Tombol utama === */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm 
                   font-semibold transition-all duration-200 cursor-pointer
                    text-white"
      >
        <span className="text-lg">{activeLocale.flag}</span>
        <span className="hidden sm:inline">{activeLocale.label}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
      </button>

      {/* === Dropdown === */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 mt-2 w-44 bg-[#0a0a1a]/90 backdrop-blur-lg border border-white/20 
                       rounded-lg shadow-lg overflow-hidden z-[9999]"
          >
            {SUPPORTED_LOCALES.map((locale) => (
              <button
                key={locale.code}
                onClick={() => switchLanguage(locale.code)}
                className={`flex items-center gap-3 w-full px-4 py-2 text-sm text-left text-white 
                           hover:bg-white/10 transition-all cursor-pointer ${
                             currentLocale === locale.code
                               ? 'bg-blue-500/40'
                               : ''
                           }`}
              >
                <span className="text-lg">{locale.flag}</span>
                {locale.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
