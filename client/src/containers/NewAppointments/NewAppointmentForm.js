// Importing React since we are using React.
import React from 'react';
// Importing UI components from material-ui-next
import Typography from 'material-ui/Typography';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Card, { CardContent } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import { InputLabel } from 'material-ui/Input';
import Tooltip from 'material-ui/Tooltip';
import IconButton from 'material-ui/IconButton';

// Style for add appointments form.
const styles = {
  textField: {
    marginTop: 60,
  },
  // Tell Material-UI what's the font-size on the html element is.
  typography: {
    htmlFontSize: 40,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: '#33658A',
    maxWidth: '85%',
  },
  formControl: {
    minWidth: 120,
    marginTop: 30,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#33658A',
    backgroundColor: '#e53935',
    color: 'white',
  },
  formError: {
    color: 'red',
  },
  formSuccess: {
    color: 'green',
    marginTop: 10,
  }
};

class NewAppointmentForm extends React.Component {
  handleDoctorMenuOption = event => {
    this.setState(
      { 
        [event.target.name]: event.target.value,
        cars: []
      });
    event.preventDefault();
    this.props.handleAppointmentDoctorChange(event);
  }
  componentDidMount() {
  }

  state = {
    timesSlots: ["09:00 AM", "10:00 AM"],
  }
  
  handleAppointmentTimeChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    this.props.handleAppointmentTimeChange(event);
  }
  handlePickUpChange = event => {
    this.setState({  pickUp: event.target.value })
    event.preventDefault();
    this.props.handlePickupChange(event);
  }
  handleDropOffChange = event => {
    this.setState({  dropOff: event.target.value })
    event.preventDefault();
    this.props.handleDropOffChange(event);
  }
  state = {
    value: '',
    pickUp: '',
    dropOff: ''
  }

  render() {
    const { classes, cars } = this.props;
    const timesSlots = ["Overnight Service", "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"]
    console.log(timesSlots)
    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <form noValidate autoComplete="off" id="appointment-form">
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="appointment-name">
                  <span>
                    Appointment name
                    <Tooltip  
                      title="Specify a name for the appointment to help identify the appointment later."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField  id="appointment-name"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal" className={classes.textField}
                  value={this.props.appointmentName}
                  onChange={this.props.handleAppointmentNameChange}
                />
                <Typography className={classes.formError} component="p">{this.props.appointmentNameError}</Typography>
              </FormControl>

              
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="appointment-date">
                  <span>
                    Appointment date
                    <Tooltip  
                      title="Use the date picker to specify the date of the appointment."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="appointment-date"
                  type="date"
                  defaultValue="MM-DD-YYYY"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={this.props.appointmentDate}
                  onChange={this.props.handleAppointmentDateChange}
                />
                <Typography className={classes.formError} component="p">{this.props.appointmentDateError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="appointment-time">
                  <span>
                    Appointment time (HH:MM AM/PM)
                    <Tooltip  
                      title="Use the time picker to specify the time of the appointment."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField 
                  id='time'
                  select InputLabelProps={{shrink: true,}}
                  className={classes.textField} 
                  value={this.state.value}
                  onChange={this.handleAppointmentTimeChange} 
                  SelectProps={{ name: 'value'}} 
                  margin="normal">
                    {timesSlots.map(time => {
                      return <MenuItem key={time} value={time}>{time}</MenuItem>;
                    })}
                  </TextField>
              
               
                <Typography className={classes.formError} component="p">{this.props.appointmentTimeError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="appointment-time">
                  <span>
                    Do you wish to Pick-up service ?
                    <Tooltip  
                      title="Use the picker to specify if you need to avail Pick-up service."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField id='pickup'
                  select InputLabelProps={{shrink: true,}}
                  className={classes.textField} 
                  value={this.state.pickUp}
                  onChange={this.handlePickUpChange}
 
                  SelectProps={{ name: 'value'}} 
                  margin="normal">
                   <MenuItem key="pickup-yes" value="YES">YES</MenuItem>;
                   <MenuItem key="pickup-no" value="NO">NO</MenuItem>;

                  </TextField>
              
               
                <Typography className={classes.formError} component="p">{this.props.appointmentTimeError}</Typography>
              </FormControl>

             
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="appointment-time">
                  <span>
                    Do you wish to Drop-off service ?
                    <Tooltip  
                      title="Use the picker to specify if you need to avail Pick-up service."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField id='dropoff'
                  select InputLabelProps={{shrink: true,}}
                  className={classes.textField} 
                  value={this.state.dropOff}
                  onChange={this.handleDropOffChange} 
                  SelectProps={{ name: 'value'}} 
                  margin="normal">
                   <MenuItem key="dropoff-yes" value="YES">YES</MenuItem>;
                   <MenuItem key="dropoff-no" value="NO">NO</MenuItem>;
                  </TextField>
                <Typography className={classes.formError} component="p">{this.props.appointmentTimeError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="appointment-name">
                  <span>
                   Description
                    <Tooltip  
                      title="Specify maintainance services to be done on the car"
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField  id="description"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal" className={classes.textField}
                  value={this.props.description}
                  onChange={this.props.handleDescriptionChange}
                />
                <Typography className={classes.formError} component="p">{this.props.descriptionError}</Typography>
              </FormControl>

              
             
              <Button 
                size="large" 
                className={classes.button} 
                onClick={this.props.handleFormSubmit}
                color="primary" 
                variant="raised"
              >
                Add appointment
              </Button>
              <Typography className={classes.formSuccess} component="p">{this.props.formSuccessMessage}</Typography>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(NewAppointmentForm);
