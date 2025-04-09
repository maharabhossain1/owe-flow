import createMiddleware from 'next-intl/middleware';

import { availableLocaleCodes, defaultLocale } from './i18n/settings';

export default createMiddleware({
  locales: availableLocaleCodes,
  defaultLocale: defaultLocale.code,
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
