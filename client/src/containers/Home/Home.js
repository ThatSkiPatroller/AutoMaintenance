// Importing React since we are using React.
import React, { Component } from 'react';
// Importing UI components from rebass.
import { Subhead, Link } from 'rebass';
// Import UI components from material-ui-next.
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
// Importing icons/images
import appointment from '../../assets/images/appointment.png';
import ferrari from '../../assets/images/3-audi-png-car-image.png';
import search from '../../assets/images/search.png';

// Importing Navbar component.
import NavBar from '../../Components/AppBar';

const styles = {
  root: {
    flexGrow: 1,
  },
  headline: {
    marginTop: 50,
  },
  heading: {
    fontSize: 35,
    fontFamily: 'Play',
    color: '#303f9f',
  },
  carimag: {
    width: 300
  },
  what: {
    fontFamily: 'Play',
    color: '#303f9f',
  }
};

class Home extends Component {
  render() {
    const { classes } = this.props;
    return [
      <NavBar />,
      <div style={{ padding: 70 }}>
        <Grid item xs={12} className={classes.headline}>
          <Grid container spacing={24} className={classes.root} justify="center">
            <Typography variant="display1" align="center" className={classes.what}>
              What would you like to do today?
            </Typography>
          </Grid>
        </Grid>,

        <div className="main-content-section">
          <Grid container spacing={24} className={classes.root}>
           
           

            <Grid item xs={12} sm={6} md={4} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                View Appointments
              </Typography>
              <Subhead align="center">
                <Link
                  href="/appointments"
                >
                  <img src={appointment} alt="calendar" />
                </Link>
              </Subhead>
            </Grid>

            <Grid item xs={12} sm={6} md={4} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                Search Dealers
              </Typography>
              <Subhead align="center">
                <Link
                  href="/dealers"
                >
                  <img src={search} alt="line graph" />
                </Link>
              </Subhead>
            </Grid>
         

            <Grid item xs={12} sm={6} md={4} className={classes.headline}>
              <Typography align="center" className={classes.heading}>
                Add Vehicle
              </Typography> 
              <Subhead align="center">
                <Link
                  href="/addcar"
                >
                  <img src={ferrari} alt="line graph" className={classes.carimag}/>
                </Link>
              </Subhead>
            </Grid>
          </Grid>
        </div>
      </div>
    ];
  }
}

// Exporting the Home component so that the App.js file can render the Home page.
export default withStyles(styles)(Home);
