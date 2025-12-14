/**
 * Main entry point for tb-global-navigation package
 * This file allows direct import without building
 */

// Export contentstack service utilities (optional, for data fetching)
export { getHeaderData, getFooterData } from './lib/contentstack-service';
export type { Locale } from './lib/i18n';
