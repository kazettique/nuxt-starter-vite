// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
    strict: true,
    shim: false,
    tsConfig: {
      compilerOptions: {
        strict: true,
        types: ['@pinia/nuxt', '@types/doubleclick-gpt'],
      },
    },
  },
  imports: {
    autoImport: false,
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@pinia/nuxt'],

  routeRules: {
    '/home': { ssr: true },
  },
});
