import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout.js'
import { Card, Row, Col } from 'react-bootstrap'
// import './courses.css'
import Courses from '../../components/Courses/Courses.js'

const languages = [
    "Haskell", "Racket", "Standard ML", "Javascript",
    "F#", "OCaml"
]

const descriptions = [
    "Learn the language of the lazy",
    "Learn the modern lisp",
    "Learn the king of the ML languages",
    "Learn the functional wonders of the language of the web",
    "Learn the functional language of practical applications",
    "Learn the ML language for industry",
]

function CoursesPage({ data }) {
    return (
        // <Layout pageTitle='Courses'>
        //     <h1>Courses</h1>
        //     {
        //         data.allMdx.nodes.map(node => (
        //             <div>
        //                 <h2>
        //                     <Link to={`/courses/${node.slug}`}>
        //                     {/* Learn {trimTutName(node.frontmatter.title)} */}
        //                     Learn {node.slug}
        //                     </Link>
        //                 </h2>
        //                 {/* <MDXRenderer>{node.body}</MDXRenderer> */}
        //             </div>
        //         ))
        //     }
        // </Layout>
        // <div>
        //     <CourseTemplate title="Haskell"/>
        //     {/* <CourseTemplate title="Racket"/>
        //     <CourseTemplate title="SML"/>
        //     <CourseTemplate title="JavaScript"/>
        //     <CourseTemplate title="Clojure"/> */}
        // </div>    
        <Layout pageTitle="Courses">
            <h1>Courses</h1>

            {/* <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 8 }).map((_, idx) => (
                    <Col>
                        <Card bg="info" border="primary">
                            <Card.Img 
                                variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/1024px-Haskell-Logo.svg.png?20190213014332" 
                                className="p-3"/>
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <h1>Courses</h1>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row> */}
            <Courses />
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