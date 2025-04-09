import { getRequestConfig } from 'next-intl/server';

import { availableLocaleCodes, defaultLocale } from './settings';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !availableLocaleCodes.includes(locale)) {
    locale = defaultLocale.code;
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
    timeZone: 'UTC',
  };
});
