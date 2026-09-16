import { getCollection, type CollectionEntry } from 'astro:content';

/** Canonical homepage Work order — Helpling must stay first. */
export const WORK_PROJECT_IDS = ['helpling', 'anymove', 'beelinguapp', 'yoona'] as const;

export type WorkProjectId = (typeof WORK_PROJECT_IDS)[number];

/**
 * Load published case studies in fixed Work order.
 * Throws at build time if any required project is missing (draft/schema dropout).
 */
export async function getWorkProjects(): Promise<CollectionEntry<'projects'>[]> {
  const published = await getCollection('projects', ({ data }) => !data.draft);
  const byId = new Map(published.map((project) => [project.id, project]));

  return WORK_PROJECT_IDS.map((id) => {
    const project = byId.get(id);
    if (!project) {
      throw new Error(
        `Required Work project "${id}" is missing from the projects collection. ` +
          `Check src/content/projects/${id}.md (draft must be false; frontmatter must match schema).`,
      );
    }
    return project;
  });
}

/** Ensure every required case-study page can be generated. */
export async function getPublishedProjectsOrThrow(): Promise<CollectionEntry<'projects'>[]> {
  const projects = await getCollection(
    'projects',
    ({ data }) => !data.draft && !data.externalUrl,
  );
  const byId = new Map(projects.map((project) => [project.id, project]));

  for (const id of WORK_PROJECT_IDS) {
    if (!byId.has(id)) {
      throw new Error(
        `Required case study "${id}" was excluded from getStaticPaths. ` +
          `Without it, /projects/${id}/ 404s on GitHub Pages.`,
      );
    }
  }

  return projects;
}
