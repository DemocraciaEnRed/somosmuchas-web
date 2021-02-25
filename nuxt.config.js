export default {
  // target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Somos Muchas',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'title', name: 'title', content: 'Somos Muchas' },
      { hid: 'description', name: 'description', content: 'Esta plataforma fue creada con el propósito de ampliar el potencial de las causas feministas. Explora y descubre las herramientas disponibles.' },
      { property: 'og:title', content: 'Somos Muchas' },
      { property: 'og:description', content: 'Esta plataforma fue creada con el propósito de ampliar el potencial de las causas feministas. Explora y descubre las herramientas disponibles.' },
      { property: 'og:image', content: process.env.APP_URL + '/sharer-01.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'Somos Muchas' },
      { property: 'twitter:description', content: 'Esta plataforma fue creada con el propósito de ampliar el potencial de las causas feministas. Explora y descubre las herramientas disponibles.' },
      { property: 'twitter:image', content: process.env.APP_URL + '/sharer-01.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css', rel: 'stylesheet', integrity: 'sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==', crossorigin: 'anonymous' },
      { href: 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.css', rel: 'stylesheet' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap' }
    ],
    script: [
      { src: 'https://api.mapbox.com/mapbox-gl-js/v1.8.1/mapbox-gl.js' }
    ]
  },

  loading: {
    color: '#32bd9f'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/services.js' }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/buefy
    ['nuxt-buefy', { css: true, materialDesignIcons: false, defaultIconPack: 'fas' }],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://strapi.io/documentation/v3.x/getting-started/nuxt-js.html
    '@nuxtjs/strapi',
    // https://github.com/nuxt-community/modules/tree/master/packages/markdownit
    '@nuxtjs/markdownit'
  ],
  styleResources: {
    // your settings here
    scss: ['~assets/scss/_variables.scss']

  },
  publicRuntimeConfig: {
    strapiURL: process.env.STRAPI_URL,
    mapboxApiKey: process.env.MAPBOX_API_KEY,
    mapboxMapStyle: process.env.MAPBOX_MAP_STYLE,
    mapCenterLongitude: process.env.MAP_CENTER_LONGITUDE,
    mapCenterLatitude: process.env.MAP_CENTER_LATITUDE,
    mapZoomDefault: process.env.MAP_ZOOM_DEFAULT,
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },
  privateRuntimeConfig: {
    // strapiUrl: process.env.STRAPI_URL
  },
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID || '' // Use as fallback if no runtime config is provided
  },
  strapi: {
    entities: [],
    url: process.env.STRAPI_URL || 'http://localhost:1337'
  },
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
