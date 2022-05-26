import * as React from "react"
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout.js'
import { signInWithGoogle, completeTask } from '../Firebase.js'

/* Returns title of tutorial page with word title removed */
function trimTutName(str) {
  return str.replace(" Tutorial", "")
}

function IndexPage({ data }) { 
  return (
    <Layout pageTitle={'LearnFP'}>
      <h1>Learn functional programming</h1>
      <button onClick={signInWithGoogle}>Sign in with google</button>
      <p>Name: {localStorage.getItem("name")}</p>
      <p>Email: {localStorage.getItem("email")}</p>
      <img src={localStorage.getItem("profilePic")} />

      <button onClick={() => completeTask("haskell", "basics")}>
        Complete Haskell Basics
      </button>

      {/* <p>Racket basics status? {checkStatus("racket", "basics")}</p> */}

      {
        data.allMdx.nodes.map(node => (
          <div>
            <h2>Learn {trimTutName(node.frontmatter.title)}</h2>
            {/* <MDXRenderer>{node.body}</MDXRenderer> */}
          </div>
        ))
      }
    </Layout>
  )
}



export const query = graphql`
  query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        body
      }
    }
  }
`

export default IndexPage