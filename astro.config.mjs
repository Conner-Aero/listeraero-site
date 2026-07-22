// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
// On-demand rendering deployed as a Cloudflare Worker. Every page still
// prerenders to static HTML (see `export const prerender = true` on each
// page) — only src/pages/api/contact.ts runs server-side, since Cloudflare
// no longer supports the old Pages `functions/` directory for static sites.
export default defineConfig({
  site: 'https://listeraero.com',
  output: 'server',
  adapter: cloudflare(),
});
