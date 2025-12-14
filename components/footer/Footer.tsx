import TMWFooter from './mens-wearhouse/TMWFooter';
import JBFooter from './jos-a-bank/JBFooter';
import KFSFooter from './kg-fashion-superstore/KFSFooter';
import MOOFooter from './moores/MOOFooter';
import TBFooter from './tailoredbrands/TBFooter';
import { getFooterData } from '@/lib/contentstack-service';
import type { Locale } from '@/lib/i18n';

export interface FooterProps {
    locale: string;
    brandName: string;
}

export default async function Footer({ locale, brandName }: FooterProps) {
    const normalizedBrandName = brandName.toLowerCase().replace(/[_\s-]/g, '-');
    // Fetch footer data from Contentstack with locale
    const footerData = (await getFooterData(locale as Locale, brandName)) as Record<string, unknown>;

    switch (normalizedBrandName) {
        case 'jos-a-bank':
            return <JBFooter data={footerData} />;
        case 'mens-wearhouse':
            return <TMWFooter data={footerData} />;
        case 'kg-fashion-superstore':
            return <KFSFooter data={footerData} />;
        case 'moores':
            return <MOOFooter data={footerData} />;
        case 'tailoredbrands':
            return <TBFooter data={footerData} />;
        default: // Tailored Brands
            console.warn(`No footer component found for brand: ${brandName}. Falling back to mens-wearhouse.`);
            return <TMWFooter data={footerData} />;
    }
  
  }
