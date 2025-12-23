import TMWHeader from './mens-wearhouse/TMWHeader';
import JBHeader from './jos-a-bank/JBHeader';
import KFSHeader from './kg-fashion-superstore/KFSHeader';
import MOOHeader from './moores/MOOHeader';
import TBHeader from './tailoredbrands/TBHeader';
// import { usePersonalization } from '@/context'
import { getHeaderEntries, navigationReferenceIncludes } from '@/services';
import { onEntryChange } from '@/config'
import { App } from '@/types';
import type { EmbeddedItem } from '@contentstack/utils/dist/types/Models/embedded-object';

export interface HeaderProps {
    locale: string;
    brandName: string;
}

export default async function Header({ locale, brandName }: HeaderProps) {
    console.log('normalizedBrandName', brandName);
    const refUids = [
        ...navigationReferenceIncludes
    ]
    const webConfigRes = await getHeaderEntries<EmbeddedItem>(brandName.toLowerCase(), locale, refUids, {});
    console.log('result', webConfigRes);
    // Extract the first entry from the array and cast to any to allow different header types
    const headerData = webConfigRes?.[0] as any;
    

    switch (brandName) {
        case 'JB':
            return <JBHeader data={headerData} />;;
        case 'TMW':
            return <TMWHeader data={headerData} />;
        case 'KFS':
            return <KFSHeader data={headerData} />;
        case 'MSP':
            return <MOOHeader data={headerData} />;
        case 'TB':
            return <TBHeader data={headerData} />;
        default: // Tailored Brands
            console.warn(`No header component found for brand: ${brandName}. Falling back to mens_wearhouse.`);
            return <TMWHeader data={headerData} />;
    }
  
  }
