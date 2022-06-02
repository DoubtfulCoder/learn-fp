import * as React from 'react'
import { getStatus } from '../Firebase.js'
import { MDXContext } from './MDXWrapper/MDXWrapper'
import Table from 'react-bootstrap/Table'

function ResourceList(props) {
    let { children, title } = props
    const { url, setUrl } = React.useContext(MDXContext)

    console.log("PROPS", props)
    console.log("url", props.url)

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
            console.log("statuses", statuses)
        })
    });

    // console.log(statuses)
    
    return (
        <div> 
            {`THE PROPER URL IS: ${url}`}           
            <Table responsive="md" borderless style={{maxWidth: "65%"}}>
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
            </Table>
            <br />
        </div>
    )
}

export default ResourceList