// Importing React since we are using React.
import React, { Component } from 'react';
import { Subhead, Link } from 'rebass';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import appointment from '../../assets/images/appointment.png';
import dealer from '../../assets/images/dealer.png';
import NavBar from '../../Components/AppBar';
import './style.css'

/*const styles = {
  root: {
    flexGrow: 1,
  },
  headline: {
    marginTop: 50,
  },
  heading: {
    fontSize: 35,
  }
};*/


class Home extends Component {
  render() {
    const { classes } = this.props;
    return [
      <NavBar />,
      <div style={{ padding: 70 }}>
        <Grid item xs={12} className="heading">
          <Grid container spacing={24} className="main" justify="center">
            <Typography variant="display1" align="center">
              What would you like to do today?
            </Typography>
          </Grid>
        </Grid>,

        <div className="main-content-section">
          <Grid container spacing={24} className="main">
            <Grid item xs={12} sm={6} md={4} className="title">
              <Typography align="center" className="title">
                Appointments
              </Typography>
              <Subhead align="center">
                <Link
                  href="/appointments"
                >
                  <img src={appointment} alt="calendar" />
                </Link>
              </Subhead>
            </Grid>

            <Grid item xs={12} sm={6} md={4}className="title">
              <Typography align="center" className="title">
                Search for Dealers
              </Typography>
              <Subhead align="center">
                <Link  href="/dealers"
                >
                  <img src={dealer} alt="dealers" />
                </Link>
              </Subhead>
            </Grid>
            
          </Grid>
        </div>,
      </div>,
    ];
  }
}

// Exporting the Home component so that the App.js file can render the Home page.
export default Home;
