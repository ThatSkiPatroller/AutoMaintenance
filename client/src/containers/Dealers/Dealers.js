// Importing React since we are using React.
import React, { Component } from "react";
// Importing Navbar component.
import NavBar from '../../Components/AppBar';
// Import CarsList
import DealerList from './DealersList';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
// Import Sidebar component.
import Sidebar from '../../Components/Sidebar';
import dealerData from '../../dealerData';
import dealerAPI from '../../utils/dealerAPI';

// Style/Theme
const styles = theme => ({
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
});

class Dealer extends Component {
  state = {
   dealers: []
  };
    componentDidMount() {
      this.loadDealer()
    }

    loadDealer = () => {
      dealerAPI.getdealers()
          .then(res =>
            this.setState({
              dealers: res.data
            }))
          .catch(err => console.log('loading dealers is not working: ' + err));

          console.log(this.state.dealers)
  };

    

    // Keep track of what user types for Car name so that input can be grabbed later.
    // If form validation error is showing, remove error from page when user starts typing.
    handleCarNameChange = (event) => {
        this.setState({ 
          carName: event.target.value,
          carNameError: "",
          formSuccessMessage: "",
        });
    }

    handleCarMakeChange = (event) => {
      this.setState({ 
        carMake: event.target.value,
        carNameError: "",
        formSuccessMessage: "",
      });
  }

  handleCarModelChange = (event) => {
    this.setState({ 
      carModel: event.target.value,
      carMakeError: "",
      formSuccessMessage: "",
    });
}

handleCarYearChange = (event) => {
  this.setState({ 
    carYear: event.target.value,
    carYearError: "",
    formSuccessMessage: "",
  });
}
  handleCarLastMaintainancedateChange = (event) => {
    this.setState({ 
      lastMaintainanceDate: event.target.value,
      formSuccessMessage: "",
    });
  }
   

    // Keep track of what user types into Car date input field so that input can be grabbed later.
    // If form validation error is showing, remove error from page when user starts typing.
    handleCarDateChange = (event) => {
        this.setState({ 
          CarDate: event.target.value,
          CarDateError: "",
          formSuccessMessage: "",
        });
    }

    // Keep track of what user types into number of tablets input field so that input can be grabbed later.
    // If form validation error is showing, remove error from page when user starts typing.
    handleCarAmountChange = (event) => {
        this.setState({ 
          CarAmount: event.target.value,
          CarAmountError: "",
          formSuccessMessage: "",
        });
    }

    // Keep track of what user types into directions for use input field so that input can be grabbed later.
    // If form validation error is showing, remove error from page when user starts typing.
    handleCarDirectionsChange = (event) => {
        this.setState({ 
          CarDirections: event.target.value,
          CarDirectionsError: "",
          formSuccessMessage: "",
        });
    }

    // When user submits Car form, save Car information to database.
    handleFormSubmit = event => {
        event.preventDefault();
        console.log("submi")
      console.log(this.state.carName)
        // If Car name field is empty when user submits form, show error.
        if (this.state.carName === "") {
          this.setState({
            carNameError: "Enter the name of the Car."
          })
        }

        // If the date prescribed field is empty when user submits form, show error.
        if (this.state.carMake === "") {
          this.setState({
            carMakeError: "Enter the Car Make"
          })
        }

        // if the Car amount field is empty when user submits form, show error.
        if (this.state.carModel === "") {
          this.setState({
            carModelError: "Enter the Car Model."
          })
        }

        if (this.state.carYear === "") {
          this.setState({
            carYearError: "Enter the Car Year."
          })
        }

        else {
           }
    };

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
                    Dealers
                  </Typography>
                </Grid>
              </Grid>

              <div className="main-content-section">
                <Grid container>
                  <Grid item xs={12} sm={12} md={6}>
                    {this.state.dealers.map(dealer => {
                      return (
                        <DealerList
                          id={dealer.id}
                          key={dealer.id}
                          dealerName={dealer.username}
                          dealerAddress={dealer.address}
                          dealerPhoneNo={dealer.phoneNo}
                          dealerpickup={dealer.pickUp}
                          dealerdropOff={dealer.dropOff}
                          dealerOvernightAvailability={dealer.overnightAvailable}
                        />
                      );
                    })}
                  </Grid>
                </Grid>
              </div>
            </div>
          </main>
       </div >
      ];
    }
  }

// Exporting the Cars component so that the App.js file can use/render the My Cars page.
export default withStyles(styles)(Dealer);
