import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale } from './lib/i18n';

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Check if there is any supported locale in the pathname
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // If pathname already has a locale, continue
    // if (pathnameHasLocale) {
    //     return NextResponse.next();
    // }

    // Get locale from Accept-Language header or use default
    const acceptLanguage = request.headers.get('accept-language');
    let locale = defaultLocale;

    if (acceptLanguage) {
        // Parse Accept-Language header (e.g., "en-US,en;q=0.9,es;q=0.8")
        const preferredLocales = acceptLanguage
            .split(',')
            .map((lang) => lang.split(';')[0].trim().toLowerCase().split('-')[0]);

        // Find first matching locale
        for (const preferred of preferredLocales) {
            if (isValidLocale(preferred)) {
                locale = preferred;
                break;
            }
        }
    }

    // Redirect to locale-prefixed path
    // const newUrl = new URL(`/${locale}${pathname}`, request.url);
    // return NextResponse.redirect(newUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|api|favicon.ico|.*\\..*|.*\\.).*)',
    ],
};

