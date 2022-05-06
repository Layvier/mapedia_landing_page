module.exports = {
  siteMetadata: {
    title: `Mapedia.org`,
    siteUrl: `https://www.mapedia.org`,
  },
  plugins: [
    {
      resolve: "@chakra-ui/gatsby-plugin",
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mapedia.org`,
        short_name: `Mapedia`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/favicon.svg`,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `mapedia.org`,
        customDomain: `analytics.sci-map.org/js/plausible.js?original=`,
      },
    },
  ],
};
