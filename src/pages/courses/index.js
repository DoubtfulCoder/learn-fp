import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout.js'
import CourseTemplate from '../../components/CourseTemplate/CourseTemplate.js'

function CoursesPage({ data }) {
    return (
        // <Layout pageTitle='Courses'>
        //     <h1>Courses</h1>
        //     {
        //         data.allMdx.nodes.map(node => (
        //             <div>
        //                 <h2>
        //                     <Link to={`/courses/${node.slug}`}>
        //                     {/* Learn {trimTutName(node.frontmatter.title)} */}
        //                     Learn {node.slug}
        //                     </Link>
        //                 </h2>
        //                 {/* <MDXRenderer>{node.body}</MDXRenderer> */}
        //             </div>
        //         ))
        //     }
        // </Layout>
        // <div>
        //     <CourseTemplate title="Haskell"/>
        //     {/* <CourseTemplate title="Racket"/>
        //     <CourseTemplate title="SML"/>
        //     <CourseTemplate title="JavaScript"/>
        //     <CourseTemplate title="Clojure"/> */}
        // </div>    
        <Layout>
            <h1>Courses</h1>
            
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(filter: {fileAbsolutePath: {regex: "/language-tuts/"}}) {
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

export default CoursesPage