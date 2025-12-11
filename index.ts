/**
 * Main entry point for tb-global-navigation package
 * This file allows direct import without building
 * 
 * Usage in other Next.js apps:
 * import { Header } from 'tb-global-navigation';
 */

// Export Header component and types
export { default as Header } from './components/header/Header';
export { default as Footer } from './components/footer/Footer';
// Export all header sub-components
export * from './components/header';
// Export Footer component and types
export * from './components/footer';
// Export contentstack service utilities (optional, for data fetching)
export { getHeaderData, getFooterData } from './lib/contentstack-service';
export type { Locale } from './lib/i18n';
