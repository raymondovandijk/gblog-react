module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: '$(__dirname)/src/pages/'

      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'post',
        path: '$(__dirname)/src/post/'

      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: '$(__dirname)/src/images/'

      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-mdx',
      option: {
        extensions: [',md','.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            option: {
              maxWidth: 1200,
            }
          }
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options:{
        fonts: [
          'Exo',
          'Vollkorn\:400,400i,700,700i',
        ],
        display: "sawp",
      },
    },
  ],
}
