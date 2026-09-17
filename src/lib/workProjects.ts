import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, type Locale } from './i18n';

/** Canonical homepage Work order — Helpling must stay first. */
export const WORK_PROJECT_IDS = ['helpling', 'anymove', 'beelinguapp', 'yoona'] as const;

export type WorkProjectId = (typeof WORK_PROJECT_IDS)[number];

/** Per-locale content collection that holds the case studies. */
const PROJECT_COLLECTION = {
  en: 'projects',
  es: 'projectsEs',
  de: 'projectsDe',
} as const satisfies Record<Locale, 'projects' | 'projectsEs' | 'projectsDe'>;

type ProjectCollection = (typeof PROJECT_COLLECTION)[Locale];
export type ProjectEntry = CollectionEntry<ProjectCollection>;

function collectionFor(locale: Locale): ProjectCollection {
  return PROJECT_COLLECTION[locale] ?? PROJECT_COLLECTION[DEFAULT_LOCALE];
}

/**
 * Load published case studies in fixed Work order for a locale.
 * Throws at build time if any required project is missing (draft/schema dropout).
 */
export async function getWorkProjects(locale: Locale = DEFAULT_LOCALE): Promise<ProjectEntry[]> {
  const collection = collectionFor(locale);
  const published = (await getCollection(collection, ({ data }) => !data.draft)) as ProjectEntry[];
  const byId = new Map(published.map((project) => [project.id, project]));

  return WORK_PROJECT_IDS.map((id) => {
    const project = byId.get(id);
    if (!project) {
      throw new Error(
        `Required Work project "${id}" is missing from the ${collection} collection. ` +
          `Check src/content/projects/${locale}/${id}.md (draft must be false; frontmatter must match schema).`,
      );
    }
    return project;
  });
}

/** Ensure every required case-study page can be generated for a locale. */
export async function getPublishedProjectsOrThrow(
  locale: Locale = DEFAULT_LOCALE,
): Promise<ProjectEntry[]> {
  const collection = collectionFor(locale);
  const projects = (await getCollection(
    collection,
    ({ data }) => !data.draft && !data.externalUrl,
  )) as ProjectEntry[];
  const byId = new Map(projects.map((project) => [project.id, project]));

  for (const id of WORK_PROJECT_IDS) {
    if (!byId.has(id)) {
      throw new Error(
        `Required case study "${id}" was excluded from getStaticPaths (${collection}). ` +
          `Without it, /projects/${id}/ 404s on GitHub Pages.`,
      );
    }
  }

  return projects;
}
