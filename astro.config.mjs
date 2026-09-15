// @ts-check
import { defineConfig } from 'astro/config';
import { unified } from '@astrojs/markdown-remark';

const base = '/my-portfolio';

/** Prefix root-relative src/href in Markdown HTML with the site base path. */
function rehypePrefixBase(siteBase) {
  const prefix = siteBase.replace(/\/$/, '');

  return () => {
    return (tree) => {
      walk(tree);

      function walk(node) {
        if (node?.type === 'element' && node.properties) {
          for (const key of ['href', 'src']) {
            const value = node.properties[key];
            if (
              typeof value === 'string' &&
              value.startsWith('/') &&
              !value.startsWith('//') &&
              !value.startsWith(prefix)
            ) {
              node.properties[key] = `${prefix}${value}`;
            }
          }
        }

        for (const child of node.children ?? []) {
          walk(child);
        }
      }
    };
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://lulireyes.github.io',
  base,
  markdown: {
    processor: unified({
      rehypePlugins: [rehypePrefixBase(base)],
    }),
  },
});
