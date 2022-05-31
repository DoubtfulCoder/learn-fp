import * as React from 'react'
import Layout from '../components/layout.js'
// import './CourseTemplate.css'
import { Link, graphql } from 'gatsby'
import Accordion from 'react-bootstrap/Accordion'
// import Sidebar from '../Sidebar/Sidebar.js'

function CourseTemplate({ data, title }) {  
    // No data yet for course
    if (data.allMdx.nodes.length === 0) {
        return (
            <Layout>
                <h1>Coming soon!</h1>
                <p>Check out other courses: </p>
                <Link to="/courses">Courses home</Link>
            </Layout>
        )
    }
    
    // TODO : make a function export since this code is also used in Sidebar.js
    let links = {}
    let modules = []
    
    data.allMdx.nodes.forEach(node => {
        const mod = node.frontmatter.module
        if (mod) {
            if (!links[mod]) {
                modules.push(mod)
                links[mod] = [node]
            } else {
                links[mod].push(node)
            }
        }
    })



    return (
        <Layout>
            <Accordion 
                defaultActiveKey={Array(modules.length).fill(0).map((x,i) => i.toString())} 
                alwaysOpen
            >
                {
                    modules.map((module,i) => (
                            <Accordion.Item eventKey={`${i}`}>
                                <Accordion.Header>{module}</Accordion.Header>
                                <Accordion.Body>
                                    {links[module].map(link => (
                                        <>
                                            <p><Link to={`/courses/${link.slug}`}>
                                            {link.frontmatter.title}
                                            </Link></p>
                                        </>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                        // <div>
                        //     <h3>{module}</h3>
                        //     {links[module].map(link => (
                        //         <p>{link.frontmatter.title}</p>
                        //     ))}
                        // </div>
                    ))
                }
            </Accordion>
            
        </Layout>
    )
}

export const query = graphql`
    query ($language: String!) {
        allMdx(
            filter: {frontmatter: {language: {eq: $language}}}
        ) {
            nodes {
                frontmatter {
                    title
                    module
                }
                id
                slug
            }
        }
    }
`

export default CourseTemplate
