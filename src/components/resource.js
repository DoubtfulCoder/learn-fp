import * as React from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase.js'
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

class Resource extends React.Component {
    // constructor({ source, name, link, notes="", keyVal }) {
    //     super({ source, name, link, notes, keyVal })

    //     this.state = {
    //         status: "Not Started"
    //     }
    // }

    constructor(props) {
        super(props)

        this.state = {
            status: "Not Started"
        }
    }

    componentDidMount() {
        this.getUserData()
    }

    getUserData() {
        let docRef = doc(db, 'users', 'user-test')
        const unsub = onSnapshot(docRef, (doc) => {
            const source = doc.metadata.hasPendingWrites ? "Local" : "Server"
            console.log(source, " data: ", doc.data())
            try {
                // checks if in database
                const newStatus = doc.data()["haskell"]["basic"]["basic"]
                this.setState({
                    status: newStatus
                });
            } catch (e) {
                // not in database
            }
            
        });
        console.log("Data retrieved")
    }

    render() {
        const td_classes = "p-2 bg-light border"

        return (
            <tr key={this.keyVal}>
                <td className={td_classes} style={{width: "20%"}}>
                    <Dropdown onSelect={(key) => console.log("KEY", key)}>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                {this.state.status + " "}
                                {React.cloneElement(
                                    icons[possibleStatuses.indexOf(this.state.status)], 
                                    { style: {color: "white"} })}
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
                    {/* {this.state.status} */}
                </td>
                <td key="source" className={td_classes} style={{width: "15%"}}>
                    {this.props.source}
                </td>
                <td key="name" className={td_classes} style={{width: "30%"}}>
                    <a href={this.props.link} target="_blank">{this.props.name}</a>
                </td>
                <td key="notes" className={td_classes} style={{width: "35%"}}>
                    {this.props.notes}
                </td>
            </tr>
        )
    }
}

export default Resource