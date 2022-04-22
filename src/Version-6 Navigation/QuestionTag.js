import React from 'react';
import { Container, Box } from '@mui/material';
import TextField from '@mui/material/TextField';

function QuestionTag({ handleClick, myName }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "2rem",
            }}
        >
            <Container>
                <TextField fullWidth label="Give Your Answer..." id="fullWidth" name={myName} onChange={handleClick} />
            </Container>
        </Box>
    )
}

export default QuestionTag
