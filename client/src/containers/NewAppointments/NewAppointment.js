// Importing React since we are using React.
import React, { Component } from "react";
import AppointmentForm from './NewAppointmentForm';
import AppointmentAPI from '../../utils/AppointmentAPI';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
// Import Sidebar component.
import Sidebar from '../../Components/Sidebar';
// Importing Navbar component.
import NavBar from '../../Components/AppBar';
import dealerData from '../../dealerData';
var ls = require('local-storage');

//Style
const styles = theme => ({
  root: theme.mixins.gutters({
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#e53935',
    display: 'block',
    overflowX: 'auto',
    maxWidth: '80%',
  }),
  table: {
    minWidth: 700,
    tableLayout: 'auto',
    display: 'block',
    width: '100%',
    overflowX: 'auto',
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  title: {
    fontFamily: 'Bebas Neue',
    color: '#303f9f',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: 'theme.palette.background.default',
    },
  },
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
    color: 'white',
  },
  heading: {
    marginTop: 40,
  },
});

class NewAppointment extends Component {
  state = {
    appointmentName: "",
    appointmentDoctor: "",
    appointmentDate: "",
    appointmentTime: "",
    appointments: [],
    description: "",
    cars: [],
    appointmentNameError: "",
    appointmentDoctorError: "",
    appointmentDateError: "",
    descriptionError: "",
    appointmentTimeError: "",
    formSuccessMessage: "",

  };
  // When the component mounts, load all appointments and save them to this.state.appointments.
  
  componentDidMount() {

}

  // Loads all appointments and saves them to this.state.appointments.
  loadAppointments = () => {
    AppointmentAPI.getAppointments()
      .then(res =>
        this.setState({ appointments: res.data})
      )
      .catch(err => console.log(err));
  };

  // Deletes an appointment from the database with a given id, then reloads appointments from the db
  deleteAppointment = id => {
    AppointmentAPI.deleteAppointment(id)
      .then(res => this.loadAppointments())
      .catch(err => console.log(err));
  };
  // Keep track of what user enters for appointment name so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleAppointmentNameChange = (event) => {
    this.setState({ 
      appointmentName: event.target.value,
      appointmentNameError: "",
      formSuccessMessage: "",
    });
  }

  handleDescriptionChange = (event) => {
    this.setState({ 
      description: event.target.value,
      descriptionError: "",
      formSuccessMessage: "",
    });
  }

 
 // Keep track of what user types into appointment date input field so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleAppointmentDateChange = (event) => {
    this.setState({ 
      appointmentDate: event.target.value,
      appointmentDateError: "",
      formSuccessMessage: "",
    });
  }

  // Keep track of what user types into appointment time input field so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleAppointmentTimeChange = (event) => {
    this.setState({ 
      appointmentTime: event.target.value,
      appointmentTimeError: "",
      formSuccessMessage: "",
    });
  }
  handlePickupChange = (event) => {
    this.setState({ 
      isPickUp: event.target.value,
      pickUpError: "",
      formSuccessMessage: "",
    });
  }
  handleDropOffChange = (event) => {
    this.setState({ 
      isDropOff: event.target.value,
      dropOffError: "",
      formSuccessMessage: "",
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

        // If appointment name field is empty when user submits form, show error.
    if (this.state.appointmentName === "") {
      this.setState({
        appointmentNameError: "Enter a name for the appointment."
      })
    }
    if (this.state.description === "") {
      this.setState({
        descriptionError: "Enter description."
      })
    }
    if (this.state.isPickUp === "") {
        this.setState({
          pickUpError: "Enter a name for the appointment."
        })
      }
      if (this.state.isDropOff === "") {
        this.setState({
          dropOffError: "Enter a name for the appointment."
        })
      }

    // if the appointment date field is empty when user submits form, show error.
    if (this.state.appointmentDate === "" || this.state.appointmentDate === "mm/dd/yyyy") {
      this.setState({
        appointmentDateError: "Use the date picker to select the date of the appointment."
      })
    }

    // if the appointment time field is empty when user submits form, show error.
    if (this.state.appointmentTime === "") {
      this.setState({
        appointmentTimeError: "Use the time picker to select the time of the appointment in HH:MM AM/PM format."
      })
    }

    else {
      var dealer = dealerData[this.props.match.params.id]
      var availOvernight = false
      if (this.state.appointmentTime === "Overnight Service") {
        availOvernight = true
      }
      var userId = ls.get('userId');
       console.log(userId)

      var jsonObj =  {
        appointmentName: this.state.appointmentName,
        date: this.state.appointmentDate,
        time: this.state.appointmentTime,
        dealerName: dealer.dealerName,
        dealerId: dealer.dealerName,
        dealerAddress: dealer.dealerName,
        dealerPhoneNo: dealer.dealerName,
        isPickUp: this.state.isPickUp,
        isDropOff: this.state.isDropOff,
        isOvernight: availOvernight,
        description: this.state.description,
        userId: userId,
      }

      AppointmentAPI.saveAppointment(jsonObj)
        .then(res => this.loadAppointments())
        .catch(err => console.log(err));

      this.setState({
          formSuccessMessage: `Your appointment is schedules on ${this.state.appointmentDate} at ${this.state.appointmentTime}. If you have availed Overnight Service, your car will be picked-up at 10:00 PM and drop off by next morning 07:00 AM on selected date.`,
      });
      // Clear form
      document.getElementById('appointment-form').reset();
    }
  };

  

  constructor(props) {
    super(props);
    this.state = {
        appointmentName: "",
        appointmentDate: "",
        appointmentTime: "",
        appointments: [],
        appointmentNameError: "",
        pickUpError: "",
        dropOffError: "",
        appointmentTimeError: "",
        formSuccessMessage: "",
        isOvernight: true,
        isPickUp: true,
        isDropOff: true,
      };
      console.log(this.props.match.params.id) 
  }
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
              <Typography variant="display2" align="left" className={classes.title}>
                   Add an Appointment
                  </Typography>
               
              </Grid>
            </Grid>
            <div className="main-content-section">
             <Grid container spacing={24} className={classes.heading}>
                <Grid item xs={12}>
                  <AppointmentForm
                    cars={this.state.savedcars}
                    appointmentTime={this.state.appointmentTime}
                    description={this.state.description}
                    handleFormSubmit={this.handleFormSubmit}
                    handleAppointmentNameChange={this.handleAppointmentNameChange}
                    handleAppointmentDateChange={this.handleAppointmentDateChange}
                    handleAppointmentTimeChange={this.handleAppointmentTimeChange}
                    handleDescriptionChange={this.handleDescriptionChange}
                    appointmentNameError = {this.state.appointmentNameError}
                    appointmentDateError  = {this.state.appointmentDateError}
                    appointmentTimeError = {this.state.appointmentTimeError}
                    descriptionError = {this.state.descriptionError}
                    pickUpError = {this.state.dropOffError}
                    dropOffError = {this.state.pickUpError}
                    handlePickupChange = {this.handlePickupChange}
                    handleDropOffChange = {this.handleDropOffChange}
                    formSuccessMessage = {this.state.formSuccessMessage}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        </main>
      </div>
    ];
  }
}

// Exporting the Appointments component
// so that the App.js file can use/render the Appointments page.
export default withStyles(styles)(NewAppointment);
