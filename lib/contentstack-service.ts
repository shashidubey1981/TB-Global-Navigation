import Contentstack from 'contentstack';
import type { Locale } from './i18n';

// Initialize Contentstack SDK
export const Stack = Contentstack.Stack({
    api_key: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY || '',
    delivery_token: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN || '',
    environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT || 'production',
    region: (process.env.NEXT_PUBLIC_CONTENTSTACK_REGION || 'us') as Contentstack.Region,
});

// Content types
export const CONTENT_TYPES = {
    HEADER: 'header',
    FOOTER: 'footer',
    PROMOTION_BAR: 'promotion_bar',
    NAVIGATION: 'navigation',
} as const;

// Fetch header data from Contentstack
export async function getHeaderData(locale: Locale = 'en', brandName: string) {
    try {
        const Query = Stack.ContentType(`${CONTENT_TYPES.HEADER}_${brandName}`).Query();
        Query.language(locale);
        const result = await Query.toJSON().find();
        console.log('result', result);
        if (result && result[0] && result[0].length > 0) {
            return result[0][0];
        }

        // Return default structure if no content found
        return getDefaultHeaderData(locale);
    } catch (error) {
        console.error('Error fetching header data:', error);
        return getDefaultHeaderData(locale);
    }
}

// Fetch footer data from Contentstack
export async function getFooterData(locale: Locale = 'en', brandName: string) {
    try {
      const Query = Stack.ContentType(`${CONTENT_TYPES.FOOTER}_${brandName}`).Query();
        Query.language(locale);
        const result = await Query.toJSON().find();

        if (result && result[0] && result[0].length > 0) {
            return result[0][0];
        }

        // Return default structure if no content found
        return getDefaultFooterData(locale);
    } catch (error) {
        console.error('Error fetching footer data:', error);
        return getDefaultFooterData(locale);
    }
}

// Default header data structure
function getDefaultHeaderData(locale: Locale = 'en') {
    return {
        promotion_bar: {
            enabled: true,
            text: 'Free shipping on orders over $50',
            link: '#',
        },
        store_locator: {
            label: 'Store Locator',
            link: '/store-locator',
        },
        account: {
            label: 'Account',
            link: '/account',
        },
        wishlist: {
            label: 'Wishlist',
            link: '/wishlist',
        },
        bag: {
            label: 'Bag',
            link: '/cart',
            count: 0,
        },
        logo: {
            url: '/mw_icon_logo.svg',
            alt: 'Logo',
            link: '/',
        },
        search: {
            placeholder: 'Search products...',
        },
        navigation: [
            { label: 'Home', link: '/' },
            { label: 'Products', link: '/products' },
            { label: 'Categories', link: '/categories' },
            { label: 'About', link: '/about' },
            { label: 'Contact', link: '/contact' },
        ],
    };
}

// Default footer data structure
function getDefaultFooterData(locale: Locale = 'en') {
    return {
      links: {
        columns: [
          {
            title: 'Shop',
            items: [
              { label: 'New Arrivals', link: '/new-arrivals' },
              { label: 'Best Sellers', link: '/best-sellers' },
              { label: 'Sale', link: '/sale' },
              { label: 'Gift Cards', link: '/gift-cards' },
            ],
          },
          {
            title: 'Customer Service',
            items: [
              { label: 'Contact Us', link: '/contact' },
              { label: 'Shipping Info', link: '/shipping' },
              { label: 'Returns', link: '/returns' },
              { label: 'FAQ', link: '/faq' },
            ],
          },
          {
            title: 'About',
            items: [
              { label: 'Our Story', link: '/about' },
              { label: 'Careers', link: '/careers' },
              { label: 'Press', link: '/press' },
              { label: 'Sustainability', link: '/sustainability' },
            ],
          },
          {
            title: 'Legal',
            items: [
              { label: 'Privacy Policy', link: '/privacy' },
              { label: 'Terms of Service', link: '/terms' },
              { label: 'Cookie Policy', link: '/cookies' },
              { label: 'Accessibility', link: '/accessibility' },
            ],
          },
        ],
      },
      newsletter: {
        enabled: true,
        title: 'Subscribe to our newsletter',
        description: 'Get the latest updates on new products and upcoming sales',
        placeholder: 'Enter your email',
        buttonText: 'Subscribe',
      },
      social_media: {
        enabled: true,
        title: 'Follow Us',
        links: [
          { platform: 'Facebook', url: 'https://facebook.com' },
          { platform: 'Twitter', url: 'https://twitter.com' },
          { platform: 'Instagram', url: 'https://instagram.com' },
          { platform: 'Pinterest', url: 'https://pinterest.com' },
        ],
      },
      copyright: {
        text: '© {year} All rights reserved.',
        year: new Date().getFullYear(),
      },
      payment_methods: {
        enabled: true,
        methods: [
          { name: 'Visa' },
          { name: 'Mastercard' },
          { name: 'Amex' },
          { name: 'PayPal' },
        ],
      },
    };
  }
