// Importing React since we are using React.
import React, { Component } from "react";
import AppointmentsForm from './NewAppointmentForm';
import AppointmentAPI from '../../utils/AppointmentAPI';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
// Import Sidebar component.
import Sidebar from '../../Components/Sidebar';
// Importing Navbar component.
import NavBar from '../../Components/AppBar';
import dealerData from '../../dealerData'
import queryString from 'query-string';
import { useParams } from "react-router-dom"

//Style
const styles = theme => ({
  root: theme.mixins.gutters({
    marginTop: theme.spacing.unit * 3,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#33658A',
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
    backgroundColor: '#86BBD8',
    padding: theme.spacing.unit * 3,
  },
  heading: {
    marginTop: 40,
  },
});

class NewAppointments extends Component {
  state = {
    appointmentName: "",
    appointmentDealer: "",
    appointmentDate: "",
    appointmentTime: "",
    appointments: [],
    appointmentNameError: "",
    appointmentDealerError: "",
    appointmentDateError: "",
    appointmentTimeError: "",
    formSuccessMessage: "",
    dealerID: '',
  };
  // When the component mounts, load all appointments and save them to this.state.appointments.
  componentDidMount() {
    console.log(this.props.match.params.id)
      this.setState({ dealerID: this.props.match.params.id})
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

  // Keep track of what user selects for Dealer so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleAppointmentDealerChange = (event) => {
    this.setState({ 
      appointmentDealer: event.target.value,
      appointmentDealerError: "",
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


  handleFormSubmit = event => {
    event.preventDefault();

        // If appointment name field is empty when user submits form, show error.
    if (this.state.appointmentName === "") {
      this.setState({
        appointmentNameError: "Enter a name for the appointment."
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
      //Save appointment to database if all fields are filled out.
      // Show form success message to user.

      console.log('user id', this.state.userID)

      const userId = localStorage.getItem('userId');

      AppointmentAPI.saveAppointment({
        appointmentName: this.state.appointmentName,
        doctor: this.state.dealerID,
        date: this.state.appointmentDate,
        time: this.state.appointmentTime,
        userId: userId
      })
        .then(res => this.loadAppointments())
        .catch(err => console.log(err));

      this.setState({
          formSuccessMessage: `${this.state.appointmentName} with Dr. ${this.state.appointmentDealer} on ${this.state.appointmentDate} added successfully!`,
      });

      
      // Clear form
      document.getElementById('appointment-form').reset();
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
                  Appointments
                </Typography>
              </Grid>
            </Grid>

            <div className="main-content-section">
              <Grid container spacing={24}>
              </Grid>

              <Grid container spacing={24} className={classes.heading}>
                <Grid item xs={12}>
                  <AppointmentsForm
                    Dealers={this.state.Dealers}
                    clinics={this.state.clinics}
                    handleFormSubmit={this.handleFormSubmit}
                    handleAppointmentNameChange={this.handleAppointmentNameChange}
                    handleAppointmentDealerChange={this.handleAppointmentDealerChange}
                    handleAppointmentDateChange={this.handleAppointmentDateChange}
                    handleAppointmentTimeChange={this.handleAppointmentTimeChange}
                    handleAppointmentClinicChange={this.handleAppointmentClinicChange}
                    appointmentNameError = {this.state.appointmentNameError}
                    appointmentDealerError = {this.state.appointmentDealerError}
                    appointmentDateError  = {this.state.appointmentDateError}
                    appointmentTimeError = {this.state.appointmentTimeError}
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
export default withStyles(styles)(NewAppointments);
