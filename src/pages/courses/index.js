import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout.js'

function trimTutName(str) {
    return str.replace(" Tutorial", "")
}

function CoursesPage({ data }) {
    console.log('data' + data)
    return (
        <Layout pageTitle='Courses'>
            <h1>Courses</h1>
            {
                data.allMdx.nodes.map(node => (
                    <div>
                        <h2>
                            <Link to={`/courses/${node.slug}`}>
                            {/* Learn {trimTutName(node.frontmatter.title)} */}
                            Learn {node.slug}
                            </Link>
                        </h2>
                        {/* <MDXRenderer>{node.body}</MDXRenderer> */}
                    </div>
                ))
            }
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