import { defineNuxtConfig } from 'nuxt';
import eslintPlugin from 'vite-plugin-eslint';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  vite: {
    plugins: [
      eslintPlugin(),
    ],
  },
  // nuxt content config
  // content: {},
});
