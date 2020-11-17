exports.createPages = async ({ actions, graphql, reporter }) => {
  const data = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        nodes {
          slug
        }
      }
    }
  `);

  if (data.errors) {
    reporter.panic('NO RESULTS', data.errors);
  }

  const postData = data.data.allMdx.nodes;

  postData.forEach((post) => {
    actions.createPage({
      path: `blog/${post.slug}`,
      component: require.resolve(`./src/templates/blogpost.js`),
      context: { slug: post.slug },
    });
  });
};
