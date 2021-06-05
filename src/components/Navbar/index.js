import React from 'react';
import './style.css';
import { AppBar, Toolbar, Button, IconButton, Typography, Grid } from '@material-ui/core';

function Navbar (props) {
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
                <Button color="inherit" href='/Login' justify="flex-end">{props.btn}</Button>
                <Button color="inherit" href='/signup' justify="flex-end">Sign up</Button>
                <Button color="inherit" href='/dashboard' justify="flex-end">Dashboard</Button>
                <Button color="inherit" href='/addcar' justify="flex-end">Add car</Button>
                <Button color="inherit" href='/dealerlist' justify="flex-end">Dealer list </Button>
                <Button color="inherit" href='/booking/id:' justify="flex-end">Booking </Button>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default Navbar;