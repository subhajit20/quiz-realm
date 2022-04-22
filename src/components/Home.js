import React from 'react'
import { Box, Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import BrushIcon from '@mui/icons-material/Brush';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import "./style.css"

function Home({ setLoad }) {
    setLoad(100)
    return (
        <Box className="Homebox" display="flex" justifyContent="space-evenly" alignItems="center" p={5} borderRadius={6} m={5} height="auto" sx={{ backgroundColor: "#30343F" }}>
            <Box displa="flex" justifyContent="center" alignItems="center">
                <List className="homeList" sx={{ width: '100%', maxWidth: 360, color: "white" }}>
                    <ListItem>
                        <ListItemAvatar>
                            <AccountCircleIcon sx={{ width: 50, height: 50 }} />
                        </ListItemAvatar>
                        <ListItemText /><Typography variant="h5">Hi! I am Subhajit Ghosh</Typography>
                    </ListItem>
                    <hr />
                    <ListItem>
                        <ListItemAvatar>
                            <AccountBoxIcon sx={{ width: 50, height: 50, marginRight: 4 }} />
                        </ListItemAvatar>
                        <ListItemText /><Typography variant="h5">Wellcome to my Portfolio Website</Typography>
                    </ListItem>
                    <hr />
                    <ListItem>
                        <ListItemAvatar >
                            <BrushIcon sx={{ width: 50, height: 50, marginRight: 4 }} />
                        </ListItemAvatar>
                        <ListItemText /><Typography variant="h5" >I am a Web Developer,UI/UX designer and Digital Illustrator</Typography>
                    </ListItem>
                </List>
            </Box>
            <Box style={{ borderBottom: "10px solid #7EBDC2", borderRadius: "50%" }}>
                <Box className="imageBox">
                    <Avatar id="myImage"
                        alt="Remy Sharp"
                        src="subhajit.jpg"
                    />
                </Box>
            </Box>
        </Box>
    )
}

export default Home
