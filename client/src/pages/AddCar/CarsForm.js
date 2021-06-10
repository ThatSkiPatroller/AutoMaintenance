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
import DateFnsUtils from "@date-io/date-fns"; // import
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
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

class CarsForm extends React.Component {
  handleCarMenuOption = event => {
    this.setState({ [event.target.name]: event.target.value });
    event.preventDefault();
    this.props.handleCarChange(event);
  }

  state = {
    value: '',
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Card className={classes.root}>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
            Add a car
            </Typography>
            <form noValidate autoComplete="off" id="car-form">
              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="car-model">
                  <span>
                    Car Model
                    <Tooltip  
                      title="Specify a model for the car you are adding."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="car-model"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  className={classes.textField}
                  value={this.props.carModel}
                  onChange={this.props.handleCarModelChange}
                />
                <Typography className={classes.formError} component="p">{this.props.carModelError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="car-make">
                  <span>
                    Car Make
                    <Tooltip  
                      title="Specify a make for the car you are adding"
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="car-make"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  className={classes.textField}
                  value={this.props.carMake}
                  onChange={this.props.handleCarMakeChange}
                />
                <Typography className={classes.formError} component="p">{this.props.carMakeError}</Typography>
              </FormControl>

              <FormControl className={classes.formControl} fullWidth>
                <InputLabel htmlFor="car-year">
                  <span>
                    Car Year
                    <Tooltip  
                      title="Specify a year for the car you are adding."
                      placement="top">
                      <IconButton> <i className="material-icons">help</i></IconButton>
                    </Tooltip>
                  </span>
                </InputLabel>
                <TextField
                  id="car-year"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal"
                  className={classes.textField}
                  value={this.props.carYear}
                  onChange={this.props.handleCarYearChange}
                />
                <Typography className={classes.formError} component="p">{this.props.carYearError}</Typography>
              </FormControl>

              <Button 
                size="large" 
                className={classes.button} 
                onClick={this.props.handleFormSubmit}
                color="primary" 
                variant="raised"
              >
                Add car
              </Button>
              <Typography className={classes.formSuccess} component="p">{this.props.formSuccessMessage}</Typography>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(CarsForm);
