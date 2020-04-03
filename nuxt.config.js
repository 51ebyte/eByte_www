export default {
  // mode: 'spa',
  head: {
    title: 'eByteSDK字节极客',
    meta: [{
        charset: 'utf-8'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: '微信开发,微信 JAVA SDK,eByteSDK,JAVA 微信开发,JAVA 小程序开发,JAVA 微信支付开发,JAVA 企业微信开发'
      },
      {
        hid: 'description',
        name: 'description',
        content: '开源的高质量SDK,开发如此敏捷'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1,maximum-scale=1 user-scalable=no'
      },
      {
        name: 'renderer',
        content: 'webkit'
      },
      {
        'http-equiv': 'Content-Language',
        content: 'zh-CN'
      },
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'IE=edge,chrome=1'
      },
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }, {
      rel: 'stylesheet',
      type: 'text/css',
      href: '//at.alicdn.com/t/font_1630600_kn82evmuamb.css'
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#333333'
  },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/css/common.less',
    '@/assets/css/md.less',
    'swiper/dist/css/swiper.css',
    'view-design/dist/styles/iview.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '@/plugins/axios',
    '@/plugins/ViewUI',
    '@/plugins/apiUrl',
    {
      src: '@/plugins/particles',
      ssr: false
    },
    {
      src: '@/plugins/polyfill',
      ssr: true
    },
    {
      src: '@/plugins/mavonEditor',
      ssr: false
    },
    {
      src: "@/plugins/swiper",
      ssr: false
    },
  ],
  router: {
    middleware: ['browserVersion']
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios'
  ],
  /*
   ** Build configuration
   */
  axios: {
    baseURL: 'http://api.ebyte.com',
    proxy: false
  },
  proxy: {
    '/admin/': 'http://api.ebyte.com',
    '/account/': 'http://api.ebyte.com'
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    analyze: false,
    maxChunkSize: 204800
  },
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  }
}
