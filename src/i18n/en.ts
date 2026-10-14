import type { Dictionary } from './es';

/**
 * English copy is not written in this phase.
 * Keys match `es.ts` so routes under `/en` can be translated later.
 * Empty strings fall back to Spanish at lookup time.
 */
export const en = {
  meta: {
    title: '',
    description: '',
  },
  skip: '',
  nav: {
    homeAria: '',
    primary: '',
    index: '',
    services: '',
    contact: '',
    process: '',
  },
  lang: {
    es: 'ES',
    en: 'EN',
    switchToEn: 'English',
    switchToEs: 'Español',
  },
  hero: {
    title: '',
    aside: '',
  },
  index: {
    title: '',
    colNumber: '',
    colProject: '',
    colDisciplines: '',
    colYear: '',
    colStatus: '',
    yours: '',
    writeUs: '',
    captionPlaceholder: '',
    yearSuffix: '',
  },
  services: {
    title: '',
    items: [
      { code: '(A)', title: '', body: '' },
      { code: '(B)', title: '', body: '' },
      { code: '(C)', title: '', body: '' },
      { code: '(D)', title: '', body: '' },
    ],
  },
  process: {
    title: '',
    items: [
      { n: '01', title: '', body: '' },
      { n: '02', title: '', body: '' },
      { n: '03', title: '', body: '' },
      { n: '04', title: '', body: '' },
    ],
  },
  contact: {
    title: '',
    call: '',
    linkedin: '',
    instagram: '',
  },
  footer: {
    copy: '',
    line: '',
  },
  project: {
    back: '',
    inDevelopment: '',
  },
} satisfies {
  [K in keyof Dictionary]: Dictionary[K] extends string
    ? string
    : Dictionary[K];
};
