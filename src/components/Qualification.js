import React from 'react'
import { Box, Typography, } from '@mui/material';
import School from './School';

function Qualification({ setLoad }) {
    setLoad(100)
    return (

        <div>
            <Box p={6} m={5} borderRadius={6} backgroundColor="#E6E6E9" display="flex" flexDirection="column" justifyContent="ceneter" alignItems="center">
                <Typography variant="h4" color="darkslategray" fontFamily="sans-serif">Qualification</Typography>
                <Typography variant="h6" color="Highlight" pb={3}>My Personal Journey</Typography>
                <Typography variant="h6" color="MenuText" fontFamily="-moz-initial" fontSize={40} pb={3}>Education</Typography>
                <School />
            </Box>
        </div>

    )
}

export default Qualification
