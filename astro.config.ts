import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://reyes-studio.com',
  output: 'static',
  adapter: vercel(),
  devToolbar: { enabled: false },
  integrations: [mdx()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
