import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Box, Link, Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';


export default function Skills({ setLoad }) {
    setLoad(100)
    return (
        <div>
            <Box p={14} pb={42} height="auto" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Typography variant="h4" color="darkslategray" fontFamily="monospace">Projects</Typography>
                <Typography variant="h6" color="Highlight" pb={3}>Some of My Projects</Typography>
                <Container>
                    <Typography variant="h5" justifySelf="start" fontFamily="monospace" color="currentcolor" pb={3}><i class="uil uil-bullseye"></i> So far I have done only one project with Node and express js ,<p></p>Project is mentioned below</Typography>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography variant="h4"><i class="uil uil-presentation"></i> Create My Blogs Project</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Card sx={{ maxWidth: 745 }}>
                                <CardActionArea>
                                    <Box display="flex">
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="signup.png"
                                            alt="green iguana"
                                        />
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="dark.png"
                                            alt="green iguana"
                                        />
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image="blog.png"
                                            alt="green iguana"
                                        />
                                    </Box>
                                </CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Create-My-Blogs
                                    </Typography>
                                    <Typography variant="h5" fontFamily="sans-serif" color="text.secondary" sx={{ marginBottom: 2 }}>
                                        This is blog website where you can create your own blogs and post it in your time line , you can also delete those blogs which you want to delete.at first you have to make your account then you can login eith your username and password.After successfully login ,now you can create beautifull blogs and post those in your time line.
                                    </Typography>
                                    <Link href="https://github.com/subhajit20/Create-My-Blogs-Application"><Button variant="outlined">Projet GitHub Link</Button></Link> <p></p>
                                    <Link href="https://create-my-blogs.herokuapp.com/signup"><Button variant="outlined">Deployed Project Link of Heroku</Button></Link>
                                </CardContent>
                            </Card>
                        </AccordionDetails>
                    </Accordion>
                </Container>
            </Box>
        </div >
    );
}


