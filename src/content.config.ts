import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const impactItem = z.object({
  metric: z.string(),
  description: z.string(),
});

/** Linked highlight paragraph (anchor jump to a case-study section). */
const highlightLink = z.object({
  before: z.string().default(''),
  title: z.string(),
  href: z.string(),
  after: z.string().default(''),
  /** Bold outcome text after the linked title */
  emphasis: z.string().optional(),
  afterEmphasis: z.string().optional(),
});

const caseSectionBlock = z.object({
  heading: z.string().optional(),
  paragraphs: z.array(z.string()).default([]),
});

const caseSection = z.object({
  id: z.string(),
  title: z.string(),
  emoji: z.string().optional(),
  summary: z.array(z.string()).default([]),
  role: z.string().optional(),
  timeline: z.string().optional(),
  blocks: z.array(caseSectionBlock).default([]),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    /** Short homepage card summary */
    summary: z.string().optional(),
    /** Longer summary for the case study intro (string or paragraphs) */
    overview: z.union([z.string(), z.array(z.string())]).optional(),
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
    /**
     * Highlight paragraphs under Highlights.
     * Plain strings for simple case studies; objects for linked section jumps.
     */
    highlights: z.array(z.union([z.string(), highlightLink])).default([]),
    /** Multi-part case study sections (marquee → title → summary → blocks) */
    sections: z.array(caseSection).default([]),
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
