const config = require('./src/data');
module.exports = {
  siteMetadata: {
    ...config,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
    `gatsby-plugin-theme-ui`,
  ],
};
