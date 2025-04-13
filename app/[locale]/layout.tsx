import type { Metadata } from 'next';
import '@/app/globals.css';
import { setRequestLocale } from 'next-intl/server';

import { defaultLocale, getAvailableLocalesMap } from '@/i18n/settings';
import { bricolage_grotesque, kreon, roboto } from '@/lib/fonts';
import { LocaleProvider } from '@/providers/locale-provider';

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

  const fontClasses = [
    roboto.variable,
    kreon.variable,
    bricolage_grotesque.variable,
  ].join(' ');

  return (
    <html lang={hrefLang} dir={langDir} className={`${fontClasses}`}>
      <body
        suppressHydrationWarning
        className={`font-bricolage_grotesque antialiased`}
      >
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}
