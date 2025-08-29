// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // SPA

  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },

  // plugins
  plugins: [
    '~/plugins/theme.client.ts',
    '~/plugins/i18n.ts'
  ],

  css: ['~/assets/css/main.css'],

  app: {
    baseURL: '/website-lucaswaldes/',


    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&family=Space+Grotesk:wght@300..700&display=swap',
        },
      ],
    },
  },
})
