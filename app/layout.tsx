import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { lora, oswald, roboto, roboto_condensed } from '@/utils/fonts'
import "./globals.scss";
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

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
  let locale = 'en';
  let brandName = 'TMW';

  return (
    <html lang={locale}>
    <body className={`${roboto.variable} ${roboto_condensed.variable} ${oswald.variable} ${lora.variable}`} data-fonts={`${roboto.variable}`}>
        <Header locale={locale} brandName={brandName} />
        <main>{children}</main>
        {/* <Footer locale={validLocale} brandName="mens_wearhouse" /> */}
      </body>
    </html>
  );
}

