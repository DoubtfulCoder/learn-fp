import * as React from 'react'

export const MDXContext = React.createContext()

function MDXWrapper(props) {
    const [url, setUrl] = React.useState(props.url)
    return (
        <MDXContext.Provider value={{ url, setUrl }}>
            {props.url}
            {props.children}
        </MDXContext.Provider>
    )
}

export default MDXWrapper