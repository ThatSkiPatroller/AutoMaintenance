import React, { Component } from "react";
import NavBar from '../../Components/AppBar';
import CarsForm from  './AddCarForm';
import CarsList from './CarList';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Sidebar from '../../Components/Sidebar';
import CarAPI from '../../utils/CarAPI';

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
        backgroundColor: '#efefef',

        padding: theme.spacing.unit * 3,
    },
});

class AddCar extends Component {
  state = {
    carName: "",
    carMake: "",
    carModel: "",
    carYear: "",
    lastMaintainanceDate: "",
    cars: [],
    carNameError: "",
    carMakeError: "",
    carModelError: "",
    carYearError: "",
    carMileageError: "",
    carMileage: "",
    carlastMaintainaceError: "",
    formSuccessMessage: "",
  };

    // When the component mounts, load all Cars and save them to this.state.Cars.
    componentDidMount() {
        this.loadCars();
        console.log(this.state.cars)
      }

    // Loads all Cars and saves them to this.state.Cars.
    loadCars = () => {
        CarAPI.getCars()
            .then(res =>
              this.setState({ 
                cars: res.data
              }))
            .catch(err => console.log('loading Cars is not working: ' + err));
    };

    // Deletes a Car from the database with a given id, then reloads Cars from the db
    deleteCar = id => {
        CarAPI.deleteCar(id)
            .then(res => this.loadCars())
            .catch(err => console.log(err));
    };

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
        carMakeError: "",
        formSuccessMessage: "",
      });
  }
  handleCarMileageChange = (event) => {
    this.setState({ 
      carMileage: event.target.value,
      carMileageError: "",
      formSuccessMessage: "",
    });
    console.log(this.state.carMileage)
}

  handleCarModelChange = (event) => {
    this.setState({ 
      carModel: event.target.value,
      carModelError: "",
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
     handleCarDateChange = (event) => {
        this.setState({ 
          CarDate: event.target.value,
          CarDateError: "",
          formSuccessMessage: "",
        });
    }


    
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
        
        if (this.state.carMileage === "") {
          this.setState({
            carMileageError: "Enter the Car Mileage."
          })
        }

        else {
          CarAPI.saveCar({
              carName: this.state.carName,
              carModel: this.state.carModel,
              carMake: this.state.carMake,
              carYear: this.state.carYear,
              carMileage: this.state.carMileage,
              lastMaintainanceDate: this.state.lastMaintainanceDate,
          })
              .then(res => this.loadCars())
              .catch(err => console.log('there is an error in saving the Car', err));
          
          this.setState({
            formSuccessMessage: `${this.state.carName} added successfully!`,
          });
    
        // Clear form
        document.getElementById('Car-form').reset();
        }
    };

    render() {
      const { classes } = this.props;
      return [
        <NavBar />,
        <div className={classes.appFrame}>
          <Sidebar />
          <main className={classes.content}>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Typography variant="display1" align="left">
                    Add Car
                  </Typography>
                </Grid>
              </Grid>

              <div className="main-content-section">
                <Grid container spacing={16}>
                  <Grid item xs={12} sm={12} md={6}>
                    <CarsForm
                      handleFormSubmit={this.handleFormSubmit}
                      handleCarNameChange={this.handleCarNameChange}
                      handleCarMakeChange={this.handleCarMakeChange}
                      handleCarModelChange={this.handleCarModelChange}
                      handleCarYearChange={this.handleCarYearChange}
                      handleCarMileageChange={this.handleCarMileageChange}
                      handleCarLastMaintainancedateChange={this.handleCarLastMaintainancedateChange}
                      carNameError = {this.state.carNameError}
                      carMakeError = {this.state.carMakeError}
                      carModelError = {this.state.carModelError}
                      carYearError = {this.state.carYearError}
                      carMileageError = {this.state.carMileageError}
                      carName = {this.state.carName}
                      carMake = {this.state.carMake}
                      carModel = {this.state.carModel}
                      carYear = {this.state.carYear}
                      carMileage = {this.state.carMileage}
                      lastMaintainanceDate = {this.state.lastMaintainanceDate}
                      formSuccessMessage = {this.state.formSuccessMessage}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    {this.state.cars.map(car => {
                      return (
                        <CarsList
                          id={car._id}
                          key={car._id}
                          carName={car.carName}
                          carModel={car.carModel}
                          carMake={car.carMake}
                          carYear={car.carYear}
                          carMileage={car.carMileage}
                          lastMaintainanceDate={car.lastMaintainanceDate}
                          deleteCar={this.deleteCar}
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
export default withStyles(styles)(AddCar);
