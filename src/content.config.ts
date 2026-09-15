import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    /** Short homepage card summary */
    summary: z.string().optional(),
    /** Homepage tag pills */
    tags: z.array(z.string()).default([]),
    year: z.number().optional(),
    /** Path under public/, e.g. /img/projects/example/cover.webp */
    cover: z.string().optional(),
    /** Lower numbers appear first */
    order: z.number().default(100),
    /** Hidden on the site while true */
    draft: z.boolean().default(true),
    /**
     * If set, the home card links out instead of opening a case study page.
     * Useful for Behance / Medium pieces.
     */
    externalUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
