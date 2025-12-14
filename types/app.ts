import { Asset, ConsentFormProps, EmbedEntry, Entry, LivePreviewTypeMapper, localeItems, UserFormModal} from './common'
import { ExternalLink, InternalLink } from './common'

// ######################### HEADER LAYOUT FOR JB #########################
export interface JBHeaderData {
    promotion_bar: PromotionBar;
    store_locator: HeaderLink;
    account: HeaderLink;
    wishlist: HeaderLink;
    bag: BagConfig;
    logo: LogoConfig;
    search: SearchConfig;
    main_navigation: MainNavigationEntry[];
}

// ######################### HEADER LAYOUT FOR TMW #########################

export type WebConfig =  Entry & TMWHeaderData & {
    $?: {[key: string]: { [key: string]: string }};
  }

export interface TMWHeaderData {
    promotion_bar: PromotionBar;
    store_locator: HeaderLink;
    account: HeaderLink;
    wishlist: HeaderLink;
    bag: BagConfig;
    logo: LogoConfig;
    search: SearchConfig;
    main_navigation: MainNavigationEntry[];
    $?: LivePreviewTypeMapper<TMWHeaderData>
}

// ######################### HEADER LAYOUT FOR KFS #########################
export interface KFSHeaderData {
    promotion_bar: PromotionBar;
    store_locator: HeaderLink;
    account: HeaderLink;
    wishlist: HeaderLink;
    bag: BagConfig;
    logo: LogoConfig;
    search: SearchConfig;
    main_navigation: MainNavigationEntry[];
}

// ######################### HEADER LAYOUT FOR MOORES #########################
export interface MOOHeaderData {
    promotion_bar: PromotionBar;
    store_locator: HeaderLink;
    account: HeaderLink;
    wishlist: HeaderLink;
    bag: BagConfig;
    logo: LogoConfig;
    search: SearchConfig;
    main_navigation: MainNavigationEntry[];
}

// ######################### HEADER LAYOUT FOR TB #########################
export interface TBHeaderData {
    promotion_bar: PromotionBar;
    store_locator: HeaderLink;
    account: HeaderLink;
    wishlist: HeaderLink;
    bag: BagConfig;
    logo: LogoConfig;
    search: SearchConfig;
    main_navigation: MainNavigationEntry[];
}

// ######################### Interfaces for Header Data #########################

export interface PromotionBar extends Entry{
    enabled: boolean;
    text: string;
    link: string;
    $?: LivePreviewTypeMapper<PromotionBar>
}

export interface HeaderLink extends Entry{
    label: string;
    link: string;
    $?: LivePreviewTypeMapper<HeaderLink>
}

export interface BagConfig {
    count: number;
}

export interface LogoConfig extends Entry{
    alt_text: string;
    link: string;
    logo_image: Asset;
    $?: LivePreviewTypeMapper<LogoConfig>
}

export interface SearchConfig extends Entry{
    placeholder: string;
    $?: LivePreviewTypeMapper<SearchConfig>
}

// ---- Navigation types ----

export interface MainNavigationEntry extends Entry{
    locale: string;
    title: string;
    tags: string[];
    items: MainNavigationItem[];
    $?: LivePreviewTypeMapper<MainNavigationEntry>
}

export interface MainNavigationItem extends Entry{
    text: string;
    link?: string;
    mega_menu: MegaMenu[];
    $?: LivePreviewTypeMapper<MainNavigationItem>
}

export interface MegaMenu extends Entry {
    title: string;
    tags: string[];
    sections: MegaMenuSection[];
    sub_sections?: MegaMenuSection[];
    feature_cards?: FeatureCardGroup[];
    $?: LivePreviewTypeMapper<MegaMenu>
}


export interface MegaMenuSection extends Entry{
    label: string;
    link?: string;
    thumbnail: string | null;
    $?: LivePreviewTypeMapper<MegaMenuSection>
}
export interface FeatureCardGroup {
    cards: FeatureCard[];
  }
  export interface FeatureCard {
    image: FeatureCardImage;
    image_alt_text: string;
    is_thumbnail: boolean;
    title: string;
    subtitle: string;
    cta: FeatureCardCTA;
  }
  export interface FeatureCardCTA {
    text: string;
    cta_url: string;
  }
  
  export interface FeatureCardImage {
    title: string;
    filename: string;
    url: string;
  }