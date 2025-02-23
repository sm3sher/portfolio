import { routing } from '@/i18n/routing';
import createMiddleware from 'next-intl/middleware';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    '/',
    // Match only internationalized pathnames
    '/(en|de)/:path*',
    // Enable redirects that add missing locales
    '/((?!_next|.*\\..*).*)',
  ],
};
