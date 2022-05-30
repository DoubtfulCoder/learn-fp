import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout.js'
import Sidebar from '../../components/Sidebar/Sidebar.js'

function Course({ data }) {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title} useSideBar={true}>
            {/* <h2>YOOO</h2> */}
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
            {/* <Sidebar language="haskell" /> */}
        </Layout>
    )
}

export const query = graphql`
    query ($id: String) {
        mdx(id: {eq: $id}) {
        frontmatter {
            title
        }
            body
        }
    }
`

export default Course