import * as React from 'react'
import { Link } from 'gatsby'
// import Dropdown from './Dropdown/Dropdown.js'
import Sidebar from './Sidebar/Sidebar.js'
import { 
    topNav, siteTitle, navLink, navLinkText, 
    loginSignUp, loginButton, signUpButton,
    bottomNav, 
    profilePic, topNavBar, profileLinks,
    mainBody, mainWrapper
} from './layout.module.css'
import { signInWithGoogle, signOutAcc } from '../Firebase.js'
import { StaticImage } from 'gatsby-plugin-image'
import { Image, Dropdown, DropdownButton } from 'react-bootstrap'
import Cookies from 'js-cookie'
import Icon from "../assets/favicon.svg"

export const isBrowser = typeof window !== "undefined"

export function getCookieValue (name) {
    // return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
    return Cookies.get(name)
}

/* Only show login screen if not logged in */
function NavBarLogin() {
    const [profileLinksVis, setProfileLinksVis] = React.useState(false)
    const uid = getCookieValue('uid')
    console.log("uid", uid)

    if (!uid) {
        // Not logged in: return sign in and login button
        return (
            <div className="text-end">
                <button type="button" onClick={signInWithGoogle} className="btn btn-outline-light me-2">
                    Login
                </button>
                <button type="button" onClick={signInWithGoogle} className="btn btn-warning">
                    Sign-up
                </button>
            </div>
        )
    } else {  // Is logged in: return profile pic
        const classes = `img-fluid ${profilePic}`

        return (
            <div>
                {/* profile pic */}
                <a
                    // Toggle link visibility onClick and make invisible when anything else focused
                    className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2"
                    onClick={() => setProfileLinksVis(!profileLinksVis)} 
                    onBlur={() => { 
                        setTimeout(() => {
                            if (document.activeElement.className !== "dropdownLink") {
                                // Invisible when body clicked EXCEPT when actual menu clicked
                                setProfileLinksVis(false)
                            }
                        }, 0)
                    }}
                >
                    {
                        isBrowser ? 
                            (<img 
                                src={localStorage.getItem("profilePic")} 
                                alt="Profile picture" // REDUNDANT?
                                className={classes}
                                style={{
                                    maxWidth: '50px',
                                    borderRadius: '50%',
                                }}
                                tabIndex={0}
                            />) : (<></>)
                    }
                </a>
                {/* profile links modal */}
                <div 
                    className={`${profileLinks}`}
                    style={{display: profileLinksVis ? 'block' : 'none'}}
                >
                    <ul>
                        <li><Link to='/dashboard' className='dropdownLink'>Dashboard</Link></li>
                        <button className='dropdownLink' onClick={signOutAcc}>Sign out</button>
                    </ul>
                </div>
            </div>
        )
    }
}

function Layout({ pageTitle, children, useSideBar, sidebarLang }) {
    console.log(children)
    // const mainClasses = useSideBar ? mainWrapper : ''
    // container = React.createRef()

    // React.useEffect(() => {
    //     document.addEventListener("mousedown", () => {
    //         if (
    //             this.container.current &&
    //             !this.container.current.contains(event.target)
    //           ) {
    //             this.setState({
    //               open: false,
    //             });
    //           }
    //     }));
    // })

    return (
        <div>
            <title>{pageTitle} | LearnFP</title>
            <header className="p-3 bg-primary bg-gradient text-white">
                <div className="container">
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        {/* <img src="../../public/static/favicon.svg" alt="learnfp logo"/> */}
                        <Link to="/">
                            <Icon width={50} height={50} className="me-2"/>
                        </Link>
                        <Link to="/" className="text-decoration-none text-reset">
                            <h2>LearnFP</h2>
                        </Link>

                        <ul className={`${topNavBar} nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0`}>
                            <li><Link to="/dashboard" className="nav-link px-2 text-secondary">Home</Link></li>
                            <li><Link to="/courses" className="nav-link px-2 text-white">Languages</Link></li>
                            <li>
                                <DropdownButton id="dropdown-basic-button" title="Topics" className="bg-transparent" menuVariant="dark">
                                    <Dropdown.Item href="#/action-1">Recursion</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                            </li>
                            {/* <li><Link to="/blog" className="nav-link px-2 text-white">Blog</Link></li> */}
                            {/* <li><Link to="#" className="nav-link px-2 text-white">FAQs</Link></li> */}
                            <li><Link to="/contribute" className="nav-link px-2 text-white">Contribute</Link></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-black bg-light" placeholder="Search..." aria-label="Search" />
                        </form>

                        {/* Only show login screen if not logged in */}
                        {NavBarLogin()}
                    </div>
                </div>
            </header>
            
            <div className={useSideBar ? mainWrapper : ''}>
                {useSideBar ? <Sidebar /> : <div></div>}
                <div className={mainBody}>
                    {children}

                    {/* <Dropdown 
                        linkToDropdown={<p>YO</p>}
                        links={[['Dashboard', '/dashboard'], ]}
                    /> */}
                </div>
            </div>

            {/* Bottom footer */}
            {/* <footer>
            
                <ul className={`${bottomNav}`}>
                    <li>
                        <Link to="/about" className={navLinkText}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={navLinkText}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/donate" className={navLinkText}>Donate</Link>
                    </li>
                </ul>
            </footer> */}
            <div className="container">
                <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
                    <div className="col mb-3">
                    <a href="/" className="d-flex align-items-center mb-3 link-dark text-decoration-none">
                        {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                        <Icon width={30} height={30} style={{filter: "invert(100%)"}} className="me-2"/>
                        <span>LearnFP</span>
                    </a>
                    <p className="text-muted">&copy; 2022</p>
                    </div>

                    <div className="col mb-3">

                    </div>

                    <div className="col mb-3">
                    <h5>Courses</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/courses/haskell" className="nav-link p-0 text-muted">Haskell</a></li>
                        <li className="nav-item mb-2"><a href="/courses/racket" className="nav-link p-0 text-muted">Racket</a></li>
                        <li className="nav-item mb-2"><a href="/courses/standard-ml" className="nav-link p-0 text-muted">Standard ML</a></li>
                        <li className="nav-item mb-2"><a href="/courses/javascript" className="nav-link p-0 text-muted">Javascript</a></li>
                        <li className="nav-item mb-2"><a href="/courses/f-sharp" className="nav-link p-0 text-muted">F#</a></li>
                        <li className="nav-item mb-2"><a href="/courses/ocaml" className="nav-link p-0 text-muted">OCaml</a></li>
                    </ul>
                    </div>

                    <div className="col mb-3">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-muted">Home</a></li>
                        <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">About</a></li>
                        <li className="nav-item mb-2"><a href="/contribute" className="nav-link p-0 text-muted">Contribute</a></li>
                        <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-muted">Contact</a></li>
                    </ul>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Layout