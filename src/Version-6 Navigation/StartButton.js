import React from 'react';
import { Bounce } from "react-awesome-reveal";
import './button.css'

function StartButton({ handleChange, buttonValue }) {
    return (
        <Bounce>
            <div style={{ display: "flex", justifyContent: "center", alignItems: 'center', flexWrap: "wrap" }}>
                <button type="submit" className="button-54" role="button" onClick={handleChange}>{buttonValue}</button>
            </div>
        </Bounce>
    )
}


export default StartButton

