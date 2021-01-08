module.exports = {
  siteMetadata: {
    title: `ejbcode`,
    description: `A personal Website / Blog made with GatsbyJS, Styled-Components, Deploy in Netlify.`,
    author: `@ejbcode`,
  },
  plugins: [
    {
      resolve: `gatsby-source-instagram-all`,
      options: {
        access_token:
          'IGQVJYSW40RUdEV1RzR1UwWktDSEZAiMk1QRHZAibjJ6Rnl4UDlmRHE3UkNSLUt5RGRQZAjhZAQTQzZADhfU1o0SnRTdXAwdWNmVHpnOEx4QUxKYjNOdXlWdkF0bEZALcnR1ckYtUnA5QXBNVWV6ODVQeXp6RAZDZD',
      },
    },
    `gatsby-plugin-react-helmet`,

    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              quality: 80,
            },
          },
          `gatsby-remark-prismjs`,
        ],
      },
    },
    'gatsby-remark-reading-time',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'projects',
        path: `${__dirname}/src/content/projects`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpg`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Caveat`,
    //         variants: [`400`],
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`400`, `700`],
    //       },
    //     ],
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
