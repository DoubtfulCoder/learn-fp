import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'

function scrollLanguage({ items }) {
    // const data = useStaticQuery(graphql`
    //     query MyQuery {
    //         allFile {
    //             nodes {
    //                 name
    //             }
    //         }
    //     }  
    // `)
    return (
        <div>
        {
            items.map(item => (
                <h3>{item.language}</h3>
            ))
        }
        </div>
    )
}

export default scrollLanguage