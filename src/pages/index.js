import * as React from "react"
import { Link, graphql } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout.js'
import Courses, { logos } from '../components/Courses/Courses.js'
import { signInWithGoogle, signOutAcc } from '../Firebase.js'
// import { signInWithGoogle, completeTask } from '../Firebase.js'
import '../styles/index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert, Button, Card, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faArrowRightLong, 
  faTerminal, faBookOpenReader, faListCheck, faCircleQuestion
} from '@fortawesome/free-solid-svg-icons'
import HaskellLogo from '../assets/haskell.svg'; 

/* Returns title of tutorial page with word title removed */
// function trimTutName(str) {
//   return str.replace(" Tutorial", "")
// }

// const logoClasses = [
//   'logo-1',
//   'logo-2',
//   'logo-3',
//   'logo-4',
//   'logo-5',
//   'logo-6',
// ]

const logoClasses = [
  'logo-1',
  'logo-4',
  'logo-2',
  'logo-5',
  'logo-3',
  'logo-6',
]

const howItWorks = {
  titles: [
    "Any Language",
    "Resources and Original Guides",
    "Track Progress",
    "Quizzes and Exercises"
  ],
  descriptions: [
    "Choose from our 6 available languages to learn",
    "Read our original tutorial guides or view our curated resources",
    "Track your progress as you move through courses and moduless s s s s s s s",
    "Take our quizzes to check your understanding and complete our original and hand-picked exercises"
  ],
  icons: [
    <FontAwesomeIcon icon={faTerminal} color="white" size="3x" className="bg-primary me-3 p-3 rounded-circle"/>,
    <FontAwesomeIcon icon={faBookOpenReader} color="white" size="3x" className="bg-primary me-3 p-3 rounded-circle"/>,
    <FontAwesomeIcon icon={faListCheck} color="white" size="3x" className="bg-primary me-3 p-3 rounded-circle"/>,
    <FontAwesomeIcon icon={faCircleQuestion} color="white" size="3x" className="bg-primary me-3 p-3 rounded-circle"/>
  ]
}

function IndexPage({ data }) { 
  return (
    <Layout pageTitle={'Learn Functional Programming'}>
      <div className="container mt-1 mb-5 position-relative overflow-hidden">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-5 fw-bold lh-1 mb-3">Learn Functional Programming Easily With Our Resources</h1>
            <p className="lead">LearnFP offers a collection of curated resources and problem sets to take you from beginner to advanced in functional programming. We make the difficult topics easy, so sign up today to start learning.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <Button variant="primary" onClick={signInWithGoogle} className="btn-lg px-4 me-md-2">
                Sign up
              </Button>
              <Button variant="light" href="/courses" className="btn-outline-secondary btn-lg px-4">
                Courses
              </Button>
            </div>
          </div>
          {/* <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden"> */}
          <div className="col-lg-4 p-0 overflow-hidden text-center">
              {/* <HaskellLogo className="opacity-25" alt="" width="100" /><br />
              <HaskellLogo className="opacity-25" alt="" width="50" /><br /> */}
              {logos.map((logo, i) => (
                React.cloneElement(logo, {key: i, className: `opacity-25 ${logoClasses[i]} p-3 logo-image`})
              ))}
              {/* <HaskellLogo className="opacity-25" alt="" width="50" /><br /> */}
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
      
      <h2 className="text-center mb-3">Courses</h2>
      <Courses />

      <h2 className="text-center mb-3">How it works</h2>

      <Row xs={1} md={2} className="g-4 mb-5">
        {howItWorks.titles.map((title, i) => (
          <Col>
            <Card bg="info" border="primary" className="how-it-works-card">
                  <Card.Body className="d-flex flex-row">
                      {howItWorks.icons[i]}
                      <div>
                          <Card.Title>{title}</Card.Title>
                          <Card.Text>
                              {howItWorks.descriptions[i]}
                          </Card.Text>
                      </div>
                  </Card.Body>
              </Card>
          </Col>
        ))}
      </Row>

      {/* Bottom: account opening alert */}
      <Alert variant="primary">
        <Alert.Heading>Ready to start learning?</Alert.Heading>
        <p>Make an account to track your progress or view our available courses.</p>
        <Button variant="primary" size="lg" className="me-2 btn btn-outline-info" onClick={signInWithGoogle}>
            Sign up <FontAwesomeIcon icon={faArrowRightLong}/>            
        </Button>{' '}
        
        <Link to="/courses" className="text-decoration-none text-dark">
          <Button variant="light" size="lg" className="btn-outline-secondary">
              Courses <FontAwesomeIcon icon={faArrowRightLong}/>
          </Button>
        </Link>
        
        <hr />
        <p className="mb-0">
          Or login: &nbsp;
          <Button onClick={signInWithGoogle} variant="dark" className="btn-outline-info"> 
            Log in
          </Button>
        </p>
      </Alert>
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
 * Home pages for each course x
 * 
 * Exercises
 * Quizzes
 * 
 * Change title/logo to a link
 * 
 * Create a dropdown component
 * 
 * Sidebar hamburger
 * 
 * import favicons in dashboard
 * 
 * TODO : in sign out function, don't redirect unless on home page
 */