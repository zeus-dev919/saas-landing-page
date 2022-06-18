export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Saas Landing Page',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Saas landing pages design is very important in order to convert visitors into leads or customers [https://uikit.to/saas-landing-pages/]',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/thumb.png',
      },
      {
        hid: 'og:title',
        name: 'og:title',
        content: 'Saas Landing Page',
      },
      {
        name: 'og:site_name',
        content: 'web developer',
      },
      {
        prefix: 'og: https://ogp.me/ns#',
      },
      {
        hid: 'og:description',
        name: 'og:description',
        content:
          'Saas landing pages design is very important in order to convert visitors into leads or customers [https://uikit.to/saas-landing-pages/]',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: '~/assets/scss/main.scss', lang: 'scss' }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    [
      'nuxt-social-meta',
      {
        url: '',
        title: 'Saas Landing Page',
        site_name: 'Sass Landing Page',
        description:
          'Saas landing pages design is very important in order to convert visitors into leads or customers [https://uikit.to/saas-landing-pages/]',
        img: 'thumb.png',
        img_size: { width: '800px', height: '600px' },
        locale: 'en_US',
        twitter: '@silvesterwali',
        twitter_card: 'Saas Landing Page',
        theme_color: '#ffffff',
      },
    ],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
