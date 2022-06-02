import * as React from 'react'
import { doc, onSnapshot, setDoc } from "firebase/firestore"
import { db } from '../Firebase.js'
import { MDXContext } from './MDXWrapper/MDXWrapper'
import Dropdown from 'react-bootstrap/Dropdown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCirclePlay, faBrain, faArrowRightFromBracket, faCheck
} from '@fortawesome/free-solid-svg-icons'

const possibleStatuses = ["Not Started", "Working", "Skipped", "Complete"]
const icons = [
    <FontAwesomeIcon icon={faCirclePlay} style={{color: "blue"}}/>, 
    <FontAwesomeIcon icon={faBrain} style={{color: "orange"}}/>, 
    <FontAwesomeIcon icon={faArrowRightFromBracket} style={{color: "purple"}}/>,
    <FontAwesomeIcon icon={faCheck} style={{color: "green"}}/>
]

const td_classes = "p-2 bg-light border"

function getLangFromUrl(url) {
    return url.slice(0, url.indexOf('/'))
}

function getLessonFromUrl(url) {
    return url.slice(url.indexOf('/') + 1)
}

function changeTaskStatus(language, lesson, exerciseKey, newStatus) {
    let docRef = doc(db, 'users', 'user-test')

    let newDoc = {}
    newDoc[language] = {}
    newDoc[language][lesson] = {}
    newDoc[language][lesson][exerciseKey] = newStatus

    setDoc(docRef, newDoc, {merge:true})
}

// function Resource({ source, name, link, notes="", keyVal }) {
//     const td_classes = "p-2 bg-light border"
//     return (
//         <tr key={keyVal}>
//             <td key="source" className={td_classes}>{source}</td>
//             <td key="name" className={td_classes}>
//                 <a href={link} target="_blank">{name}</a>
//             </td>
//             <td key="notes" className={td_classes}>{notes}</td>
//             <td>
//             {
//                 getStatus("haskell", "basics", "yo").then((result) => {
//                     return result
//                 })
//             }   
//             </td>
//         </tr>
//     )
// }

// class Resource extends React.Component {
//     // constructor({ source, name, link, notes="", keyVal }) {
//     //     super({ source, name, link, notes, keyVal })

//     //     this.state = {
//     //         status: "Not Started"
//     //     }
//     // }

//     constructor(props) {
//         super(props)

//         this.state = {
//             status: "Not Started"
//         }
//     }

//     componentDidMount() {
//         this.getUserData()
//     }

//     getUserData() {
//         let docRef = doc(db, 'users', 'user-test')
//         const unsub = onSnapshot(docRef, (doc) => {
//             const source = doc.metadata.hasPendingWrites ? "Local" : "Server"
//             console.log(source, " data: ", doc.data())
//             try {
//                 // checks if in database
//                 const newStatus = doc.data()["haskell"]["basic"]["basic"]
//                 this.setState({
//                     status: newStatus
//                 })
//             } catch (e) {
//                 // not in database
//             }
            
//         })
//         console.log("Data retrieved")
//     }

//     render() {
//         const td_classes = "p-2 bg-light border"

//         return (
//             <tr key={this.keyVal}>
//                 <td className={td_classes} style={{width: "20%"}}>
//                     <Dropdown onSelect={(key) => console.log("KEY", key)}>
//                             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                                 {this.state.status + " "}
//                                 {React.cloneElement(
//                                     icons[possibleStatuses.indexOf(this.state.status)], 
//                                     { style: {color: "white"} })}
//                             </Dropdown.Toggle>
            
//                             <Dropdown.Menu>
//                                 {
//                                     possibleStatuses.map((possibleStat, i) => (
//                                         <Dropdown.Item key={i} eventKey={i}>
//                                             {possibleStat + " "}
//                                             {icons[i]}
//                                         </Dropdown.Item>
//                                     ))
//                                 }
//                                 {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
//                             </Dropdown.Menu>
//                         </Dropdown>
//                     {/* {this.state.status} */}
//                 </td>
//                 <td key="source" className={td_classes} style={{width: "15%"}}>
//                     {this.props.source}
//                 </td>
//                 <td key="name" className={td_classes} style={{width: "30%"}}>
//                     <a href={this.props.link} target="_blank">{this.props.name}</a>
//                 </td>
//                 <td key="notes" className={td_classes} style={{width: "35%"}}>
//                     {this.props.notes}
//                 </td>
//             </tr>
//         )
//     }
// }

function Resource({ source, name, link, notes="", keyVal }) {
    const [status, setStatus] = React.useState("Not Started")
    const { url, setUrl } = React.useContext(MDXContext)
    const language = getLangFromUrl(url)
    const lesson = getLessonFromUrl(url)

    React.useEffect(getUserData, [])

    function getUserData() {
        let docRef = doc(db, 'users', 'user-test')
        const unsub = onSnapshot(docRef, (doc) => {
            const source = doc.metadata.hasPendingWrites ? "Local" : "Server"
            try {
                // checks if in database
                const newStatus = doc.data()[language][lesson][keyVal]
                if (newStatus) { setStatus(newStatus) }
            } catch (e) {
                // not in database
            }
            
        })
    }

    return (
        <tr key={keyVal}>
            <td className={td_classes} style={{width: "20%"}}>
                <Dropdown onSelect={
                    key => changeTaskStatus(language, lesson, keyVal, possibleStatuses[key])
                }>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {status + " "}
                            {React.cloneElement(
                                icons[possibleStatuses.indexOf(status)], 
                                { style: {color: "white"} })
                            }
                        </Dropdown.Toggle>
        
                        <Dropdown.Menu>
                            {
                                possibleStatuses.map((possibleStat, i) => (
                                    <Dropdown.Item key={i} eventKey={i}>
                                        {possibleStat + " "}
                                        {icons[i]}
                                    </Dropdown.Item>
                                ))
                            }
                            {/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                        </Dropdown.Menu>
                    </Dropdown>
                {/* {status} */}
            </td>
            <td key="source" className={td_classes} style={{width: "15%"}}>
                {source}
            </td>
            <td key="name" className={td_classes} style={{width: "30%"}}>
                <a href={link} target="_blank">{name}</a>
            </td>
            <td key="notes" className={td_classes} style={{width: "35%"}}>
                {notes}
            </td>
        </tr>
    )
}

export default Resource