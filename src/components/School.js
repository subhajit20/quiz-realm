import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';

export default function School() {
    return (
        <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper' }} >
            <ListItem alignItems="flex-start">
                <ListItemAvatar >
                    <Typography variant="h3" fontFamily="sans-serif" m={2}>
                        <i class="uil uil-backpack"></i>
                    </Typography>
                </ListItemAvatar>
                <Typography variant="h5" fontFamily="revert">I have done my secondary and heigher seconday exam from Kanchrapara Harnett High School</Typography>
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
                <Typography variant="h3" fontFamily="sans-serif" m={2}>
                    <i class="uil uil-university"></i>
                </Typography>
                <Typography variant="h5" fontFamily="revert">Currently I am pursuing Bachelor in Computer Application from Techno Main Salt Lake College at Salt Lake </Typography>

            </ListItem>
        </List >
    );
}
