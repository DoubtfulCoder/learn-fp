module.exports = {
  siteMetadata: {
    title: `LearnFP`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'tutorials',
        path: `${__dirname}/language-tuts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    "gatsby-plugin-mdx",
  ]
};