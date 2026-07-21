// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// Static output, deployed to Cloudflare Pages (no adapter needed — plain static `dist`).
export default defineConfig({
  site: 'https://listeraero.com',
});
