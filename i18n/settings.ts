import config from './config.json';

export const getAvailableLocales = () =>
  config.filter(locale => locale.enabled);

export const getAvailableLocaleCodes = () =>
  getAvailableLocales().map(locale => locale.code);

export const getDefaultLocale = () =>
  getAvailableLocales().find(locale => locale.default);

export const defaultLocale = getDefaultLocale()!;

export const availableLocaleCodes = getAvailableLocaleCodes();

export const getAvailableLocalesMap = () =>
  Object.fromEntries(config.map(locale => [locale.code, locale]));
