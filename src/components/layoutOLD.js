import * as React from 'react'
import { Link } from 'gatsby'
import { 
    topNav, siteTitle, navLink, navLinkText, 
    loginSignUp, loginButton, signUpButton,
    bottomNav, 
} from './layout.module.css'

function Layout({ pageTitle, children }) {
    return (
        <div>
            <title>{pageTitle}</title>
            <header>
                <h1 className={siteTitle}>{pageTitle}</h1>
                {/* Top navigation */}
                <nav>
                    <ul className={topNav}>
                        <li className={navLink}>
                            <Link to="/" className={navLinkText}>
                                Home
                            </Link>
                        </li>
                        <li className={navLink}>
                            <Link to="/courses" className={navLinkText}>
                                Courses
                            </Link>
                        </li>
                        <li className={navLink}>
                            <Link to="/blog" className={navLinkText}>
                                Blog
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* Login and sign up */}
                <div className={loginSignUp}>
                    <Link to='/login' className={loginButton}>
                        Login
                    </Link>
                    <Link to='/sign-up' className={signUpButton}>
                        Sign up
                    </Link>
                </div>
            </header>

            {/* <h1>ioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiweioweioewhfoiwe</h1> */}
            
            {children}

            {/* Bottom footer */}
            <footer>
                <ul className={bottomNav}>
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