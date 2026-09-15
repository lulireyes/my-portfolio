/** Site base path, always with a trailing slash (e.g. `/my-portfolio/`). */
export function getBase(): string {
  return import.meta.env.BASE_URL.replace(/\/?$/, '/');
}

/** Prefix a root-relative public path with the site base. */
export function withBase(path: string): string {
  const base = getBase();
  if (!path) return base;
  if (/^https?:\/\//.test(path)) return path;
  return `${base}${path.replace(/^\//, '')}`;
}
