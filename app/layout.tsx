import type { Metadata } from 'next';
import { Figtree, Roboto } from 'next/font/google';
import './globals.css';
import { headers } from 'next/headers';

// === FONT SETUP ===
const figTree = Figtree({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

// === METADATA (SEO, OG, TWITTER) ===
export const metadata: Metadata = {
  title: 'Wildan Luqmanul Hakim | Portfolio',
  description:
    'Software Engineer passionate about creative, attractive and responsive design. Based in Tokyo, Japan.',
  keywords: [
    'Wildan Luqmanul Hakim',
    'Software Engineer',
    'Frontend Developer',
    'Next.js',
    'Portfolio',
    'Tokyo',
  ],
  authors: [{ name: 'Wildan Luqmanul Hakim' }],
  creator: 'Wildan Luqmanul Hakim',
  metadataBase: new URL('https://wildan.com'),

  // === FAVICON ===
  icons: {
    icon: '/favicon.ico',
  },

  // === OPEN GRAPH (Facebook, LinkedIn, dll) ===
  openGraph: {
    title: 'Wildan Luqmanul Hakim | Portfolio',
    description:
      'Software Engineer passionate about creative, attractive and responsive design.',
    url: 'https://wildan.dev',
    siteName: 'Wildan Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Wildan Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // === TWITTER CARD (X) ===
  twitter: {
    card: 'summary_large_image',
    title: 'Wildan Luqmanul Hakim | Portfolio',
    description:
      'Software Engineer passionate about creative, attractive and responsive design.',
    images: ['/og-image.png'],
    creator: '@wldnlh',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#060010" />
      </head>

      <body
        className={`${figTree.className} ${roboto.className} antialiased bg-[#060010] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
