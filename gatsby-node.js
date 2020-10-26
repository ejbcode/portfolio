exports.createPages = async ({ actions, graphql, reporter }) => {
  const data = await graphql(`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/blog/" } }) {
        nodes {
          slug
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  // console.log(data.data.allDatoCmspost.nodes)
  if (data.errors) {
    reporter.panic('NO RESULTS', data.errors);
  }

  const postData = data.data.allMdx.nodes;
  console.log(postData);

  postData.forEach((post) => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: require.resolve(`./src/templates/blog-post.js`),
      context: { slug: post.slug },
    });
  });
};
