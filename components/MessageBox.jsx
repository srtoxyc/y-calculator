import React from 'react'

import '../styles/MessageBox.css'

function MessageBox(props) {
    return(
        <>
            <div className="message-box">
                <h3>Useful Keys</h3>

                <ul className="keybindings">
                    <li><code>C</code> &gt; Cleans up the operation</li>
                    <li><code>Enter</code> &gt; Calculates the operation</li>
                    <li><code>º</code> &gt; Sets an square root</li>
                </ul>   
            </div>
        </>
    )
}

export default MessageBox
