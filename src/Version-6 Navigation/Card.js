import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bounce } from "react-awesome-reveal";
import './card.css';
import { motion } from 'framer-motion'


function Card({ image, point, subject }) {
    const navigate = useNavigate()
    function goQuizPage() {
        const qs = prompt("Do you wnat to solve this quiz... either press 'yes' to solve the quiz or press other key to terminate?")

        if (qs === 'yes') {
            navigate(`/quiz/${point}`)
        } else {
            alert("Ok!")
        }
    }
    return (
        <Bounce triggerOnce>
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.5 }} className="mainCard">
                <img className="cardImg" src={image} alt='cardImg' />
                <div>
                    <h5 >{subject}</h5>
                    <p >This is description area...</p>

                    <button onClick={goQuizPage} className="cardButton"
                    >
                        Go and Solve this
                    </button>
                </div>
            </motion.div>
        </Bounce>
    )
}

export default Card;