import * as React from "react"
import { graphql } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout.js'
// import { signInWithGoogle, completeTask } from '../Firebase.js'
import 'bootstrap/dist/css/bootstrap.min.css';

/* Returns title of tutorial page with word title removed */
function trimTutName(str) {
  return str.replace(" Tutorial", "")
}

function IndexPage({ data }) { 
  return (
    <Layout pageTitle={'Learn Functional Programming'}>
      <div class="container mt-1 mb-5">
        <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 class="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
            <p class="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
              <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
            </div>
          </div>
          <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img class="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720" />
          </div>
        </div>
      </div>
      
      {/* <h1>Learn functional programming</h1>
      <button onClick={signInWithGoogle}>Sign in with google</button>
      <p>Name: {localStorage.getItem("name")}</p>
      <p>Email: {localStorage.getItem("email")}</p>
      <img src={localStorage.getItem("profilePic")} alt="Profile picture"/>

      <button onClick={() => completeTask("haskell", "basics")}>
        Complete Haskell Basics
      </button> */}

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






/**
 * Sidebar x
 * Footer
 * Make header slighly smaller
 * Hero images
 * 
 * Mark as complete
 * Progress/dashboard page
 * Add daily progress variable to database
 * dailyProgress {
 *  date1 {
 *    completed: 5,
 *    skipped: 2
 *  }
 * }
 * 
 * Home pages for each course
 * 
 * Exercises
 * Quizzes
 * 
 * Change title/logo to a link
 * 
 * Create a dropdown component
 * 
 * Sidebar hamburger
 */