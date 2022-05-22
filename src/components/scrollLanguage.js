import * as React from 'react'

function scrollLanguage({ items }) {
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