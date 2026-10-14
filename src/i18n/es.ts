export const es = {
  meta: {
    title: 'Reyes Studio',
    description:
      'Estudio de producto digital. Diseñamos y construimos apps y webs de punta a punta.',
  },
  skip: 'Saltar al contenido',
  nav: {
    homeAria: 'Reyes Studio, inicio',
    primary: 'Principal',
    index: 'Índice',
    services: 'Servicios',
    contact: 'Contacto ↗',
    process: 'Cómo trabajamos',
  },
  lang: {
    es: 'ES',
    en: 'EN',
    switchToEn: 'English',
    switchToEs: 'Español',
  },
  hero: {
    title:
      'Estudio de producto digital. Diseñamos y construimos apps y webs de punta a punta.',
    aside:
      'Diseñadores e ingenieros en el mismo equipo. Escuchamos qué necesitas y te proponemos la mejor solución, de la idea al lanzamiento.',
  },
  index: {
    title: 'Índice de proyectos',
    colNumber: 'N.º',
    colProject: 'Proyecto',
    colDisciplines: 'Disciplinas',
    colYear: 'Año',
    colStatus: 'Estado',
    yours: '¿El tuyo?',
    writeUs: 'Escríbenos ↗',
    captionPlaceholder: '[Pie de foto]',
    yearSuffix: '2026 —',
  },
  services: {
    title: 'Servicios',
    items: [
      {
        code: '(A)',
        title: 'Estrategia y research',
        body: 'Entendemos a tus usuarios y tu negocio antes de diseñar una sola pantalla.',
      },
      {
        code: '(B)',
        title: 'Diseño UX/UI',
        body: 'Flujos, prototipos e interfaces listas para construir.',
      },
      {
        code: '(C)',
        title: 'Desarrollo',
        body: 'Web y apps hechas por ingenieros que trabajan codo a codo con diseño.',
      },
      {
        code: '(D)',
        title: 'Lanzamiento y mejora',
        body: 'Salimos al mercado, medimos y seguimos iterando.',
      },
    ],
  },
  process: {
    title: 'Cómo trabajamos',
    items: [
      {
        n: '01',
        title: 'Escuchamos',
        body: 'Una primera charla para entender qué necesitas.',
      },
      {
        n: '02',
        title: 'Proponemos',
        body: 'Enfoque, alcance y plazos claros, por escrito.',
      },
      {
        n: '03',
        title: 'Diseñamos y construimos',
        body: 'Entregas cortas, con diseño e ingeniería juntos.',
      },
      {
        n: '04',
        title: 'Lanzamos',
        body: 'Publicamos, medimos y planeamos lo que sigue.',
      },
    ],
  },
  contact: {
    title: 'Contacto',
    call: 'Agendar una llamada',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
  },
  footer: {
    copy: '© 2026 Reyes Studio · Valencia, ES — en remoto',
    line: 'Diseño · Ingeniería · Lanzamiento',
  },
  project: {
    back: 'Índice',
    inDevelopment: 'En desarrollo',
  },
} as const;

export type Dictionary = typeof es;
