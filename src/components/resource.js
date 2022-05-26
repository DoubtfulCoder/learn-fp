import * as React from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase.js'
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
    constructor({ source, name, link, notes="", keyVal }) {
        super({ source, name, link, notes, keyVal })

        this.state = {
            status: "incomplete"
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
                <td className={td_classes}>
                    {this.state.status}
                </td>
                <td key="source" className={td_classes}>
                    {this.source}
                </td>
                <td key="name" className={td_classes}>
                    <a href={this.link} target="_blank">{this.name}</a>
                </td>
                <td key="notes" className={td_classes}>
                    {this.notes}
                </td>
            </tr>
        )
    }
}

export default Resource