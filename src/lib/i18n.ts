import { getBase } from './paths';

export const LOCALES = ['en', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Home URL for a locale, e.g. `/my-portfolio/` (en) or `/my-portfolio/es/` (es). */
export function localeHome(locale: Locale): string {
  const base = getBase();
  return locale === DEFAULT_LOCALE ? base : `${base}es/`;
}

/** Human-readable label shown in the language switcher. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
};

/** Interface strings that live in code rather than in site content. */
type UIStrings = {
  htmlLang: string;
  viewCaseStudy: string;
  viewCaseStudies: string;
  journeyCaseStudy: string;
  allRightsReserved: string;
  switchLanguage: string;
  languageName: Record<Locale, string>;
};

export const ui: Record<Locale, UIStrings> = {
  en: {
    htmlLang: 'en',
    viewCaseStudy: 'View case study',
    viewCaseStudies: 'View case studies',
    journeyCaseStudy: 'Case study',
    allRightsReserved: 'All rights reserved.',
    switchLanguage: 'Switch language',
    languageName: { en: 'English', es: 'Spanish' },
  },
  es: {
    htmlLang: 'es',
    viewCaseStudy: 'Ver caso de estudio',
    viewCaseStudies: 'Ver casos de estudio',
    journeyCaseStudy: 'Caso de estudio',
    allRightsReserved: 'Todos los derechos reservados.',
    switchLanguage: 'Cambiar idioma',
    languageName: { en: 'Inglés', es: 'Español' },
  },
};

/** Interface strings for a locale. */
export function t(locale: Locale): UIStrings {
  return ui[locale] ?? ui[DEFAULT_LOCALE];
}
