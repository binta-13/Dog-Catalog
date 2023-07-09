const pkg = require("./package");

module.exports = {
  /*
   ** Headers of the page
   */
  target: "static",
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ,
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/proxy",
  ],
  buildModules: ["@nuxtjs/composition-api/module"],
  store: true,
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    babel: { compact: true },
  },
  axios: {
    // Do away with the baseUrl when using proxy
    proxy: true,
  },
  // proxy: {
  //   // Simple proxy
  //   "/api/": {
  //     target: "https://dog.ceo/api/",
  //     pathRewrite: { "^/api/": "" },
  //   },
  // },
};
