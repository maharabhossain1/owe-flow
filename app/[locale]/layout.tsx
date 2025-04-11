import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '@/app/globals.css';
import { setRequestLocale } from 'next-intl/server';

import { defaultLocale, getAvailableLocalesMap } from '@/i18n/settings';
import { LocaleProvider } from '@/providers/locale-provider';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'OweFlow',
  description:
    'Manage money lent to friends and family with ease. Track borrowing, set repayment reminders, and maintain healthy financial relationships with our intuitive personal lending tracker.',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  setRequestLocale(locale);

  const localesMap = getAvailableLocalesMap();
  const { langDir, hrefLang } = localesMap[locale] || defaultLocale;

  return (
    <html lang={hrefLang} dir={langDir}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
