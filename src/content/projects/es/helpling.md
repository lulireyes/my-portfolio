---
title: Helpling
summary: Diseñé y lancé una función de resolución de disputas que redujo los costes operativos en un 35% y mejoró la eficiencia del soporte.
order: 1
draft: false
cover: /img/projects/helpling/cover.webp
overview:
  - Helpling es la plataforma líder de servicios para el hogar en Europa, que conecta a clientes con proveedores de servicios de confianza en múltiples mercados.
  - Me incorporé a Helpling como Diseñadora de Producto y crecí hasta convertirme en Diseñadora de Producto Senior, trabajando en las apps de Cliente y de Partner en Alemania y Singapur. Trabajé en todo, desde experiencias de servicio complejas y nuevas iniciativas de producto hasta crecimiento, retención y experimentación.
  - Mi trabajo se apoyó en la investigación y la evidencia. Combinaba con regularidad insights cualitativos de entrevistas con usuarios y pruebas de usabilidad con datos cuantitativos, analítica de producto y experimentación para entender problemas, cuestionar suposiciones y guiar las decisiones de diseño.
tags:
  - Diseño de extremo a extremo
  - Marketplace
  - Sistemas de diseño
  - Crecimiento
year: 2025
period: Agosto 2022 – Diciembre 2025
role: Diseñadora de Producto Senior
market: Marketplace · Alemania / Singapur / UE
highlights:
  - before: "Diseñé y lancé el "
    title: Resolution Center
    href: "#resolution-center"
    after: ", una nueva experiencia que ayudó a clientes y partners a resolver sus problemas de forma más independiente mientras "
    emphasis: "reducía los costes operativos de soporte en un 35%."
  - before: "Construí el primer "
    title: Design System 1.0
    href: "#design-system"
    after: " de Helpling desde cero, creando una base compartida entre las apps de Cliente y de Partner para "
    emphasis: "mejorar la consistencia y la escalabilidad en todo el producto."
  - before: "Lideré "
    title: Crecimiento, retención y experimentos A/B
    href: "#growth-retention"
    after: " en conversión y retención, combinando insights cualitativos, datos de producto y experimentación para identificar oportunidades y lograr un "
    emphasis: "aumento del 7% en la conversión."
sections:
  - id: resolution-center
    title: Resolution Center
    emoji: "🤝"
    role: Diseñadora de Producto de extremo a extremo
    timeline: 6 meses
    story:
      - id: rc-hero
        layout: hero
        title: Resolution Center
        tagline: Diseñar para dos personas que ambas creen tener razón.
        metrics:
          - value: "-35%"
            label: coste operativo alemán
            verified: true
          - value: "91%"
            label: adopción del autoservicio
            verified: true
          - value: "84%"
            label: resuelto sin un agente
            verified: true
        figures:
          - src: /img/projects/helpling/helpling-rc-hero.jpg
            alt: Resolution Center — formas 3D abstractas de cristal, metal y geometría suave reunidas en torno a un núcleo cálido, sugiriendo estructura emergiendo de la complejidad.
            tone: bare
            size: lg
        paragraphs:
          - Las disputas de Helpling las gestionaba Operaciones, un caso a la vez. Eso funcionaba mientras los volúmenes eran pequeños. Pero en un marketplace, cada nueva reserva puede convertirse en una nueva disputa, así que crecer significaba más trabajo manual.
          - Diseñé un Resolution Center que mueve los casos predecibles al autoservicio y reserva el criterio humano para los que lo necesitan.
        roleLine: Diseñadora de Producto Senior, liderando el diseño de extremo a extremo
        responsibilities: Producto, Operaciones, Datos, Ingeniería

      - id: rc-challenge
        layout: split
        title: El problema
        lead: Cuando un limpiador no se presenta, o las horas facturadas no coinciden con las horas trabajadas, dos personas quedan en lados opuestos y ambas se sienten perjudicadas. Cada uno de esos casos iba a Operaciones para investigar y decidir.
        asideTitle: Tres necesidades, un sistema
        perspectives:
          - title: Clientes
            body: Los clientes querían la prueba de que su problema y su dinero estaban en buenas manos.
          - title: Proveedores
            body: Los proveedores querían que su trabajo y sus ingresos se juzgaran con justicia.
          - title: Operaciones
            body: Operaciones investigaba a mano casos que seguían los mismos pocos patrones.
        figures:
          - src: /img/projects/helpling/helpling-rc-cust-prov-ops.png
            alt: Diagrama de Venn con tres círculos superpuestos etiquetados Customers, Providers y Ops.
            tone: visual
            size: lg
        challengeIntro: El reto de negocio era un modelo de resolución que pudiera crecer con el marketplace sin que el esfuerzo creciera al mismo ritmo, dentro de los límites legales, de políticas y técnicos.

      - id: rc-process
        layout: mapping
        title: Cómo lo abordé
        lead: "Antes de dibujar una pantalla, mapeé el servicio: cómo entraban las disputas, dónde intervenía Operaciones y qué limitaba la automatización. Los datos de casos y las conversaciones con Operaciones mostraron que la mayoría de las disputas repetían un puñado de escenarios. No todos, pero los suficientes para diseñar autoservicio para los predecibles y dejar a las personas el resto."
        figures:
          - src: /img/projects/helpling/helpling-rc-whiteboard-refund-logic.jpg
            alt: Boceto en pizarra de una página de Caso con acciones de Reembolsar y Rechazar, que se ramifica en lógica de reembolso total frente a parcial con opciones por horas y notas de tiempos.
            caption: Lógica temprana de reembolsos y casos en la pizarra — mapeando rutas totales frente a parciales antes de que los flujos se convirtieran en producto.
            tone: process
            size: lg
          - src: /img/projects/helpling/helpling-rc-journey-map-workshop.jpg
            alt: Mesa de taller colaborativo con un mapa de recorrido de UX impreso y notas adhesivas para temas de cliente, problema e interés.
            caption: Descubrimiento multifuncional — el mapeo del recorrido que informó lo que el Resolution Center necesitaba resolver.
            tone: process
            size: lg

      - id: rc-decisions
        layout: strategy
        title: Tres decisiones que lo dieron forma
        lead: "El principio detrás de las tres: dejar que la gente resuelva lo que no requiere personas, y hacer clara la implicación humana cuando sí la requiere."
        principles:
          - title: "1. Mostrar el proceso, no solo el resultado."
            body: "Los resultados justos se sentían injustos cuando la gente no podía ver qué estaba pasando. Las pruebas de usabilidad lo confirmaron: tras abrir un caso, tanto clientes como proveedores tenían dificultades para encontrar su estado. Estaba enterrado. Así que lo moví al frente. Lo primero que cualquiera ve al abrir el Resolution Center es una tarjeta con el estado actual de su caso."
            tradeoff: los límites legales y de políticas restringían lo que podíamos comunicar. Diseñé para la claridad del proceso (estado, información enviada, próximas acciones) en lugar de sobreexplicar una lógica de decisión que no podíamos compartir.
            figures:
              - src: /img/projects/helpling/helpling-rc-transparency-1.png
                alt: Tarjeta de lista de casos que muestra el estado Under review, el ID del caso y el motivo de la disputa Cleaner was late.
                tone: bare
                size: lg
              - src: /img/projects/helpling/helpling-rc-transparency-3.png
                alt: Pantalla de estado del caso en el Resolution Center con una línea de tiempo de progreso para el registro, la revisión y la resolución estimada.
                tone: bare
                size: lg
          - title: "2. Un modelo, dos lados."
            body: Cliente y proveedor comparten la misma estructura de caso, cada uno vista a través de sus propias necesidades.
            tradeoff: sus necesidades podían entrar en conflicto dentro de la misma disputa. Diseñé para la justicia a nivel de marketplace, con ambas partes capaces de leer el proceso, en lugar de optimizar la experiencia para una sola parte.
          - title: "3. Automatizar lo predecible, proteger las excepciones."
            body: Las no presentaciones, las cancelaciones y las horas mal facturadas siguen rutas estructuradas, que terminan en un reembolso total o parcial. Para el negocio, eso significó que más reservas ya no implicaban proporcionalmente más carga de trabajo.
            tradeoff: no todos los casos podían automatizarse. El autoservicio se construye en torno a patrones recurrentes, con rutas explícitas hacia un agente cuando un caso se sale de ellos. El objetivo no era la máxima automatización, sino el nivel adecuado para cada tipo de caso.
        asideTitle: Cómo trabajamos
        paragraphs:
          - Operaciones sacó a la luz los patrones recurrentes y los casos límite, Datos mostró cuáles merecían estructurarse, Ingeniería definió qué podía automatizarse de forma realista y Producto equilibró las prioridades de usuario y de negocio. Mi trabajo fue conectar esas entradas en una sola experiencia a través de las apps de Cliente y Proveedor.
        figures:
          - src: /img/projects/helpling/helpling-rc-figma-iteration-board.png
            alt: Tablero de Figma titulado Resolution Center 1. iteración móvil, que muestra el flujo B de reportar un nuevo problema del cliente y el flujo de respuesta del proveedor, con cuadrículas detalladas de pantallas debajo.
            caption: Primer tablero de iteración móvil — el registro del cliente y los flujos de respuesta del proveedor mapeados de principio a fin antes del pulido de alta fidelidad.
            tone: default
            size: lg

      - id: rc-solution
        layout: solution
        title: La solución
        figures:
          - src: /video/resolution_center.mp4
            alt: Recorrido del Resolution Center mostrando el flujo de resolución de disputas en la app de Helpling.
            tone: bare
            size: full
        paragraphs:
          - ¿Quieres ver el flujo completo?
        contactInline: true
        contactHref: "mailto:lucianareyes@gmail.com"
        contactLabel: Ponte en contacto.

      - id: rc-impact
        layout: impact
        title: Resultados
        metricsInline: true
        metrics:
          - value: "-35%"
            label: coste operativo alemán
            note: Mover los casos recurrentes de la investigación manual al autoservicio estructurado redujo el esfuerzo que Operaciones necesitaba por caso.
            verified: true
          - value: "91%"
            label: adopción del autoservicio
            note: El 84% de los casos se resolvió sin un agente.
            verified: true
        before:
          - Investigación manual de casos recurrentes
          - Capacidad de Operaciones inmovilizada en escenarios predecibles
          - Mayor coste operativo de soporte
          - Visibilidad limitada para clientes y proveedores
        after:
          - Autoservicio estructurado para disputas predecibles
          - Rutas automatizadas donde los patrones lo permitían
          - Operaciones centrada en los casos complejos
          - Un modelo de resolución más escalable en todo el marketplace
        pullQuote: El resultado no fue solo una mejor experiencia de cliente. Redujo la tasa de incidencias del equipo de Operaciones alemán y cambió dónde se necesitaba la capacidad operativa humana.

      - id: rc-learned
        layout: insights
        title: Lo que aprendí
        lead: La justicia y la percepción de justicia no son lo mismo. Un resultado puede ser correcto y aun así sentirse injusto si el proceso es opaco. La tarjeta de estado no cambió el resultado de un solo caso. Cambió cuán justo se sentía el proceso.
        insights:
          - title: Los patrones predecibles podían estructurarse.
            body: Una gran proporción de las disputas seguía escenarios recurrentes. No siempre requerían investigación manual, lo que abrió una vía hacia el autoservicio sin pretender que todos los casos fueran iguales.
          - title: La opacidad genera fricción.
            body: Los usuarios no solo buscaban un resultado. Necesitaban entender qué estaba pasando, qué información se había considerado y qué sucedería a continuación.
          - title: La eficiencia no puede lograrse a costa de la confianza.
            body: Automatizar la resolución solo funciona si ambas partes pueden entender y aceptar el proceso.
        impactLine: La automatización debería eliminar fricción, no la sensación de ser escuchado.

      - id: rc-cta
        layout: cta
        title: Ponte en contacto

  - id: design-system
    title: Design System 1.0
    emoji: "🎨"
    role: Diseñadora de Producto Senior
    timeline: 6 meses
    story:
      - id: ds-hero
        layout: hero
        title: Design System 1.0
        tagline: Escalar un producto empieza por escalar las decisiones.
        impactLine: "Poner orden en el caos: cómo construí el primer Design System multiplataforma de Helpling desde cero."
        figures:
          - src: /img/projects/helpling/helpling-ds-hero.webp
            alt: Design System 1.0 — numerosos componentes modulares organizados en un único sistema isométrico y ordenado.
            tone: default
            size: lg

      - id: ds-overview
        layout: overview
        title: Resumen
        contextLabel: Contexto
        challengeLabel: El desafío
        roleLabel: Mi rol
        paragraphs:
          - "Cuando me incorporé a Helpling, no existía ningún sistema de diseño. Como el producto había escalado rápidamente en múltiples mercados y equipos, la fragmentación de la UI se había impuesto de forma natural: para una única acción como un botón primario, había seis versiones diferentes repartidas por el producto, sin librerías de iconos compartidas ni pautas unificadas."
        lead: Al entrar en este panorama caótico, quise aportar estructura. Lo que empezó como una iniciativa para ordenar mi propio flujo de trabajo evolucionó de forma orgánica hacia la misión de construir el primer Design System compartido de Helpling, diseñado para alinear diseño e ingeniería en toda la compañía.
        roleLine: "Rol: Diseñadora de Producto Senior · Periodo: 6 meses"
        responsibilities: "Responsabilidades: auditoría de producto, arquitectura de componentes, metodología Atomic Design, configuración de una librería de Figma multiplataforma y colaboración entre múltiples equipos."

      - id: ds-problem
        layout: challenge
        title: "El problema real: caos frente a estructura"
        lead: El producto no estaba roto, pero sufría una fricción silenciosa y acumulativa.
        paragraphs:
          - "Una rápida auditoría de producto reveló señales de alarma inmediatas: 6 versiones del botón primario, 3 librerías de iconos distintas y 0 documentación compartida."
          - Los diseñadores reinventaban constantemente la rueda, los ingenieros implementaban variaciones ligeramente distintas de los mismos componentes, y la falta de una única fuente de verdad creaba una carga cognitiva innecesaria para todos.
        figures:
          - src: /img/projects/helpling/helpling-ds-product-screens.png
            alt: Cuatro pantallas móviles de Helpling una junto a otra — selección de proveedor con Anna seleccionada, selector de fecha de octubre, saludo personalizado del panel a Isabela, y FAQ de Ayuda con artículos sugeridos — mostrando el Design System aplicado a lo largo de los flujos del producto.
            caption: Design System 1.0 en el producto — selección de proveedor, agenda, panel y Ayuda, compartiendo un único lenguaje de UI cohesivo.
            tone: default
            size: lg

      - id: ds-approach
        layout: strategy
        title: "Poner orden: el enfoque de abajo hacia arriba"
        lead: Para abordarlo, no esperé permiso ni un mandato de arriba abajo—empecé organizando mi propio trabajo y escalándolo hacia afuera.
        principles:
          - title: El enfoque atómico
            body: Adopté la metodología Atomic Design para estructurar el sistema de forma lógica, descomponiendo la UI desde los átomos hasta las plantillas.
          - title: Colaboración multiplataforma
            body: Trabajando codo a codo con otra diseñadora, nos adentramos en el ecosistema multiplataforma—auditando y reconstruyendo los componentes por separado para Customer App, Partner App y Connect App, desglosados con claridad entre móvil y escritorio.
          - title: Sentar las bases
            body: Establecimos reglas fundamentales de tipografía, espaciado y color usando Auto Layout y Variants de Figma, asegurando que las convenciones de nomenclatura de ingeniería se respetaran desde el primer día.
        figures:
          - src: /img/projects/helpling/helpling-ds-atomic-modular.webp
            alt: Ilustración plana de coloridos bloques de construcción geométricos apilados en formación de escalera junto a la silueta de una pequeña persona sobre un fondo de cuadrícula amarilla.
            caption: Enfoque atómico — bloques de construcción modulares que escalan de partes simples a un sistema coherente.
            tone: default
            size: md
          - src: /img/projects/helpling/helpling-ds-collaboration.webp
            alt: Ilustración plana de dos siluetas de personas enfrentadas con bocadillos de diálogo superpuestos — uno con contorno, otro en teal sólido — sobre un fondo blanco.
            caption: Colaboración e investigación — alineando a diseñadores entre plataformas mediante conversación y crítica compartidas.
            tone: default
            size: md
          - src: /img/projects/helpling/helpling-ds-foundations-scaling.webp
            alt: Ilustración plana de cuadrados morados anidados alineados en la esquina inferior izquierda, enmarcados por un borde de selección negro con tiradores de esquina al estilo de Figma.
            caption: Bases y componentes — escalando desde un origen compartido con estructura y selección claras.
            tone: default
            size: md
          - src: /img/projects/helpling/helpling-ds-modal-component.png
            alt: Paneles de Figma para un componente Modal que muestran la jerarquía de capas anidadas, las propiedades de tamaño y botones, y las variantes de Button anidadas para tamaño, tipo, estado, etiqueta e iconos.
            caption: Las bases por dentro — arquitectura del componente Modal con Auto Layout, propiedades y variantes anidadas de Button en Figma.
            tone: default
            size: lg

      - id: ds-reflection
        layout: reflection
        title: La reflexión y el aprendizaje clave
        paragraphs:
          - "Construir las bases técnicas de un Design System es un hito enorme, pero este proyecto me enseñó una lección senior invaluable: crear los componentes es solo la mitad de la batalla; escalar un sistema por toda una compañía requiere gobernanza activa, defensa continua y una profunda alineación cultural."
          - "Aprendizaje clave: un sistema de diseño no puede sobrevivir solo por la calidad de su UI. La adopción real exige tender puentes entre equipos, asegurar una propiedad compartida y sincronizar el despliegue con el ritmo de la organización."

      - id: ds-cta
        layout: cta
        title: Ponte en contacto
        lead: ¿Te interesa el pensamiento detrás de este proyecto? Escríbeme para saber más.
        contactHref: "mailto:lucianareyes@gmail.com"
        contactLabel: lucianareyes@gmail.com

  - id: growth-retention
    title: Crecimiento, retención y experimentos A/B
    emoji: "🚀"
    role: Diseñadora de Producto (Crecimiento y Retención)
    timeline: Continuo
    story:
      - id: gr-hero
        layout: hero
        title: Crecimiento, retención y experimentos A/B
        tagline: Encontrar la barrera invisible al inicio del funnel — y demostrar la solución cada semana.
        impactLine: +7% de aumento en la conversión, >90% de satisfacción del usuario y una alta adopción a largo plazo en Alemania y Singapur.
        figures:
          - src: /img/projects/helpling/helpling-growth-hero.webp
            alt: Crecimiento y experimentación — caminos en tonos pastel que ascienden hacia un punto brillante, evocando impulso y mejoras iterativas.
            tone: default
            size: lg

      - id: gr-overview
        layout: overview
        title: Resumen
        contextLabel: Contexto
        challengeLabel: Impacto
        roleLabel: Mi rol
        paragraphs:
          - Impulsar las métricas de crecimiento y retención en los mercados de Alemania y Singapur mediante pruebas A/B semanales continuas.
          - Colaborar estrechamente con Product Managers, Datos, Ingeniería, Marketing, Operaciones y stakeholders de negocio.
        lead: "+7% de aumento en la conversión, >90% de satisfacción del usuario y una alta adopción a largo plazo."
        roleLine: "Rol: Diseñadora de Producto (Crecimiento y Retención)"
        responsibilities: "Alcance: estrategia de crecimiento y retención, pruebas A/B semanales, entrevistas con usuarios, pruebas de usabilidad, análisis de la competencia, talleres multifuncionales, diseño de interacción y prototipado"

      - id: gr-challenge
        layout: challenge
        title: El desafío
        lead: Abordar una barrera de comprensión invisible al inicio del funnel que causaba abandonos tempranos a nivel global.
        paragraphs:
          - Los usuarios entraban en el funnel de reserva sin un modelo mental claro de cómo funcionaba Helpling. Esa brecha se manifestaba como dudas, sesiones abandonadas y abandonos tempranos — especialmente entre los clientes primerizos en Alemania y Singapur.
          - "El problema no era una función que faltara. Era una barrera de comprensión en el momento de mayor intención: la gente necesitaba justo el contexto suficiente para sentirse segura de continuar, sin ralentizar el camino de conversión."
        pullQuote: El abandono parecía un problema de conversión. Por debajo, era un problema de claridad.
        figures:
          - src: /img/projects/helpling/helpling-growth-wireflow.jpg
            alt: Bocetos de wireflow móvil dibujados a mano con tinta azul que muestran los pasos de onboarding y reserva de Helpling, incluidas las pantallas de cuenta y dirección.
            caption: Bocetos de descubrimiento para el flujo de onboarding y reserva — wireflows de baja fidelidad usados para poner a prueba el funnel antes del trabajo de alta fidelidad.
            size: md

      - id: gr-methodology
        layout: strategy
        title: Metodología y proceso
        lead: La alineación multifuncional, entrevistas rigurosas con usuarios, pruebas de usabilidad y análisis de la competencia dieron forma a un conjunto acotado de variantes testeables — incluidos signos de interrogación contextuales junto a tres opciones principales.
        principles:
          - title: Opción A — Onboarding clásico
            body: Una introducción familiar de varios pasos pensada para educar a los usuarios antes de entrar en el funnel.
          - title: Opción B — Página de FAQ
            body: Una superficie de respuestas de autoservicio para preguntas comunes, accesible antes o durante el recorrido de reserva.
          - title: Opción C — Modal contextual previo al funnel
            body: Un modal ligero de “How Helpling Works” que explicaba el servicio en contexto, justo antes del funnel — sin forzar una ruta completa de onboarding.
          - title: Signos de interrogación contextuales
            body: Ayudas inline que mostraban explicaciones en el momento de la confusión, testeadas junto a las variantes principales.
        figures:
          - src: /img/projects/helpling/helpling-growth-whiteboard-churn.jpg
            alt: Diagrama de funnel dibujado a mano en pizarra con rotulador rojo, agrupando la fricción del servicio en problemas de cliente y de proveedor.
            caption: Encuadre temprano del problema en la pizarra — mapeando la fricción del funnel en causas de cliente frente a proveedor antes de saltar a las soluciones.
            size: sm
          - src: /img/projects/helpling/helpling-growth-usability-session.png
            alt: Interfaz de prueba de usabilidad remota que muestra la app Helpling Offers junto al vídeo de un participante con los ojos tapados y un registro de actividad de la sesión.
            caption: Sesión de usabilidad remota validando la comprensión de ofertas y reservas — identidad del participante protegida; la señal muestra notas de investigación en directo.
            size: sm
          - src: /img/projects/helpling/helpling-growth-retro-board.png
            alt: Tablero de retrospectiva de equipo con cuatro cuadrantes de notas adhesivas para los temas de continuar, kudos, parar y empezar.
            caption: Contexto de colaboración de una retrospectiva de equipo — cultura y mejora continua junto al workstream de crecimiento.
            size: sm

      - id: gr-experimentation
        layout: solution
        title: Experimentación, diseño de interacción y validación
        lead: La Opción C — el modal contextual previo al funnel “How Helpling Works” — surgió como la variante ganadora. Elaboré el diseño de interacción, microanimaciones fluidas y un traspaso cercano a desarrollo para que la experiencia se sintiera pulida en producción.
        figures:
          - src: /img/projects/helpling/helpling-growth-figma-iteration.jpg
            alt: Tablero de Figma etiquetado como Ticket 1 Iteración con pantallas de punto de entrada, un flujo V1 de texto e iconos, y un panel de especificación de diseño de interacción READ ME.
            caption: Tablero de experimentación del Ticket 1 — puntos de entrada, iteraciones de pantalla V1 y especificaciones de interacción escritas para un traspaso limpio a ingeniería.
            size: md
        solutions:
          - title: Variante ganadora
            body: Validar la Opción C como el camino más claro para reducir el abandono temprano preservando el impulso del funnel.
          - title: Interacción y movimiento
            body: Diseño de interacción a medida y microanimaciones contenidas que reforzaban la comprensión sin añadir fricción — respetando prefers-reduced-motion en la implementación.
          - title: Traspaso a desarrollo
            body: Estrecha colaboración con Ingeniería para lanzar una experiencia lista para producción, alineada con el sistema de diseño y la instrumentación del experimento.

      - id: gr-impact
        layout: impact
        title: Resultados e impacto a largo plazo
        lead: El experimento entregó un aumento de conversión medible y fuertes señales de satisfacción — y permaneció en producción un año después, evidencia de un valor de producto duradero más allá de un test puntual.
        pullQuote: Un experimento semanal que se convirtió en un comportamiento de producto duradero.
        metrics:
          - value: +7%
            label: aumento en la conversión
            verified: true
          - value: ">90%"
            label: satisfacción del usuario
            verified: true
          - value: "1 año+"
            label: aún activo en producción
            verified: true
        before:
          - Barrera de comprensión invisible a la entrada del funnel
          - Abandonos tempranos a nivel global
          - Modelo mental poco claro de cómo funciona Helpling
        after:
          - Modal contextual “How Helpling Works”
          - Mayor conversión y satisfacción
          - Adopción persistente en producción

      - id: gr-cta
        layout: cta
        title: Ponte en contacto
        lead: ¿Te interesa el pensamiento detrás de este proyecto? Escríbeme para saber más.
        contactHref: "mailto:lucianareyes@gmail.com"
        contactLabel: lucianareyes@gmail.com
        figures:
          - src: /video/modal.mp4
            alt: Flow animado de How Helpling Works — explorar cleaner, revisión, confirmación y cancelar o reprogramar.
            tone: bare
            size: md
---
