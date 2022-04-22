import React from 'react'
import { Typography, Box, CardContent, Card, } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import Contact from './Contact';
import './style.css'

function myForm({ setLoad }) {

    setLoad(100)

    return (
        <div style={{ disply: "flex", flexDirection: "row", marginBottom: "5rem", }} >
            <Box className="contactForm" p={5} borderRadius={10} display="flex" justifyContent="space-evenly" alignItems="center" >
                <Box order={1} >
                    <Typography className="contactHeading" gutterBottom fontStyle={'inherit'} color={'textSecondary'} variant='h4' sx={{ maxWidth: "300px", margin: "auto", textDecoration: "underline" }}>Contact With Me</Typography>
                    <Card sx={{ maxWidth: 345, marginTop: "2rem" }}>

                        <CardContent>
                            <Typography gutterBottom variant="h5" fontFamily="revert" component="div">
                                <EmailIcon />subhajitstudent8@gmail.com
                            </Typography>
                            <Typography gutterBottom variant="h5" component="div">

                            </Typography>
                            <Typography variant="h6" fontFamily="inherit" color="text.secondary">
                                Needs to get in touch with me either fill the form out with your inquary
                                or find the id subhajitstudent8@gmail.com
                                you would like to contact below
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Box className="inputForm" order={2} >
                    <Contact />
                </Box>
            </Box>
        </div >
    )
}

export default myForm;
