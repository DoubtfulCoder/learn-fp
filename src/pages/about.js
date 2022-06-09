import { Link } from 'gatsby'
import * as React from 'react'
import Layout from '../components/layout'

function AboutPage() {
    return (
        <Layout pageTitle="About">
            <h1>About LearnFP</h1>
            <p>LearnFP is the place to get started with functional programming. 
                Our tutorial guides and resources will help you get your foot
                in the field.
            </p>
            <p>All the code behind LearnFP is open-source.&nbsp;
                <Link to="/contribute">Learn how to contribute.</Link>
            </p>
        </Layout>
    )
}

export default AboutPage