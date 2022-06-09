import * as React from "react"
import { Link } from "gatsby"
import Layout from '../components/layout'

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404 Not Found">
        <div class="container">
          <div class="row">
              <div class="col-md-12">
                  <div class="text-center">
                      <h1>404</h1>
                      <h2>Page Not Found</h2>
                      <p>Sorry, we couldn't find the page you requested</p>
                      <Link to="/">Back to home</Link>
                  </div>
              </div>
          </div>
        </div>
    </Layout>
  )
}

export default NotFoundPage
