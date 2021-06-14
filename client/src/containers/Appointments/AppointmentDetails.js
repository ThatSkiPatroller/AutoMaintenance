// Importing React since we are using React.
import React, { Component } from "react";
// Importing Navbar component.
import NavBar from '../../Components/AppBar';
import AppointmentInfo from './AppointmentInfo';
import AppointmentAPI from '../../utils/AppointmentAPI';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import Sidebar from '../../Components/Sidebar';

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
  
});

class AppointmentDetails extends Component {
  state = {
    dealerFirstName: "",
    dealerAddress: "",
    dealerPhoneNo: "",
    appointmentdate: "",
    appointmentTime: [],
    isPickUp: "",
    isDrop: "",
    appointment: [],
  };

  componentDidMount() {
    var id = this.props.match.params.id
    console.log(id)

    this.getAppointment(id)
  }
  getAppointment = id => {
      console.log("innn")
     AppointmentAPI.getAppointment(id)
      .then(res =>
        this.setState({ appointments: res.data}))
      .catch(err => console.log(err));
      console.log(this.state.appointment)
  };

  loadAppointment = () => {
   /* _id: "60c094f50b5c5e2c2b407336", 
    appointmentName : "wrrr", 
    doctor : "5", 
    date : "2021-06-22T00:00:00.000+0000", 
    time : "07:21", 
    userCreated : "2021-06-09T10:16:21.845+0000", */
    AppointmentAPI.getAppointment("60c094f50b5c5e2c2b407336")
    .then(res =>
      this.setState({ appointment: res.data }))
    .catch(err => console.log('there is an issue loading appointment: ' + err));

    console.log(this.state.appointment)
  }
//for rendering doctors list 
  loadDoctors = () => {
     };

 

  // Deletes a doctor from the database with a given id, then reloads doctors from the db
  deleteAppointment = id => {
    AppointmentAPI.deleteDoctor(id)
      .then(res => console.log("deleted"))
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
                  Appointment Details
                </Typography>
              </Grid>
            </Grid>

            <div className="main-content-section">
              <Grid container spacing={16}>
               
                <Grid item xs={12} sm={12} md={6}>
                  <Paper elevation={4}>
                    <Typography gutterBottom variant="headline" component="h2" style={{textAlign: 'center'}} >
                      Appointment Details
                    </Typography>
                    {this.state.appointment.map(appt => {
                       return (
                        <AppointmentInfo 
                          id={appt._id}
                          key={appt._id}
                          />
                      );
                    })}
                 
                       
                  </Paper>
                </Grid>
              </Grid>

              <Grid container spacing={16}>
                
              
              </Grid>
            </div>
          </div>
        </main>
      </div>,
    ];
  }
}

// Exporting the DoctorList component so that the App.js file
// can use/render the My Doctor List page.
export default withStyles(styles)(AppointmentDetails);
