# Reyes Studio

Sitio estático de [reyes-studio.com](https://reyes-studio.com): estudio de producto digital (diseño + ingeniería), Valencia.

Stack: Astro + TypeScript estricto, CSS propio, MDX, i18n (`/` ES, `/en` EN), Fontsource (Archivo variable con `wdth`, DM Mono), output estático para Vercel.

## Local

```bash
npm install
npm run dev
```

Abre `http://localhost:4321`.

```bash
npm run build
npm run preview
```

## Contenido

- Copy: `src/i18n/es.ts` (inglés listo para traducir en `src/i18n/en.ts`)
- Contacto / redes: `src/config.ts`
- Proyectos: `src/content/proyectos/*.mdx`
