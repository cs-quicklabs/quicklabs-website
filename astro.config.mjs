import { defineConfig, squooshImageService } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: "https://www.quicklabs.in",
  integrations: [tailwind(), mdx(), sitemap()],
  image: {
    service: squooshImageService(),
  }
});