import * as React from 'react'
import Layout from '../components/layout'
import { Link } from 'gatsby'

function Contribute() {
    return (
        <Layout>
            <h2>Want to contribute?</h2>
            <p>Check out our&nbsp;
                <Link to="https://github.com/DoubtfulCoder/learn-fp">GitHub</Link>
            </p>
            <p>LearnFP was built with Gatsby.js, React, Firebase, and Bootstrap.</p>
            <p>You can try fixing open&nbsp;
                <Link to="https://github.com/DoubtfulCoder/learn-fp/issues">issues</Link>
                &nbsp;or edit our&nbsp;
                <Link to="https://github.com/DoubtfulCoder/learn-fp/tree/main/content/">content pages</Link>
            </p>
        </Layout>
    )
}

export default Contribute
