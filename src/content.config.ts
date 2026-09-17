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

/** Structured deep-dive chapters for editorial case-study sections. */
const storyPerspective = z.object({
  title: z.string(),
  body: z.string(),
});

const storyInsight = z.object({
  number: z.string().optional(),
  title: z.string(),
  body: z.string(),
});

const storyPrinciple = z.object({
  title: z.string(),
  body: z.string(),
});

const storyTradeoff = z.object({
  need: z.string(),
  constraint: z.string(),
  response: z.string(),
});

/** Real case-study media (process artefacts, UI, etc.) */
const storyFigure = z.object({
  src: z.string(),
  alt: z.string(),
  caption: z.string().optional(),
  /**
   * Modest process frame by default — not a full-bleed hero.
   * `visual` = bare editorial illustration (inverted in dark mode);
   * `bare` = frameless photo/screenshot shown as-is (no frame, no inversion).
   */
  tone: z.enum(['process', 'default', 'visual', 'bare']).default('process'),
  size: z.enum(['sm', 'md', 'lg', 'full']).default('md'),
});

const storySolution = z.object({
  title: z.string(),
  body: z.string().optional(),
  /** Shown when no figure is provided */
  placeholder: z.string().optional(),
  figure: storyFigure.optional(),
});

const storyCollaborator = z.object({
  role: z.string(),
  contribution: z.string(),
});

const storyMetric = z.object({
  value: z.string(),
  label: z.string(),
  /** When false, treat as unverified / placeholder copy */
  verified: z.boolean().default(true),
  note: z.string().optional(),
});

const storyChapter = z.object({
  id: z.string(),
  title: z.string(),
  layout: z.enum([
    'hero',
    'overview',
    'challenge',
    'system',
    'mapping',
    'insights',
    'strategy',
    'design',
    'constraints',
    'solution',
    'collaboration',
    'impact',
    'reflection',
    'cta',
  ]),
  tagline: z.string().optional(),
  impactLine: z.string().optional(),
  lead: z.string().optional(),
  /**
   * Mid-edit YAML sometimes puts objects in paragraphs; rejecting the whole
   * entry then removes Helpling from Work + static paths (404). Keep strings only.
   */
  paragraphs: z.preprocess((value) => {
    if (!Array.isArray(value)) return [];
    return value.filter((item): item is string => typeof item === 'string');
  }, z.array(z.string()).default([])),
  bullets: z.array(z.string()).default([]),
  pullQuote: z.string().optional(),
  placeholders: z.array(z.string()).default([]),
  /** Real images that replace or sit alongside placeholders */
  figures: z.array(storyFigure).default([]),
  perspectives: z.array(storyPerspective).default([]),
  insights: z.array(storyInsight).default([]),
  principles: z.array(storyPrinciple).default([]),
  constraints: z.array(z.string()).default([]),
  tradeoffs: z.array(storyTradeoff).default([]),
  solutions: z.array(storySolution).default([]),
  collaborators: z.array(storyCollaborator).default([]),
  metrics: z.array(storyMetric).default([]),
  before: z.array(z.string()).default([]),
  after: z.array(z.string()).default([]),
  roleLine: z.string().optional(),
  responsibilities: z.string().optional(),
  challengeLabel: z.string().optional(),
  /** Optional intro line above challenge bullets (e.g. "The new X needed to:") */
  challengeIntro: z.string().optional(),
  contextLabel: z.string().optional(),
  roleLabel: z.string().optional(),
  contactHref: z.string().optional(),
  contactLabel: z.string().optional(),
  /** When true, contact link is rendered inline inside the CTA lead */
  contactInline: z.boolean().default(false),
  contactSuffix: z.string().optional(),
});

const caseSection = z.object({
  id: z.string(),
  title: z.string(),
  emoji: z.string().optional(),
  summary: z.array(z.string()).default([]),
  role: z.string().optional(),
  timeline: z.string().optional(),
  blocks: z.array(caseSectionBlock).default([]),
  /** When present, renders editorial deep-dive instead of summary + blocks */
  story: z.array(storyChapter).optional(),
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
    /**
     * Hidden on the site while true.
     * Default false so a missing/partial `draft` key cannot silently drop
     * published case studies (Helpling) from Work + static paths → 404.
     */
    draft: z.boolean().default(false),
    /**
     * If set, the home card links out instead of opening a case study page.
     * Useful for Behance / Medium pieces.
     */
    externalUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
