import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Container, Alert, AlertTitle } from '@mui/material';
import './style.css';
import { TextField, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle'
import HttpsIcon from '@mui/icons-material/Https';
import Loader from './Loader';
import { motion } from 'framer-motion';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Login() {
    const [myEmail, setEmail] = useState();
    const [password, setPassword] = useState();
    const [flag, setFlag] = useState();
    const [message, setMessage] = useState();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch("https://quiz-realm-api.herokuapp.com/login", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                myEmail, password
            })
        });
        const result = await response.json()
        cookies.set('quiz-realm', result.token, { path: '/', sameSite: 'strict', maxAge: 86400000 });
        if (response.status === 200) {
            setFlag(true);
            setMessage(<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><Container sx={{ marginBottom: "1.3rem" }}><Alert severity="success" variant="filled">
                <AlertTitle>Success</AlertTitle>
                Login Successful!
            </Alert></Container></motion.div>)
            setTimeout(() => {
                setMessage();
            }, 3000)
        } else {
            setFlag(false);
            setMessage(<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}><Container sx={{ marginBottom: "1.3rem" }}><Alert severity="error" variant="filled">
                <AlertTitle>OOPs!</AlertTitle>
                The email address or password you entered is invalid!
            </Alert></Container></motion.div >)
            setTimeout(() => {
                setMessage();
            }, 3000);
        }
    }
    useEffect(() => {
        if (flag) {
            setTimeout(() => {

                navigate('/dashboard')
            }, 3000)
        } else {

        }
    }, [flag, navigate])

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            {flag ? <Loader /> : ""}
            <Box sx={{ marginTop: "4rem" }} className="signup_page" display="flex" justifyContent="center" alignItems="center">
                <Box>
                    <motion.img initial={{ scal1: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.7 }} src="../quiz_images/login.jpg" className="signup" alt="login_image" />
                </Box>
                <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <form id="loginform" autoComplete="off" method="post" onSubmit={handleSubmit}>
                        <Box display="flex" justifyContent="center" margin="1rem" alignItems="center">
                            <AccountCircleIcon fontSize='large' /> <h3>  Login To Your Account</h3>
                        </Box>
                        {flag ? message : message}
                        <Box display="flex" justifyContent="center" margin="1rem" alignItems="center">
                            <AccountCircle sx={{ mr: 1, my: 0.5 }} />
                            <TextField name="myEmail" type="email" id="outlined-basic1" className="username" label="Enter Your Email" variant="outlined" onChange={(e) => setEmail(e.target.value)} />
                        </Box>
                        <Box display="flex" justifyContent="center" alignItems="center">
                            <HttpsIcon sx={{ mr: 1, my: 0.5 }} />
                            <TextField type="password" name="password" id="outlined-basic2" className="username" label="Enter Your Password" variant="outlined" onChange={(e) => setPassword(e.target.value)} />
                        </Box>
                        <Box display="flex" justifyContent="center" margin="1rem" alignItems="center">
                            <Button type="submit" variant="contained" >
                                Login
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Box >
        </motion.div>
    )
}

export default Login
