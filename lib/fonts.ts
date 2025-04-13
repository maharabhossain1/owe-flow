import { Roboto, Kreon, Bricolage_Grotesque } from 'next/font/google';

export const roboto = Roboto({
  variable: '--font-roboto',
  display: 'swap',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});
export const bricolage_grotesque = Bricolage_Grotesque({
  variable: '--font-bricolage_grotesque',
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const kreon = Kreon({
  variable: '--font-kreon',
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
});
