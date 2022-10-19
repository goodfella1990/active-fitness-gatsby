module.exports = {
  siteMetadata: {
    title: `ActiveFitness`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `heebo`,
          `source sans-serif/100`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
};
