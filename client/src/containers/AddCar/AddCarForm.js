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

const styles = theme => ({
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
    borderColor: 'gray',
  },
  formControl: {
    minWidth: 120,
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#760c0e',
    color: 'white',
  },
  formError: {
    color: 'red',
  },
  formSuccess: {
    color: 'green',
    marginTop: 10,
  }
});

class AddCarForm extends React.Component {
  handleDoctorMenuOption = event => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    this.props.handleCarDoctorChange(event);
  }

  state = {
    value: '',
  }

  render() {
    const { classes, doctors } = this.props;
    return (
        <Card className={classes.root}>
          <CardContent>
            <form noValidate autoComplete="off" id="Car-form">
           
            <FormControl className={classes.formControl} fullWidth>
                <InputLabel>
                  <span>
                    Name
                    <Tooltip  
                      title="Enter the Car Name"
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="carname"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{shrink: true,
                  }}
                  value={this.props.carName}
                  onChange={this.props.handleCarNameChange}
                />
                <Typography className={classes.formError} component="p">{this.props.carNameError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel>
                  <span>
                    Make
                    <Tooltip  
                      title="Enter the Car Name"
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="carname"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{shrink: true,
                  }}
                  value={this.props.carMake}
                  onChange={this.props.handleCarMakeChange}
                />
                <Typography className={classes.formError} component="p">{this.props.carMakeError}</Typography>
              </FormControl>

             
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel>
                  <span>
                    Model
                    <Tooltip  
                      title="Enter the Car Model"
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="model"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  value={this.props.carModel}
                  onChange={this.props.handleCarModelChange}
                />
                <Typography className={classes.formError} component="p">{this.props.carModelError}</Typography>
              </FormControl>

             
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel>
                  <span>
                    Year
                    <Tooltip  
                      title="Enter the Car Year"
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField id="year"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  value={this.props.carYear}
                  onChange={this.props.handleCarYearChange}
                />
                <Typography className={classes.formError} component="p">{this.props.carYearError}</Typography>
              </FormControl>
              
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel>
                  <span>
                    Mileage
                    <Tooltip  
                      title="Enter the Car Mileage"
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="mileage"
                  type="text"
                  className={classes.textField}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  value={this.props.carMileage}
                  onChange={this.props.handleCarMileageChange}
                />
                <Typography className={classes.formError} component="p">{this.props.carMileageError}</Typography>
              </FormControl>

          
            
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel>
                  <span>
                    Last Maintainance
                    <Tooltip  
                      title="Use the date picker to enter the date when the Car was prescribed."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="date-maintainance"
                  type="date"
                  defaultValue="MM-DD-YYYY"
                  className={classes.textField}
                  InputLabelProps={{
                      shrink: true,
                  }}
                  value={this.props.lastMaintainanceDate}
                  onChange={this.props.handleCarLastMaintainancedateChange}
                />
                <Typography className={classes.formError} component="p">{this.props.CarDateError}</Typography>
              </FormControl>

             
              <Button
                size="large"
                className={classes.button}
                onClick={this.props.handleFormSubmit}
                color="primary" 
                variant="raised"
              >
                Add Car
              </Button>
              <Typography className={classes.formSuccess} component="p">{this.props.formSuccessMessage}</Typography>
            </form>
          </CardContent>
        </Card>
    );
  }
}

export default withStyles(styles)(AddCarForm);
