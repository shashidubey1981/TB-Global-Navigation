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
export interface TMWHeaderData {
  promotion_bar: PromotionBar;
  store_locator: HeaderLink;
  account: HeaderLink;
  wishlist: HeaderLink;
  bag: BagConfig;
  logo: LogoConfig;
  search: SearchConfig;
  main_navigation: MainNavigationEntry[];
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

export interface PromotionBar {
  enabled: boolean;
  text: string;
  link: string;
}

export interface HeaderLink {
  label: string;
  link: string;
}

export interface BagConfig extends HeaderLink {
  count: number;
}

export interface LogoConfig {
  logo_image: string | null; // URL or null
  alt_text: string;
  link: string;
}

export interface SearchConfig {
  placeholder: string;
}

// ---- Navigation types ----

export interface MainNavigationEntry {
  locale: string;
  title: string;
  tags: string[];
  items: MainNavigationItem[];
}

export interface MainNavigationItem {
  text: string;
  link?: string;
  mega_menu: MegaMenu[];
}

export interface MegaMenu {
  title: string;
  tags: string[];
  sections: MegaMenuSection[];
}

export interface MegaMenuSection {
  title: string;
  links: MegaMenuLink[];
}

export interface MegaMenuLink {
  link_text: string;
  thumbnail: string | null; // could be URL or null
}