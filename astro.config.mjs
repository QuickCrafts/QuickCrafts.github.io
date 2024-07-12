import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    // @audit
    // site: 'https://www.quickfins.co', needed DNS config and change repository name
    site: 'https://quickcrafts.github.io/',
    build: {
        outDir: 'dist',
    },
});
