import { useState } from 'react'
import '../styles/NumberBTN.css'

function NumberBTN (props) {
    const [isHovered, setHovered] = useState(false);

    return (
        <button onClick={() => {props.updateData(props.content)}} special={props.special} fill={props.fill}>
            <h4>{props.content}</h4>
        </button>
    )
}

export default NumberBTN
