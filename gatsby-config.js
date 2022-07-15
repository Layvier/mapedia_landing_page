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
        isUsingColorMode: false,
      },
    },
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
        name: `Sci-Map.org`,
        short_name: `Sci-Map.org`,
        description: `Sci-Map.org evolved into Mapedia.org`,
        lang: `en`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `mapedia.org`,
        customDomain: `analytics.sci-map.org/js/plausible.js?original=`,
      },
    },
  ],
};
