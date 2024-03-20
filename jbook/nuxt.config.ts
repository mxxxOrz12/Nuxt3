// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          'primary-color': '#ea6f5a'
        },
        javascriptEnabled: true,
      }
    }

  }
})
