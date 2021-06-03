import React from 'react';
import './style.css';
import { AppBar, Toolbar, Button, IconButton, Typography, Grid } from '@material-ui/core';

function Navbar () {
    return(
        <div className="root">
        <AppBar position="static">
            <Toolbar>
                <Grid
                    justify="flex-start"
                    container
                    
                >
                <IconButton edge="start" color="inherit" aria-label="menu">
                    
                </IconButton>
                <Typography variant="h6">
                    <h3>Car Maintenance</h3>
                </Typography></Grid>
                <Button color="inherit" justify="flex-end">Login</Button>
            
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar;