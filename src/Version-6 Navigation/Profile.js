import React, { useState, useEffect } from 'react'
import { Fade } from "react-awesome-reveal";
import './profile.css'

function Profile() {
    const [myData, setData] = useState([]);
    async function getPerson() {
        const res = await fetch('/person', {
            method: 'GET',
        });
        const data = await res.json();
        setData([data.p]);
    }

    useEffect(() => {
        getPerson()

        return () => {
            getPerson()
        }
    }, [])

    return (
        <Fade>
            <div className='container1'>
                <div className="profile_card">
                    <img className='img1' src='../quiz_images/man.png' alt='profile_img' />
                    {
                        myData.map((x, y) => {

                            return <div key={y}>
                                <h6>Name : {x[0].username}</h6>
                                <h6>Email :{x[0].myEmail} </h6>
                            </div>
                        })
                    }
                </div>
            </div>
        </Fade>
    )
}

export default Profile
