# SFS Docs

Documentación técnica del proyecto **SFS** — SaaS multi-tenant para gestión y reservas de canchas de fútbol.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) |
| Lenguaje | MDX (Markdown + JSX) |
| Hosting | Vercel |
| Proyecto | [`maoacr/sfs-web`](https://github.com/maoacr/sfs-web) |

## Estructura

```
docs/
├── src/content/docs/
│   ├── index.mdx                  # Landing page
│   ├── vision/                    # Visión del producto
│   │   ├── producto.mdx           #   Problema, solución, stack, roadmap
│   │   ├── data-model.mdx         #   Modelo de datos (ERD, entidades, convenciones)
│   │   ├── flujo-reservas.mdx     #   Estados de reserva, bloqueo TTL, reglas
│   │   ├── offline-pwa.mdx        #   Estrategia PWA y service worker
│   │   └── mvp/alcance.mdx        #   Alcance funcional del MVP
│   ├── api/rest.mdx               # Endpoints REST documentados
│   ├── guides/                    # Guías técnicas
│   └── reference/                 # Referencia de algoritmos y decisiones
├── astro.config.mjs               # Configuración de Starlight (sidebar, título)
├── public/                        # Assets estáticos (favicon, etc.)
└── package.json
```

## Desarrollo local

```bash
pnpm install
pnpm dev          # http://localhost:4321
pnpm build        # Build de producción
pnpm preview      # Previsualizar build
```

## Despliegue

El sitio se despliega automáticamente en Vercel al pushear a `main`.

---

Proyecto principal: [`maoacr/sfs-web`](https://github.com/maoacr/sfs-web)
