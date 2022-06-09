import * as React from 'react'
import Layout, { getCookieValue } from '../components/layout.js'
import { Button, Alert, Card } from 'react-bootstrap'
import { languages } from '../components/Courses/Courses.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSpinner, faArrowUpRightFromSquare,
    faBrain, faArrowRightFromBracket, faCheck
} from '@fortawesome/free-solid-svg-icons'
import { isBrowser } from '../components/layout'

function Dashboard() {
    const uid = getCookieValue('uid')
    if (!uid) {  // Not logged in: show loading symbol and redirect to home
        if (isBrowser) {  // needed for node/gatsby build
            window.location.replace("/")
        }
        return (
            <div className="text-center">
                <FontAwesomeIcon 
                    icon={faSpinner} 
                    width={200} 
                    className="text-center fa-spin" 
                    text
                    size="10x"
                />
            </div>
        )
    } else {
        return (
            <Layout pageTitle="Dashboard">
                <h2 className="mb-4">Welcome {localStorage.getItem("name")}</h2>
                <Alert variant="primary">
                    <h3>Your last viewed module: </h3>
                    <h4 className='text-danger'>Introducing and Installing Haskell</h4>
                    <Alert.Link href="/courses/haskell/intro-install">
                        <Button>Pick up where you left off &nbsp;
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                        </Button>
                    </Alert.Link>
                </Alert>

                <h3>Your progress</h3>
                {languages.map((language, i) => (
                    <Card className="mb-4">
                        <Card.Header>{language}</Card.Header>
                        <Card.Body className="d-flex flex-row justify-content-center gap-5">
                            <div className='text-center'>
                                <FontAwesomeIcon icon={faBrain} size="4x"/>
                                <p>Working: 0</p>
                            </div>

                            <div className='text-center'>
                                <FontAwesomeIcon icon={faArrowRightFromBracket} size="4x"/>
                                <p>Skipped: 0</p>
                            </div>

                            <div className='text-center'>
                                <FontAwesomeIcon icon={faCheck} size="4x"/>
                                <p>Completed: 0</p>
                            </div>
                        </Card.Body>
                  </Card>
                ))}
            </Layout>
        )
    }
}

export default Dashboard