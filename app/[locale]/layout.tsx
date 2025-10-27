import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { I18nProvider } from '../internalization/providers';

const SUPPORTED = ['en', 'ja', 'id'] as const;
type Locale = (typeof SUPPORTED)[number];

export async function generateStaticParams() {
  return SUPPORTED.map((locale) => ({ locale }));
}

async function loadMessages(locale: 'en' | 'id' | 'ja') {
  try {
    return (await import(`../internalization/${locale}.json`))
      .default as Record<string, string>;
  } catch {
    return (await import(`../internalization/en.json`))
      .default as unknown as Record<string, string>;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const localeTyped = (locale || 'en') as Locale;
  const ogLocale =
    localeTyped === 'ja' ? 'ja_JP' : localeTyped === 'id' ? 'id_ID' : 'en_US';

  return {
    alternates: {
      languages: {
        en: '/en',
        ja: '/ja',
        id: '/id',
      },
    },
    openGraph: {
      locale: ogLocale,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const localeTyped = locale as Locale;

  if (!SUPPORTED.includes(localeTyped)) notFound();

  const messages = await loadMessages(localeTyped);
  if (!messages) notFound();

  return (
    <I18nProvider locale={localeTyped} messages={messages}>
      {children}
    </I18nProvider>
  );
}
