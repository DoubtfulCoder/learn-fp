import * as React from 'react'
import { Link } from 'gatsby'
import * as styles from './dropdown.module.css'

function Dropdown({linkToDropdown, links}) {
    const [profileLinksVis, setProfileLinksVis] = React.useState(false)

    return (
        <div>
            <a
                // Toggle link visibility onClick and make invisible when anything else focused
                onClick={() => setProfileLinksVis(!profileLinksVis)} 
                onBlur={() => { 
                    console.log("ACTIVE", document.activeElement)
                    setTimeout(() => {
                        if (document.activeElement.className != "dropdownLink") {
                            // Invisible when body clicked EXCEPT when actual menu clicked
                            setProfileLinksVis(false)
                        }
                    }, 100)
                }}
            >
                {React.cloneElement(linkToDropdown, { tabIndex: 0 })}
            </a>

            <ul 
                className={styles.dropdownMenu}
                style={{display: profileLinksVis ? 'block' : 'none'}}
            >
                {links.map((linkArr, i) => (
                    <li key={`item${i}`}>
                        <Link to={linkArr[1]} className='dropdownLink'>
                            {linkArr[0]}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Dropdown