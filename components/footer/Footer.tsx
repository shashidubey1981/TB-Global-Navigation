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
    // Fetch header and footer data from Contentstack with locale
    const [headerData] = await Promise.all([
      getFooterData(locale as Locale, brandName)
    ]);

    switch (normalizedBrandName) {
        case 'jos-a-bank':
            return <JBFooter data={headerData} />;;
        case 'mens-wearhouse':
            return <TMWFooter data={headerData} />;
        case 'kg-fashion-superstore':
            return <KFSFooter data={headerData} />;
        case 'moores':
            return <MOOFooter data={headerData} />;
        case 'tailoredbrands':
            return <TBFooter data={headerData} />;
        default: // Tailored Brands
            console.warn(`No header component found for brand: ${brandName}. Falling back to mens-wearhouse.`);
            return <TMWFooter data={headerData} />;
    }
  
  }
