import * as React from 'react'

function TimeBox() {
    // TODO : get rid of this select box?
    return (
        <select name="time" id="time">
            <option value="1">1 month</option>
            <option value="2">2 months</option>
            <option value="3">3 months</option>
        </select>
    )
}

export default TimeBox