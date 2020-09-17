// export.createPages = async function({actions, graphql}) {
//     const {data} = await graphql`
//         query {
//             allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//                 nodes {
//                   frontmatter {
//                     slug
//                   }
//                   id
//                 }
//               }
//         }       
//     `

//     //create paginated pages for posts

//     const postPerPage = 3

//     const numPages = Math.ciel(data.allMdx.edges.length / postPerPage)

//     Array.from({length: numPages }).forEach((_, i) => {
//         actions.createPages({
//             path: i === 0 ? `/` : `/${ i + 1}`,
//             component: require.resolve("./src/templates/allPost.js"),
//             context: {
//                 limit: postPerPage,
//                 skip: i * postPerPage,
//                 numPages,
//                 currentPage: i + 1,
//             }
//         })
//     })

//     // Create single blog post

//     data.allMDX.edges.forEach(edge => {
//         const slug = edge.node.formatter.slug
//         const id = edge.node.id
//         actions.createPages({
//             path: slug,
//             component: require.resolve(`./src/templates/singelePost.js`),
//             context: {id}
//         })
//     })

// }