import * as React from 'react'
import Layout from '../layout'
import './CourseTemplate.css'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Accordion from 'react-bootstrap/Accordion'
import Sidebar from '../Sidebar/Sidebar.js'

function CourseTemplate({ title }) {
    console.log("title", title)
    const data = useStaticQuery(graphql`
        query {
            allMdx(
                filter: {fileAbsolutePath: {regex: "/content/haskell/"}}
            ) {
                nodes {
                    frontmatter {
                        title
                    }
                    id
                    slug
                }
            }
        }
    `)

    // TODO : make a function export since this code is also used in Sidebar.js
    let links = {}
    let modules = []
    
    data.allMdx.nodes.forEach(node => {
        const mod = node.frontmatter.module
        console.log("mod", mod)
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
            <h1>{title}</h1>
            <Sidebar dontActAsSideBar={true} />
            {data.allMdx.nodes.map(node => (
                <div><Link to={`/courses/${node.slug}`}>
                    {node.frontmatter.title}
                </Link></div>
            ))}
            
        </Layout>
    )
}

export default CourseTemplate
