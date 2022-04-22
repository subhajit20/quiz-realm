import React from 'react';
import './style.css'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Navbar() {
    return (
        <Box className='Navbar'>
            <Typography variant="h5"><Link to="/signup" id="menu1">Signup</Link></Typography>
            <Typography variant="h5"><Link to="/" id="menu2">Login</Link></Typography>
        </Box>
    );
}

export default Navbar
