import * as React from 'react'
import { getCookieValue } from '../components/layout.js'

function Dashboard() {
    const uid = getCookieValue('uid')
    if (!uid) {  // Not logged in
        window.location.replace("/")
        return
    } else {
        return <div>You are signed in</div>
    }
}

export default Dashboard