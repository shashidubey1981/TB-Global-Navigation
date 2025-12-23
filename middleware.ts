import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { initializePersonalizeSDK } from '@/config/personalization'

export async function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    let sdk: any = null;
    let variantParam: string | null = null;
    
    try {
        sdk = await initializePersonalizeSDK(request as any);
        if (sdk) {
            variantParam = sdk.getVariantParam();
        }
    } catch (error) {
        console.error('Failed to initialize personalization SDK:', error);
        // Continue without personalization if SDK initialization fails
    }

    const response = NextResponse.next();
    if (sdk) {
        console.log('Adding personalization state to response');
        await sdk.addStateToResponse(response as any);
    }
    return response;

}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|api|favicon.ico|.*\\..*|.*\\.).*)',
    ],
};

