import { Lora, Oswald, Roboto, Roboto_Condensed, Inter } from 'next/font/google';

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto',
});
export const oswald = Oswald({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap', variable: '--font-oswald' });
export const lora = Lora({ subsets: ['latin'], weight: ['400', '500', '700'], display: 'swap', variable: '--font-lora' });
export const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto-condensed',
});
export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-inter',
});