import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './style.css'
import StartButton from './StartButton';
import QuestionTag from './QuestionTag';
import Screenloader from './CercularProgress'
import Person from './Person';
import { Bounce } from "react-awesome-reveal";

function Quiz_qs() {
    const [flag, setFlag] = useState(false);
    const [myData, setData] = useState([]);
    const [load, setLoad] = useState(true);
    const [text, setText] = useState();
    const [count, setCount] = useState(0);
    const [right, setRight] = useState([]);
    const [wrong, setWrong] = useState([]);
    const [qs, setQs] = useState([]);
    const [no, setNo] = useState(0);


    const loc = useLocation();
    const navigate = useNavigate();
    const d = loc.pathname.split("/")

    async function action() {
        const res = await fetch(`https://api.api-ninjas.com/v1/trivia?category=${d[2]}`, {
            method: "GET",
            headers: {
                'X-Api-Key': '4kadMbjX+jyYifXIFN9uwg==wkh6R37LWFZp76xx',
            }
        });
        const data = await res.json();
        if (res.status === 200) {
            setTimeout(() => {
                setFlag(true)
                setData([data])
            }, 2000)
            setFlag(false)
            setLoad(true)
            setNo((x) => x + 1)
            setQs((x) => {
                return [...x, data];
            })
        } else {
            console.log(data)
        }
    }

    async function stop() {
        if (count <= 0) {
            navigate(`/result/${0}/${qs.length}/${right.length}/${wrong.length}`, {
                state: {
                    right,
                    wrong
                }
            })
        } else if (count > 0) {
            navigate(`/result/${count}/${qs.length}/${right.length}/${wrong.length}`)
        }
    }

    function handleSubmit() {
        if (myData) {
            myData.map((q) => {
                if (text.toLowerCase() === q[0].answer.toLowerCase()) {
                    setCount((x) => x + 2)
                    setRight((x) => {
                        return [...x, q]
                    })
                } else if (text.toLowerCase() !== q[0].answer.toLowerCase()) {
                    setCount((x) => x - 1)
                    setWrong((x) => {
                        return [...x, q]
                    })
                } else if (text === null) {
                    setCount((x) => x - 1)
                }
            })
            setLoad(false)
        } else if (text === null) {
            setLoad(false)
            setCount((x) => x - 1)
        }
    }

    useEffect(() => {
        action()

        return () => {
            action()
            setFlag(false)
        }
    }, [])
    return (
        <div style={{ backgroundColor: '#FFE8D1', height: '100vh' }}>
            {!flag && <Screenloader />}
            <Person />
            {flag && myData.map((x, y) => {
                return <Bounce key={y}><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '3rem' }}><h5>{no}# - {x[0].question}</h5></div></Bounce>
            })}
            {flag ? <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}><h3>Your Marks : {count}</h3></div> : ''
            }
            {load ? <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexWrap: 'wrap' }}><QuestionTag handleClick={(e) => setText(e.target.value)} myName={d[2]} /> <StartButton handleChange={handleSubmit} buttonValue='Submit Your Answer' /></div> : <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}><StartButton handleChange={action} buttonValue={'Next Question'} /><StartButton handleChange={stop} buttonValue='Stop' /></div>}
        </div >
    )
}

export default Quiz_qs
