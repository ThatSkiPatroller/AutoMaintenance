import React, { Component } from "react";
import AppointmentsForm from './AppointmentsForm';
import AppointmentsList from './AppointmentsList';
import AppointmentAPI from '../../utils/AppointmentAPI';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Sidebar from '../../Components/Sidebar';
// Importing Navbar component.
import NavBar from '../../Components/AppBar';

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

class Appointments extends Component {
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
  };
  // When the component mounts, load all appointments and save them to this.state.appointments.
  componentDidMount() {
    console.log('mount')
    this.loadAppointments()
  }

  // Loads all appointments and saves them to this.state.appointments.
  loadAppointments = () => {
    console.log('inn')
    AppointmentAPI.getAppointments()
      .then(res => {
        console.log(res.data)
        this.setState({ appointments: res.data})
      })
      .catch(err => console.log(err));
  };

  // Deletes an appointment from the database with a given id, then reloads appointments from the db
  deleteAppointment = id => {
    AppointmentAPI.deleteAppointment(id)
      .then(res => this.loadAppointments())
      .catch(err => console.log(err));
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
          <p> appointment {this.state.appointments}</p>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.root}>
                    <div className={classes.tableWrapper}>
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow>
                            <TableCell><b>Name</b></TableCell>
                            <TableCell><b>Dealer</b></TableCell>
                            <TableCell numeric><b>Date</b></TableCell>
                            <TableCell numeric><b>Time (HH:MM)</b></TableCell>
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
                                Dealer={appointment.Dealer}
                                clinic={appointment.clinic}
                                deleteAppointment={this.deleteAppointment}
                              />
                            );
                          })}
                        </TableBody>
                      </Table>
                    </div>
                  </Paper>
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
