import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularColor() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                <CircularProgress color="success" />
            </Stack>
        </div>
    );
}