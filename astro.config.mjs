import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    base: '/QuickFins_Web_v2/',
    integrations: [tailwind()],
    site: 'https://www.quickfins.co',
    output: 'static',
    build: {
        outDir: 'dist',
    },
});
