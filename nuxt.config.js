export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // for access env global
  env: {
    nameApp: process.env.NAME_APP || 'Skin Mystery',
    descApp: process.env.DESC_APP || 'Jaga Kesehatan & Penampilan Terbaik Bersamaa Skin Mystery - For Better Life',
    urlApp: process.env.URL_APP || 'http://localhost:3000/',
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'skin-mystery',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/css/app.css",
    "@/assets/css/feather.css",
    "@/assets/scss/icon.scss",
    "@/assets/scss/transition.scss",
    "@/assets/scss/line-clamp.scss",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: './plugins/vue-carousel.js', mode: 'client' },
    './plugins/formatPrice.js',
    './plugins/formatNumber.js',
    './plugins/randomColor.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    baseURL: process.env.API_SERVER || "https://rapid-api.retas.dev/api",
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    loaders: {
      scss: {
        implementation: require('sass'),
      },
    },
  },
}
