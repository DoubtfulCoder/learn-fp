import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../../components/layout.js'
import CourseTemplate from '../../../components/CourseTemplate/CourseTemplate.js'

function Haskell({ data }) {
    return (
        // <Layout pageTitle='Courses'>
        //     <h1>Courses</h1>
        //     {
        //         data.allMdx.nodes.map(node => (
        //             <div>
        //                 <h2>
        //                     <Link to={`/courses/${node.slug}`}>
        //                     {/* Learn {trimTutName(node.frontmatter.title)} */}
        //                     {node.frontmatter.title}
        //                     </Link>
        //                 </h2>
        //                 {/* <MDXRenderer>{node.body}</MDXRenderer> */}
        //             </div>
        //         ))
        //     }
        // </Layout>
        <CourseTemplate title="Haskell"/>
    )
}

export const query = graphql`
  query {
    allMdx(
      filter: {fileAbsolutePath: {regex: "/content/haskell/"}}
    ) {
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`

export default Haskell