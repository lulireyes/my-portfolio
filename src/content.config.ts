import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const proyectos = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      number: z.string(),
      disciplines: z.array(z.string()),
      year: z.number(),
      status: z.string(),
      cover: image(),
      coverAlt: z.string(),
      summary: z.string(),
    }),
});

export const collections = { proyectos };
