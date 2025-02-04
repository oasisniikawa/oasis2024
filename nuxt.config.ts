// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],

  postcss: {
    plugins: {
      tailwindcss: {
        cssPath: ['~/assets/css/tailwind.css', { injectPosition: "first" }],
        configPath: 'tailwind.config',
        exposeConfig: {
          level: 2
        },
        config: {},
        viewer: true,        
      },
      autoprefixer: {},
    },
  },
  
  content: {
    highlight: {
      theme: "github-light", // GitHubライクなテーマに設定
    },
    ignores: [
      '/docs'
    ]
  },

  nitro: {
    prerender: {
      failOnError: false, 
    },
  },
})