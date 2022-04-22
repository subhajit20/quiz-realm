import React, { useState } from 'react'
import { Bounce } from 'react-awesome-reveal';
function Showqs({ question, handleClick }) {
    const [count, setCount] = useState();

    return (
        <div>
            <Bounce triggerOnce><h4>{question} ?</h4></Bounce>

        </div >
    )
}

export default Showqs
