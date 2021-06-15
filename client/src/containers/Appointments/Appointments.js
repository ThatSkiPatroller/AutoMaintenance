// Importing React since we are using React.
import React, { Component } from "react";
// Importing the AppointmentsForm component.
// Importing the AppointmentsList component.
import AppointmentsList from './AppointmentsList';
// Import API
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
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
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
    backgroundColor: '#efefef'
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
    borderWidth: 10,
    boxShadow: 'rgba(0, 0, 0, 0.15) 2px 5px 5px 5px',
  },
  content: {
    flexGrow: 1,
    backgroundColor: '#86BBD8',
    backgroundColor: '#efefef',
    padding: theme.spacing.unit * 3,
    backgroundColor: '#efefef',
    
  },
  heading: {
    marginTop: 40,
  },
  box: {
    padding: 30,
   borderWidth: 10,
    boxShadow: 'rgba(0, 0, 0, 0.15) 2px 5px 5px 5px',
    color: 'hsl(206, 1, 28)',
    marginTop: 30,
    borderColor: 'white',
  },
  head: {
    fontFamily: 'Bebas Neue',
    color: '#303f9f',
  }
});

class Appointments extends Component {
  state = {
    appointmentName: "",
    appointmentDoctor: "",
    appointmentDate: "",
    appointmentTime: "",
    appointments: [],
   
    appointmentNameError: "",
    appointmentDoctorError: "",
    appointmentDateError: "",
    appointmentTimeError: "",
    formSuccessMessage: "",

  };
  // When the component mounts, load all appointments and save them to this.state.appointments.
  componentDidMount() {
    this.loadAppointments();
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
    console.log(id)
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure you want to delete this?',
      buttons: [
        {
          label: 'Yes',
          onClick: () =>   {
            AppointmentAPI.deleteAppointment(id)
            .then(res => this.loadAppointments())
            .catch(err => console.log(err));
          }
        },
        {
          label: 'No',
 
        }
      ]
    });

   };
  handleAppointmentDetails = id => { 
      console.log("deee" + id )
  };


  render() {
    const { classes } = this.props;
    return [
      <NavBar />,
      <div className={classes.appFrame}>
        <Sidebar />
        <main className={classes.content}>
          <div className="box">
            <Grid container spacing={24}>
              <Grid item xs={12}>
                <Typography variant="display2" className={classes.head} align="left">
                  Appointments
                </Typography>
              </Grid>
            </Grid>

            <div className="main-content-section">
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.root}>
                    <div className={classes.tableWrapper}>
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell numeric><b>Date</b></TableCell>
                            <TableCell numeric><b>Time (HH:MM)</b></TableCell>
                            <TableCell numeric><b>Pickup</b></TableCell>
                            <TableCell numeric><b>Dropoff</b></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody className={classes.tabledata}>
                          {this.state.appointments.map(appointment => {
                            return (
                              <AppointmentsList
                                id={appointment._id}
                                key={appointment._id}
                                name={appointment.appointmentName}
                                date={appointment.date}
                                time={appointment.time}
                                isPickup = {appointment.isPickUp}
                                isDropOff = {appointment.isDropOff}
                                deleteAppointment={this.deleteAppointment}
                                handleAppointmentDetails = {this.handleAppointmentDetails}
                              />
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </Paper>
                </Grid>
              </Grid>

              <Grid container spacing={24} className={classes.heading}>
                <Grid item xs={12}>
                  
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
export default withStyles(styles)(Appointments);
