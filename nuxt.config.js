export default {
  tailwindcss: {
    exposeConfig: true
  },
  head: {
    title: '19th - Shely Salsadila',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Happy Birthday 19th Shely Salsadila'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ]
  },
  loading: {color: '#fff'},
  css: ['assets/css/style.css'],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg'
  ],
  purgeCSS: {
    whitelist: ['dark-mode'],
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  axios: {},
  build: {
    extend(config, ctx) {
    }
  }
}
