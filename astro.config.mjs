// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://sfsdocs.maoacr.com',
	integrations: [
		starlight({
			title: '⚽ SFS',
			head: [
				{ tag: 'meta', attrs: { property: 'og:image', content: 'https://sfsdocs.maoacr.com/og-image.png' } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { property: 'og:image:type', content: 'image/png' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: 'https://sfsdocs.maoacr.com/og-image.png' } },
			],
			social: [],
			customCss: ['./src/styles/custom.css'],
			defaultLocale: 'root',
			sidebar: [
				{
					label: 'Visión',
					items: [
						{ label: 'Producto', slug: 'vision/producto' },
						{ label: 'Modelo de Datos', slug: 'vision/data-model' },
						{ label: 'Flujo de Reservas', slug: 'vision/flujo-reservas' },
						{ label: 'Modo Offline (PWA)', slug: 'vision/offline-pwa' },
						{ label: 'Roadmap Técnico', slug: 'vision/roadmap' },
						{
							label: 'MVP',
							collapsed: false,
							items: [
								{ label: 'Alcance', slug: 'vision/mvp/alcance' },
							],
						},
					],
				},
				{
					label: 'API',
					items: [
						{ label: 'REST', slug: 'api/rest' },
					],
				},
				{
					label: 'Guías',
					items: [
						{ label: 'Seguridad', slug: 'guides/security' },
						{ label: 'MercadoPago', slug: 'guides/mercadopago' },
						{ label: 'Email (Resend)', slug: 'guides/email' },
						{ label: 'Zonas Horarias', slug: 'guides/timezone' },
						{ label: 'Storage', slug: 'guides/storage' },
					],
				},
				{
					label: 'Diseño',
					items: [
						{ label: 'Branding', slug: 'diseno/branding' },
						{ label: 'Design System', slug: 'diseno/design-system' },
					],
				},
				{
					label: 'Referencia',
					items: [
						{ label: 'Algoritmo de Disponibilidad', slug: 'reference/disponibilidad' },
					],
				},
			],
		}),
	],
});
