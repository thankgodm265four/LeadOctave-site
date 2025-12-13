import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

export default defineConfig({
  integrations: [react()],
  adapter: vercel(),
  output: 'static',
  site: 'http://localhost:3000',
  image: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    remotePattern: {
      protocol: 'https'
    }
  },
  vite: {
    build: {

      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom']
          }
        }
      }
    },
    ssr: {
      noExternal: ['@astrojs/react']
    }
  }
});
