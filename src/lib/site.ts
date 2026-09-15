import site from '../content/site.json';

export type SiteConfig = typeof site;

export function getSite(): SiteConfig {
  return site;
}
