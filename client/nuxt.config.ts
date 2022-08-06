import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
  },
  vite: {
    plugins: [
      eslintPlugin(),
    ],
  },
  // nuxt content config
  // content: {},
});
