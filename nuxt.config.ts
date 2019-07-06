import NuxtConfiguration from '@nuxt/config'
import * as hardSource from 'hard-source-webpack-plugin'
import * as pkg from './package.json'

const nuxtConfig: NuxtConfiguration = {
  mode: 'spa',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [
    '@fortawesome/fontawesome-free-webfonts',
    '@fortawesome/fontawesome-free-webfonts/css/fa-brands.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-regular.css',
    '@fortawesome/fontawesome-free-webfonts/css/fa-solid.css',
    'styles/algolia.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  env: {
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY as string,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID as string,
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY as string,
    FIREBASE_AUTH_DOMAIN: 'grady-43e4a.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://grady-43e4a.firebaseio.com',
    FIREBASE_PROJECT_ID: 'grady-43e4a',
    FIREBASE_STORAGE_BUCKET: 'grady-43e4a.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '850547752139',
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        if (!config.module) return
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        if (config.plugins) {
          config.plugins.push(new hardSource())
        }
      }
    }
  }
}

export default nuxtConfig
