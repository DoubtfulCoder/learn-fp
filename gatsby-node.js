exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
    const languages = [
        "haskell", "racket", "standard-ml", "javascript",
        "f-sharp", "ocaml", "clojure"
    ]
    // const result = await graphql(`
    //   query {
    //     allMdx {
    //       nodes {
    //         frontmatter {
    //           path
    //         }
    //       }
    //     }
    //   }
    // `);
  
    // if (result.errors) {
    //   reporter.panic('failed to create posts ', result.errors);
    // }
  
    // const pages = result.data.allMdx.nodes;
  
    // pages.forEach(page => {
    //   actions.createPage({
    //     path: page.frontmatter.path,
    //     component: require.resolve('./src/templates/postTemplate.js'),
    //     context: {
    //       pathSlug: page.frontmatter.path,
    //     },
    //   });
    // });
    languages.forEach(lang => {
        createPage({
            path: `/courses/${lang}`,
            // component: require.resolve('./src/components/CourseTemplate/CourseTemplate.js'),
            component: require.resolve('./src/templates/CourseTemplate.js'),
            context: {
                language: lang
            }
        })
    })
  };