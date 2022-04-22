import React, { useState, useEffect } from 'react'
import { TextField, Button, Box, Alert, AlertTitle } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

function Contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState({ name: "", email: "", message: "" });
    const [show, setShow] = useState("none");
    const [alertMessage, setAlert] = useState();
    const [success, setSuccess] = useState()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("/submit", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                name, email, message
            })
        })
        let errors = [];
        const result = await response.json();
        if (response.status === 200) {
            console.log(result.successfull)

            setSuccess(result.successfull.msg)
            setAlert(<Alert severity="success">
                <AlertTitle>Success</AlertTitle>
                {result.successfull.msg} — <strong>check it out!</strong>
            </Alert>)

            setTimeout(() => {
                setAlert()
            }, 4000)
            console.log(success)
        } else if (response.status === 500) {
            setShow("block")
            Object.keys(result.errors).forEach((x) => {
                errors.push(result.errors[x].msg)
            })
            console.log(errors)
            setError({
                name: errors[0],
                email: errors[1],
                message: errors[2]
            })

            setTimeout(() => {
                setShow("none")
                setError({
                    nameError: "",
                    emailError: "",
                    messageError: ""
                })
            }, 2000);
        }
    }
    useEffect(() => {
        handleSubmit()
    }, [])
    return (
        <div>
            {alertMessage}
            <form onSubmit={handleSubmit} noValidate method="post" >
                <Box>
                    <TextField label={'Enter Your Name'} autoComplete={"off"} color={'secondary'} fullWidth type="text" variant={'outlined'} onChange={(e) => setName(e.target.value)} name="name" required sx={{ marginTop: "2rem" }} border />
                    <p style={{ color: "red", display: show, fontSize: "1.2rem" }}>{error.name}</p>
                </Box>
                <Box>
                    <TextField label={'Enter Your Email'} autoComplete={"off"} color={'secondary'} fullWidth type="email" variant={'outlined'} name="email" onChange={(e) => setEmail(e.target.value)} required sx={{ marginTop: "2rem" }} />
                    <p style={{ color: "red", display: show }}>{error.email}</p>
                </Box>
                <Box mb={2}>
                    <TextField label={'Give Your meaage Here'} rows={10} autoComplete={"off"} color={'secondary'} fullWidth multiline type="text" variant={'outlined'} onChange={(e) => setMessage(e.target.value)} name="message" required sx={{ marginTop: "2rem" }} />
                    <p style={{ color: "red", display: show }}>{error.message}</p>
                </Box>
                <Box>
                    <Button variant="contained" endIcon={<SendIcon />} type="submit" fullWidth sx={{ fontSize: "1.2rem" }}>
                        Send
                    </Button>
                </Box>
            </form>
        </div>
    )
}

export default Contact
