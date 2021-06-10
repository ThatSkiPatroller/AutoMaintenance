import React, { Component } from "react";
import CarsForm from './CarsForm';
import CarsList from './CarsList';
import CarsAPI from '../../utils/CarsAPI';
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

class Cars extends Component {
  state = {
    carModel: "",
    carMake: "",
    carYear: "",
    cars: [],
    carModelError: "",
    carMakeError: "",
    carYearError: "",
    formSuccessMessage: "",
  };
  // When the component mounts, load all appointments and save them to this.state.appointments.
  componentDidMount() {
    this.loadCars()
  }

  // Loads all appointments and saves them to this.state.appointments.
  loadCars = () => {
    CarsAPI.getCars()
      .then(res => {
        console.log(res.data)
        this.setState({ cars: res.data})
      })
      .catch(err => console.log(err));
  };

  // Deletes an appointment from the database with a given id, then reloads appointments from the db
  deleteCars = id => {
    CarsAPI.deleteCars(id)
      .then(res => this.loadCars())
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
                </Typography>
              </Grid>
            </Grid>

            <div className="main-content-section">
          <p> Cars {this.state.cars}</p>
              <Grid container spacing={24}>
                <Grid item xs={12}>
                  <Paper className={classes.root}>
                    <div className={classes.tableWrapper}>
                      <Table className={classes.table}>
                        <TableHead>
                          <TableRow>
                            <TableCell><b>Model</b></TableCell>
                            <TableCell><b>Make</b></TableCell>
                            <TableCell><b>Year</b></TableCell>
                            <TableCell></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody className={classes.tabledata}>
                          {this.state.cars.map(car => {
                            return (
                              <CarsList
                                id={car._id}
                                key={car._id}
                                model={car.carModel}
                                make={car.carMake}
                                year={appointment.carYear}
                                deleteCar={this.deleteCars}
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
export default withStyles(styles)(Cars);
