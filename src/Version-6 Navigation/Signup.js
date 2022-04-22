import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import './style.css';
import { TextField, Button, Container, Alert, AlertTitle } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle'
import HttpsIcon from '@mui/icons-material/Https';
import Loader from './Loader';
import { motion } from 'framer-motion';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate()
    const [username, setUername] = useState();
    const [myEmail, setmyEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [flag, setFlag] = useState();
    const [message, setMessage] = useState();


    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch('https://quiz-realm-api.herokuapp.com/signup', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ username, myEmail, password, confirmpassword })
        });
        if (response.status === 200) {
            setFlag(true);
            setMessage(<Container><Alert severity="success" variant="filled">
                <AlertTitle>Success</AlertTitle>
                Signup Successful — <strong>Go and Login... !</strong>
            </Alert></Container>)
            setTimeout(() => {
                setMessage();
            }, 3000)
        } else {
            setFlag(false);
            setMessage(<Container><Alert severity="error" variant="filled">
                <AlertTitle>Failed</AlertTitle>
                Failed to Signup — <strong>Go and Fill the form correctly...... !</strong>
            </Alert></Container>)
            setTimeout(() => {
                setMessage()
            }, 3000)
        }
    }

    useEffect(() => {
        if (flag) {
            setTimeout(() => {

                navigate('/')
            }, 3000)

        } else {

        }
    }, [flag, navigate])
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {flag ? <Loader /> : ""}
            <Box sx={{ marginTop: "3rem" }} className="signup_page" display="flex" justifyContent="center" alignItems="center">
                <Box>

                    <img src="../quiz_images/signup.jpg" className="signup" alt="signup_image" />
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <h4><AccountCircleIcon fontSize='large' />Create a New Quiz Account</h4>
                    {flag ? message : message}
                    <form action='/signup' id="signupForm" method="post" onSubmit={handleSubmit}>
                        <Box display="flex" justifyContent="center" margin="1rem" alignItems="center">
                        </Box>
                        <Box display="flex" justifyContent="center" margin="1rem" alignItems="center">
                            <AccountCircle sx={{ mr: 1, my: 0.5 }} />
                            <TextField component="form" value={username} onChange={(e) => setUername(e.target.value)} name="username" id="outlined-basic1" className="username" label="Enter Your Username" variant="outlined"
                            />
                        </Box>
                        <Box display="flex" justifyContent="center" margin="1rem" alignItems="center">
                            <MailIcon sx={{ mr: 1, my: 0.5 }} />
                            <TextField component="form" value={myEmail} onChange={(e) => setmyEmail(e.target.value)} type="email" name="myEmail" id="outlined-basic2" className="username" label="Enter Your Email" variant="outlined" />
                        </Box>
                        <Box display="flex" justifyContent="center" margin="1rem" alignItems="center">
                            <HttpsIcon sx={{ mr: 1, my: 0.5 }} />
                            <TextField component="form" value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="outlined-basic3" className="username" label="Enter Your Password" variant="outlined" />
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <HttpsIcon sx={{ mr: 1, my: 0.5 }} />
                            <TextField component="form" value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} type="password" name="confirmpassword" id="outlined-basic4" className="username" label="Confirm Your Password" variant="outlined" />
                        </Box>
                        <Box display="flex" justifyContent="center" margin="1rem" alignItems="center">
                            <Button type="submit" variant="contained" >
                                Signup
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box >
        </motion.div>
    )
}

export default Signup
