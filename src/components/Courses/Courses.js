import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { Card, Row, Col } from 'react-bootstrap'
import './Courses.css'

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

function Courses({ data }) {
    return (
        <Row xs={1} md={2} className="g-4 mb-5">
            {languages.map((language, i) => (
                <Col>
                    <Link 
                        to={`/courses/${
                            language.replace(' ', '-').replace('#', '-sharp').toLowerCase()
                        }`}
                        className="text-decoration-none"
                    >
                        <Card 
                            bg="light"
                            border="primary" className="cardLink">
                            {/* <Card.Img 
                                variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/1024px-Haskell-Logo.svg.png?20190213014332" 
                                className="p-3"/> */}
                            <Card.Body className="d-flex flex-row">
                                <Card.Img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/1024px-Haskell-Logo.svg.png?20190213014332" 
                                    className="p-3 w-25"/>
                                <div>
                                    <br />
                                    <Card.Title>{language}</Card.Title>
                                    <Card.Text>
                                        {descriptions[i]}
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
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

export default Courses