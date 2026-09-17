import enSite from '../content/site.json';
import esSite from '../content/site.es.json';
import { DEFAULT_LOCALE, type Locale } from './i18n';

type WorkCardOverride = { summary?: string };

export type SiteConfig = typeof enSite & {
  workCards?: Record<string, WorkCardOverride>;
};

const sites: Record<Locale, SiteConfig> = {
  en: enSite as SiteConfig,
  es: esSite as unknown as SiteConfig,
};

/** Homepage/chrome content for a locale (falls back to the default locale). */
export function getSite(locale: Locale = DEFAULT_LOCALE): SiteConfig {
  return sites[locale] ?? sites[DEFAULT_LOCALE];
}
