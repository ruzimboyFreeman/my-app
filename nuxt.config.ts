// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  pages:true,
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  nitro: {
    devProxy: {
      "/api": {
        target: "http://localhost:8088", // ✅ Your Spring WebFlux backend
        changeOrigin: true,
        prependPath: false,
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:8088/api", // Use /api as the base URL for all API requests
    },
  },
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui'
  }
})
