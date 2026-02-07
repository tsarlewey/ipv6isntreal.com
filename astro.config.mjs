import { defineConfig } from 'astro/config';

export default defineConfig({
  image: {
    service: { entrypoint: 'astro/assets/services/noop' }
  },
  server: {
    host: '::1',
    port: 4321
  },
  vite: {
    server: {
      host: '::1'
    }
  }
});
