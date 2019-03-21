module.exports = {
  siteMetadata: {
    title: 'Helka ceramics'
  },

  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/assets`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`
      }
    },
    'gatsby-plugin-netlify-cms-paths',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: { target: '_blank' }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        enableIdentityWidget: true,
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion'
  ]
}
