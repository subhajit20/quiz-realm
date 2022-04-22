import React from 'react'
import { Box } from '@mui/system';
import { useLocation } from 'react-router-dom';


function Resultpage() {
    const loc = useLocation()
    const resultarr = loc.pathname.split('/')
    return (
        <Box sx={{ marginTop: "3rem" }} className="signup_page" display="flex" justifyContent="center" alignItems="center">
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <h6>Your Total Marks : {resultarr[2]}</h6>
                <h6>Totally you have answered : {resultarr[3]}</h6>
                <h6>Total Number of right answers : {resultarr[4]}</h6>
                <h6>Total Number of wrong answers : {resultarr[5]}</h6>
            </Box>
        </Box >
    )
}

export default Resultpage
