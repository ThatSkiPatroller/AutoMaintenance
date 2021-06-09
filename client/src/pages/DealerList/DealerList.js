// Importing React since we are using React.
import React, { Component } from "react";
// Importing Navbar component.
import NavBar from '../../Components/AppBar';
import DealerInfo from './DealerInfo';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
// Import Sidebar component.
import Sidebar from '../../Components/Sidebar';
import dealerData from '../../dealerData'

//Style
const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    display: 'flex',
    flexWrap: 'wrap',
  }),
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#86BBD8',
    padding: theme.spacing.unit * 3,
  },
  DealerClinicList: {
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#33658A',
  },
  clinicSection: {
    marginTop: 45,
  },
});

class DealerList extends Component {
  state = {
    DealerFirstName: "",
    DealerLastName: "",
    DealerClinic: "",
    DealerPhone: "",
    Dealers: [],
    clinicName: "",
    clinicAddress: "",
    clinicCity: "",
    clinicState: "",
    clinicZip: "",
    clinicPhone: "",
    clinics: [],
    DealerFirstNameError: "",
    DealerLastNameError: "",
    DealerClinicError: "",
    DealerPhoneError: "",
    clinicNameError: "",
    clinicAddressError: "",
    clinicCityError: "",
    clinicStateError: "",
    clinicZipError: "",
    clinicPhoneError: "",
    DealerFormSuccessMessage: "",  
    clinicFormSuccessMessage: "",  
  };

  // When the component mounts, load all Dealers and clinics and save them to this.state.Dealers and this.state.clinics.
  componentDidMount() {
    
  }
  render() {
    const { classes } = this.props;
    return [
      <NavBar />,  
      <div className={classes.appFrame}>
        <Sidebar />
        <main className={classes.content}>
          <div style={{ padding: 70 }}>
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography variant="display1" align="left">
                  Dealers near your area
                </Typography>
              </Grid>
            </Grid>

            <div className="main-content-section">
              <Grid container spacing={16}>
                
                <Grid item xs={12} sm={12} md={6}>
                  <Paper elevation={4} className={classes.DealerClinicList}>
                    <Typography gutterBottom variant="headline" component="h2" style={{textAlign: 'center'}} >
                      Dealer list
                    </Typography>
                     {dealerData.map(Dealer => {
                       return (
                        <DealerInfo 
                          id={Dealer.id}
                          key={Dealer.id}
                          DealerFirstName={Dealer.name}
                          DealerLastName={Dealer.address}
                          DealerClinic={Dealer.phoneNo}
                          DealerPhone={Dealer.phoneNo}
                          deleteDealer = { this.deleteDealer } />
                      );
                    })}
                  </Paper>
                </Grid>
              </Grid>

              <Grid container spacing={16} className={classes.clinicSection}>
                <Grid item xs={12} sm={12} md={6}>
                </Grid>
               
              </Grid>
            </div>
          </div>
        </main>
      </div>,
    ];
  }
}

// Exporting the DealerList component so that the App.js file
// can use/render the My Dealer List page.
export default withStyles(styles)(DealerList);
