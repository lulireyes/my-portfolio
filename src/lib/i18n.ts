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

/** Case-study page + editorial chrome strings. */
type CaseStudyStrings = {
  summary: string;
  highlights: string;
  role: string;
  year: string;
  productMarket: string;
  myRole: string;
  workedWith: string;
  team: string;
  focus: string;
  process: string;
  impact: string;
  timeline: string;
  prevPrefix: string;
  nextPrefix: string;
  nextSuffix: string;
  projectDetails: string;
  additionalDetails: string;
  adjacentCaseStudies: string;
  detailsSuffix: string;
  kicker: string;
  context: string;
  challenge: string;
  before: string;
  after: string;
  userNeed: string;
  constraint: string;
  designResponse: string;
  tradeoffsLabel: string;
  tradeoffLabel: string;
  communicate: string;
  customerProvider: string;
  ctaLead: string;
  ctaLink: string;
  expandImage: string;
  closeLightbox: string;
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
  caseStudy: CaseStudyStrings;
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
    caseStudy: {
      summary: 'Summary',
      highlights: 'Highlights',
      role: 'Role',
      year: 'Year',
      productMarket: 'Product / Market',
      myRole: 'My Role',
      workedWith: 'Worked with',
      team: 'Team',
      focus: 'Focus',
      process: 'Process',
      impact: 'Impact',
      timeline: 'Timeline',
      prevPrefix: '← Previous:',
      nextPrefix: 'Next:',
      nextSuffix: '→',
      projectDetails: 'Project details',
      additionalDetails: 'Additional project details',
      adjacentCaseStudies: 'Adjacent case studies',
      detailsSuffix: 'details',
      kicker: 'Case Study',
      context: 'Context',
      challenge: 'The challenge',
      before: 'Before',
      after: 'After',
      userNeed: 'User need',
      constraint: 'Constraint',
      designResponse: 'Design response',
      tradeoffsLabel: 'Design trade-offs',
      tradeoffLabel: 'Trade-off:',
      communicate: 'The experience needed to communicate:',
      customerProvider: 'Customer + Provider',
      ctaLead: 'Want to know more about this project?',
      ctaLink: 'Let’s chat.',
      expandImage: 'View larger image',
      closeLightbox: 'Close image',
    },
  },
  es: {
    htmlLang: 'es',
    viewCaseStudy: 'Ver caso de estudio',
    viewCaseStudies: 'Ver casos de estudio',
    journeyCaseStudy: 'Caso de estudio',
    allRightsReserved: 'Todos los derechos reservados.',
    switchLanguage: 'Cambiar idioma',
    languageName: { en: 'Inglés', es: 'Español', de: 'Alemán' },
    caseStudy: {
      summary: 'Resumen',
      highlights: 'Aspectos destacados',
      role: 'Rol',
      year: 'Año',
      productMarket: 'Producto / Mercado',
      myRole: 'Mi rol',
      workedWith: 'Trabajé con',
      team: 'Equipo',
      focus: 'Enfoque',
      process: 'Proceso',
      impact: 'Impacto',
      timeline: 'Cronograma',
      prevPrefix: '← Anterior:',
      nextPrefix: 'Siguiente:',
      nextSuffix: '→',
      projectDetails: 'Detalles del proyecto',
      additionalDetails: 'Detalles adicionales del proyecto',
      adjacentCaseStudies: 'Casos de estudio adyacentes',
      detailsSuffix: 'detalles',
      kicker: 'Caso de estudio',
      context: 'Contexto',
      challenge: 'El desafío',
      before: 'Antes',
      after: 'Después',
      userNeed: 'Necesidad del usuario',
      constraint: 'Restricción',
      designResponse: 'Respuesta de diseño',
      tradeoffsLabel: 'Compromisos de diseño',
      tradeoffLabel: 'Compromiso:',
      communicate: 'La experiencia necesitaba comunicar:',
      customerProvider: 'Cliente + Proveedor',
      ctaLead: '¿Quieres saber más sobre este proyecto?',
      ctaLink: 'Hablemos.',
      expandImage: 'Ver imagen más grande',
      closeLightbox: 'Cerrar imagen',
    },
  },
  de: {
    htmlLang: 'de',
    viewCaseStudy: 'Case Study ansehen',
    viewCaseStudies: 'Case Studies ansehen',
    journeyCaseStudy: 'Case Study',
    allRightsReserved: 'Alle Rechte vorbehalten.',
    switchLanguage: 'Sprache wechseln',
    languageName: { en: 'Englisch', es: 'Spanisch', de: 'Deutsch' },
    caseStudy: {
      summary: 'Zusammenfassung',
      highlights: 'Highlights',
      role: 'Rolle',
      year: 'Jahr',
      productMarket: 'Produkt / Markt',
      myRole: 'Meine Rolle',
      workedWith: 'Zusammenarbeit mit',
      team: 'Team',
      focus: 'Schwerpunkt',
      process: 'Prozess',
      impact: 'Wirkung',
      timeline: 'Zeitrahmen',
      prevPrefix: '← Zurück:',
      nextPrefix: 'Weiter:',
      nextSuffix: '→',
      projectDetails: 'Projektdetails',
      additionalDetails: 'Weitere Projektdetails',
      adjacentCaseStudies: 'Benachbarte Case Studies',
      detailsSuffix: 'Details',
      kicker: 'Case Study',
      context: 'Kontext',
      challenge: 'Die Herausforderung',
      before: 'Vorher',
      after: 'Nachher',
      userNeed: 'Nutzerbedürfnis',
      constraint: 'Einschränkung',
      designResponse: 'Design-Antwort',
      tradeoffsLabel: 'Design-Kompromisse',
      tradeoffLabel: 'Trade-off:',
      communicate: 'Die Erfahrung musste Folgendes vermitteln:',
      customerProvider: 'Kunde + Anbieter',
      ctaLead: 'Du willst mehr über dieses Projekt wissen?',
      ctaLink: 'Lass uns sprechen.',
      expandImage: 'Größeres Bild anzeigen',
      closeLightbox: 'Bild schließen',
    },
  },
};

/** Interface strings for a locale. */
export function t(locale: Locale): UIStrings {
  return ui[locale] ?? ui[DEFAULT_LOCALE];
}
