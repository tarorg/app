import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  // ... other configurations
  output: 'server',
  adapter: cloudflare(),
});
