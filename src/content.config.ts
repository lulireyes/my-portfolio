import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const impactItem = z.object({
  metric: z.string(),
  description: z.string(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    /** Short homepage card summary */
    summary: z.string().optional(),
    /** Longer summary for the case study intro */
    overview: z.string().optional(),
    /** Homepage tag pills */
    tags: z.array(z.string()).default([]),
    year: z.number().optional(),
    /** Display range, e.g. "2022 – 2025" */
    period: z.string().optional(),
    /** Role title shown in meta */
    role: z.string().optional(),
    /** Longer "My Role" narrative */
    roleSummary: z.string().optional(),
    /** Product / market line in meta sidebar */
    market: z.string().optional(),
    /** Optional team credits */
    team: z.string().optional(),
    /** Highlight paragraphs under Highlights */
    highlights: z.array(z.string()).default([]),
    /** Big metric tiles under Impact */
    impact: z.array(impactItem).default([]),
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
