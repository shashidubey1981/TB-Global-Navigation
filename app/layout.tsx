import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { lora, oswald, roboto, roboto_condensed } from '@/utils/fonts'
import "./globals.scss";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import { getLocale, defaultLocale } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'TB Global Navigation MFE',
  description: 'header and footer micro-frontend for TB Shell App',
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get locale from Accept-Language header
  const headersList = await headers();
  const acceptLanguage = headersList.get('accept-language');
  let locale = defaultLocale;

  if (acceptLanguage) {
    // Parse Accept-Language header (e.g., "en-US,en;q=0.9,es;q=0.8")
    const preferredLocales = acceptLanguage
      .split(',')
      .map((lang) => lang.split(';')[0].trim().toLowerCase().split('-')[0]);
    
    // Find first matching locale
    for (const preferred of preferredLocales) {
      const validLocale = getLocale(preferred);
      if (validLocale !== defaultLocale || preferred === 'en') {
        locale = validLocale;
        break;
      }
    }
  }

  const validLocale = getLocale(locale);

  return (
    <html lang={validLocale}>
    <body style={{height: '100%'}} className={`${roboto.variable} ${roboto_condensed.variable} ${oswald.variable} ${lora.variable}`} data-fonts={`${roboto.variable}`}>
        <Header locale={validLocale} brandName="mens_wearhouse" />
        <main>{children}</main>
        {/* <Footer locale={validLocale} brandName="mens_wearhouse" /> */}
      </body>
    </html>
  );
}

