// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  typescript: {
    typeCheck: true
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', 'nuxt-icon'],
  css:['/assets/css/global.css'],
  srcDir: 'src',
  runtimeConfig:{
    public:{
      BASE_URL: process.env.NUXT_BASE_API
    }
  }
})
