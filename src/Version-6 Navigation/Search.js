import React from 'react'
import './search.css';
import { Fade } from "react-awesome-reveal";

function Search({ handlechange }) {
    return (
        <Fade>
            <div style={{ position: 'relative', top: '4rem' }}>
                <div className="wrap">
                    <div className="search">
                        <input type="text" className="searchTerm" placeholder="Search your favorite quiz topic" onChange={handlechange} />
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default Search
