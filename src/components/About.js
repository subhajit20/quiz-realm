import React from 'react'
import { Avatar, Box, Card, CardContent, Typography, Button } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

function About() {
    return (
        <div>
            <Box p={6} m={5} borderRadius={6} backgroundColor="#E6E6E9" display="flex" flexDirection="column" justifyContent="ceneter" alignItems="center">
                <Typography variant="h4" color="darkslategray" fontFamily="monospace">About Me</Typography>
                <Typography variant="h6" color="Highlight" pb={3}>My Introduction</Typography>
                <Box pb={5}>
                    <Avatar src="subhajit.jpg" sx={{ width: 120, height: 120, border: "4px solid #3185FC" }} />
                </Box>
                <Box>
                    <Card sx={{ maxWidth: 450, marginBottom: 3 }} >
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Hello,I'm Subhajit...
                            </Typography>
                            <Typography variant="h5" color="darkslateblue">
                                A web developer with 1.5 year of experience,working in web technologies, and UI/UX design,
                                delivering quality work
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                <Button variant="contained" endIcon={<div> <FileDownloadOutlinedIcon /></div>}>
                    Download My CV
                </Button>
            </Box>
        </div>
    )
}

export default About
