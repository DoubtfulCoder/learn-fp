import * as React from 'react'
import { Link } from 'gatsby'
import Dropdown from './Dropdown/Dropdown.js'
import Sidebar from './Sidebar/Sidebar.js'
import { 
    topNav, siteTitle, navLink, navLinkText, 
    loginSignUp, loginButton, signUpButton,
    bottomNav, 
    profilePic, topNavBar, profileLinks,
    mainBody, mainWrapper
} from './layout.module.css'
// import { ReactComponent as Logo } from '../../public/static/favicon.svg'
import { signInWithGoogle, signOutAcc } from '../Firebase.js'
import { StaticImage } from 'gatsby-plugin-image'
import Image from 'react-bootstrap/Image'

export function getCookieValue (name) {
    return document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')?.pop() || ''
}

/* Only show login screen if not logged in */
function NavBarLogin() {
    const [profileLinksVis, setProfileLinksVis] = React.useState(false)
    const uid = getCookieValue('uid')

    if (uid === '') {
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
                    className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" dataBsToggle="dropdown" ariaExpanded="false"
                    onClick={() => setProfileLinksVis(!profileLinksVis)} 
                    onBlur={() => { 
                        setTimeout(() => {
                            if (document.activeElement.className != "dropdownLink") {
                                // Invisible when body clicked EXCEPT when actual menu clicked
                                setProfileLinksVis(false)
                            }
                        }, 0)
                    }}
                >
                    <img 
                        src={localStorage.getItem("profilePic")} 
                        alt="Profile picture" // REDUNDANT?
                        className={classes}
                        style={{
                            maxWidth: '50px',
                            borderRadius: '50%',
                        }}
                        tabIndex={0}

                        // // Toggle link visibility onClick and make invisible when anything else focused
                        // onClick={() => setProfileLinksVis(!profileLinksVis)} 
                        // onBlur={() => { 
                        //     setTimeout(() => {
                        //         if (document.activeElement.className != "dropdownLink") {
                        //             // Invisible when body clicked EXCEPT when actual menu clicked
                        //             setProfileLinksVis(false)
                        //         }
                        //     }, 0)
                        // }}
                    />
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
                        {/* <Logo /> */}
                        <Image 
                            alt="LearnFP"
                            src="../../public/static/favicon.svg"
                        />
                        <h2>LearnFP</h2>
                        <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                        
                        </Link>

                        <ul className={`${topNavBar} nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0`}>
                            <li><Link to="/" className="nav-link px-2 text-secondary">Home</Link></li>
                            <li><Link to="/courses" className="nav-link px-2 text-white">Courses</Link></li>
                            <li><Link to="/blog" className="nav-link px-2 text-white">Blog</Link></li>
                            <li><Link to="#" className="nav-link px-2 text-white">FAQs</Link></li>
                            <li><Link to="#" className="nav-link px-2 text-white">Contribute</Link></li>
                        </ul>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-black bg-light" placeholder="Search..." aria-label="Search" />
                        </form>

                        {/* Only show login screen if not logged in */}
                        {NavBarLogin()}
                    </div>
                </div>
            </header>

            {/* <h1>ioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiwe</h1> */}
            
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
            <footer>
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
            </footer>
        </div>
    )
}

export default Layout