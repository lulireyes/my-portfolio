import { getBase } from './paths';

export const LOCALES = ['en', 'es', 'de'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Home URL for a locale, e.g. `/my-portfolio/` (en), `/my-portfolio/es/`, `/my-portfolio/de/`. */
export function localeHome(locale: Locale): string {
  const base = getBase();
  return locale === DEFAULT_LOCALE ? base : `${base}${locale}/`;
}

/** Human-readable label shown in the language switcher. */
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  es: 'ES',
  de: 'DE',
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
    languageName: { en: 'English', es: 'Spanish', de: 'German' },
  },
  es: {
    htmlLang: 'es',
    viewCaseStudy: 'Ver caso de estudio',
    viewCaseStudies: 'Ver casos de estudio',
    journeyCaseStudy: 'Caso de estudio',
    allRightsReserved: 'Todos los derechos reservados.',
    switchLanguage: 'Cambiar idioma',
    languageName: { en: 'Inglés', es: 'Español', de: 'Alemán' },
  },
  de: {
    htmlLang: 'de',
    viewCaseStudy: 'Case Study ansehen',
    viewCaseStudies: 'Case Studies ansehen',
    journeyCaseStudy: 'Case Study',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    switchLanguage: 'Sprache wechseln',
    languageName: { en: 'Englisch', es: 'Spanisch', de: 'Deutsch' },
  },
};

/** Interface strings for a locale. */
export function t(locale: Locale): UIStrings {
  return ui[locale] ?? ui[DEFAULT_LOCALE];
}
