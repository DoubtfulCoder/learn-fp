import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../../components/layout.js'

function Course({ data }) {
    console.log("slug", data.mdx.slug)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title} useSideBar={true}>
            {/* <h2>YOOO</h2> */}
            <h1 className='display-6'>{data.mdx.frontmatter.title}</h1>
            <span>Skills: </span>
            {data.mdx.frontmatter.skills ? 
              data.mdx.frontmatter.skills.split(',').map(skill => (
                <span class="badge bg-danger rounded-pill me-1">{skill}</span> 
              )) :
              <></>
            }<hr />
            <MDXRenderer url={data.mdx.slug}>{data.mdx.body}</MDXRenderer>
            {/* <Sidebar language="haskell" /> */}
        </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(fileAbsolutePath: {regex: "/content/"}, id: {eq: $id}) {
      frontmatter {
        title
        skills
      }
      slug
      body
    }
  }
`

export default Course