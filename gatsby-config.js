module.exports = {
  siteMetadata: {
    title: `Femi Oladipupo Website`,
    description: `I'm Femi Oladipupo, an MIT senior completing a bachelor's degree in Computer Science and Engineering (6-3) with a minor in Comparative Media Studies (CMS).`,
    author: `@imef96`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Femi Oladipupo Website`,
        short_name: `Femi O. Site`,
        start_url: `/`,
        background_color: `#FDFDFD`,
        theme_color: `#FDFDFD`,
        display: `standalone`,
        // icon: `src/images/oii-icon.png`, // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: 'www.femioladipupo.com'
      },
    },
  ],
}
