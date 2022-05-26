import * as React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { getStatus } from '../Firebase.js'

function ResourceList({ children, title }) {
    const th_classes = "p-2 bg-light border"
    // console.log("children: ")
    // console.log(children)
    // console.log(children[0].props.keyVal)

    if (!Array.isArray(children)) {
        children = [children]
    }

    let statuses = []

    children.forEach(child => {
        getStatus("haskell", "basics", "yo").then((result) => {
            statuses.push(result)
            console.log(statuses)
        })
    });

    // console.log(statuses)
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th className={th_classes}>Status</th>
                        <th className={th_classes}>Source</th>
                        <th className={th_classes}>Problem</th>
                        <th className={th_classes}>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {children.map((resource, i) => (
                        resource
                        // <div>
                        //     {resource}
                        //     {statuses[i]}
                        // </div>
                    ))}
                    {/* {children} */}
                </tbody>
            </table>
            <br />
        </div>
    )
}

export default ResourceList