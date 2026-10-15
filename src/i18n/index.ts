import type { Locale } from '../config';
import { en } from './en';
import { es, type Dictionary } from './es';

export type { Dictionary };

export function isLocale(value: string): value is Locale {
  return value === 'es' || value === 'en';
}

function pickString(primary: string, fallback: string): string {
  return primary.trim() === '' ? fallback : primary;
}

export function dictionary(locale: Locale): Dictionary {
  if (locale !== 'en') return es;

  return {
    meta: {
      title: pickString(en.meta.title, es.meta.title),
      description: pickString(en.meta.description, es.meta.description),
    },
    skip: pickString(en.skip, es.skip),
    nav: {
      homeAria: pickString(en.nav.homeAria, es.nav.homeAria),
      primary: pickString(en.nav.primary, es.nav.primary),
      index: pickString(en.nav.index, es.nav.index),
      services: pickString(en.nav.services, es.nav.services),
      contact: pickString(en.nav.contact, es.nav.contact),
      process: pickString(en.nav.process, es.nav.process),
    },
    lang: {
      es: pickString(en.lang.es, es.lang.es),
      en: pickString(en.lang.en, es.lang.en),
      switchToEn: pickString(en.lang.switchToEn, es.lang.switchToEn),
      switchToEs: pickString(en.lang.switchToEs, es.lang.switchToEs),
    },
    hero: {
      title: pickString(en.hero.title, es.hero.title),
      aside: pickString(en.hero.aside, es.hero.aside),
    },
    index: {
      title: pickString(en.index.title, es.index.title),
      colNumber: pickString(en.index.colNumber, es.index.colNumber),
      colProject: pickString(en.index.colProject, es.index.colProject),
      colDisciplines: pickString(en.index.colDisciplines, es.index.colDisciplines),
      colYear: pickString(en.index.colYear, es.index.colYear),
      colStatus: pickString(en.index.colStatus, es.index.colStatus),
      yours: pickString(en.index.yours, es.index.yours),
      writeUs: pickString(en.index.writeUs, es.index.writeUs),
      captionPlaceholder: pickString(
        en.index.captionPlaceholder,
        es.index.captionPlaceholder,
      ),
      yearSuffix: pickString(en.index.yearSuffix, es.index.yearSuffix),
    },
    services: {
      title: pickString(en.services.title, es.services.title),
      items: es.services.items.map((item, i) => ({
        code: en.services.items[i]?.code || item.code,
        title: pickString(en.services.items[i]?.title ?? '', item.title),
        body: pickString(en.services.items[i]?.body ?? '', item.body),
      })),
    },
    process: {
      title: pickString(en.process.title, es.process.title),
      items: es.process.items.map((item, i) => ({
        n: en.process.items[i]?.n || item.n,
        title: pickString(en.process.items[i]?.title ?? '', item.title),
        body: pickString(en.process.items[i]?.body ?? '', item.body),
      })),
    },
    contact: {
      title: pickString(en.contact.title, es.contact.title),
      call: pickString(en.contact.call, es.contact.call),
      linkedin: pickString(en.contact.linkedin, es.contact.linkedin),
      instagram: pickString(en.contact.instagram, es.contact.instagram),
    },
    footer: {
      copy: pickString(en.footer.copy, es.footer.copy),
      line: pickString(en.footer.line, es.footer.line),
    },
    project: {
      back: pickString(en.project.back, es.project.back),
      inDevelopment: pickString(
        en.project.inDevelopment,
        es.project.inDevelopment,
      ),
    },
  };
}

export function localizedPath(locale: Locale, path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locale === 'es') return normalized;
  if (normalized === '/') return '/en';
  return `/en${normalized}`;
}
