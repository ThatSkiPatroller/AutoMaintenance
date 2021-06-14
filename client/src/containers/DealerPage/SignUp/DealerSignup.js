// Importing React since we are using React.
import React, { Component } from "react";
// Importing UI components and style from material-ui-next
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
// Import LoginForm
import SignupForm from './DealerSignupForm';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

const styles = {
  // Tell Material-UI what's the font-size on the html element is.
  root: {
    flexGrow: 1,
  },
  headline: {
    marginTop: 30,
  },
};

class DealerSignup extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    address: "",
    phoneNo: "",
    isPickUp: "true",
    isDropOff: "true",
    isOvernight: "true",
    credentials: [],
    usernameMissingError: "",
    passwordMissingError: "",
    emailMissingError: "",
    passwordLengthError: "",
    confirmPasswordError: "",
    addressError: "",
    phoneNoError: "",
    isPickUpError: "",
    isDropOfffError: "",
    isOvernightError: "",
  };
  
  
  handlePickUp = (event) => {
    this.setState({ 
      isPickUp: !event.target.checked,
      pickUpError: "",
      formSuccessMessage: "",
    });
    console.log(this.state.isPickUp, event.target.checked)
  }
  handleDropOff = (event) => {
    this.setState({ 
      isDropOff: !event.target.checked,
      dropOffError: "",
      formSuccessMessage: "",
    });
    console.log(this.state.isDropOff, event.target.checked)
  }
  
  handleOvernightChange = (event) => {
    this.setState({ 
      isOvernight: !event.target.checked,
      overnightError: "",
      formSuccessMessage: "",
    });
    console.log("event" + event.target.checked + this.state.isOvernight)

  }
  // Keep track of what user enters for username so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
      usernameMissingError: "", 
    });
  }

  // Keep track of what user enters into password input field so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handlePasswordChange = (event) => {
    this.setState({ 
      password: event.target.value,
      passwordMissingError: "",
    });

    // If password length is greater than 0 but less than 8, show password weak error.
    if (this.state.password.length > 0 && this.state.password.length < 8) {
      this.setState({
        passwordLengthError: "Password is weak. Password should be at least 8 characters."
      });
    }

    // If password is 8 characters or greater, remove password length error from page.
    if (this.state.password.length === 8 || this.state.password.length > 8) {
      this.setState({
        passwordLengthError: "",
      });
    }
  }

  // Keep track of what user enters into confirm password input field so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleConfirmPasswordChange = (event) => {
    this.setState({ 
      confirmPassword: event.target.value,
      confirmPasswordError: "",
    });
  }

  // Keep track of what user enters into email input field so that input can be grabbed later.
  // If form validation error is showing, remove error from page when user starts typing.
  handleEmailChange = (event) => {
    this.setState({ 
      email: event.target.value,
      emailMissingError: "",
    });
  }
  handlePhoneNoChange = (event) => {
    this.setState({ 
      phoneNo: event.target.value,
      phoneNoError: "",
    });
  }

  handleAddressChange = (event) => {
    this.setState({ 
      address: event.target.value,
      addressError: "",
    });
  }


  // When user enters credentials and clicks LOG IN button to log in.
  handleFormSubmit = event => {
    const { history } = this.props;
    event.preventDefault();

    // If username field is empty when user submits form, show error.
    if (this.state.username === "") {
      this.setState({
        usernameMissingError: "Username is required."
      })
    }

    if (this.state.address === "") {
      this.setState({
        addressError: "Address is required."
      })
    }

    if (this.state.phoneNo === "") {
      this.setState({
        phoneNoError: "Phone No is required."
      })
    }

    // If the password field is empty when user submits form, show error.
    if (this.state.password === "") {
      this.setState({
        passwordMissingError: "Password is required."
      })
    }

    // if the email field is empty when user submits form, show error.
    if (this.state.email === "") {
      this.setState({
        emailMissingError: "Email is required."
      })
    }

    // if the confirm password field is empty when user submits form, show error.
    if (this.state.confirmPassword === "") {
      this.setState({
        confirmPasswordError: "Confirm password."
      })
    }

    // If the password and confirm password fields don't match, tell user.
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        confirmPasswordError: "The password entered does not match the first one. Check that the password is entered correctly.",
      })
    }

    // If form is validated, sign up user...
    else {
      
      let obj = {
        username: this.state.username, 
        password: this.state.password, 
        email: this.state.email, 
        address: this.state.address, 
        phoneNo: this.state.phoneNo, 
        isPickUp: this.state.isPickUp, 
        isDropOff: this.state.isDropOff, 
        isOvernight: this.state.isOvernight
      }
      console.log(obj)

      axios.post('/Auth/dealer-signup', obj)
        .then((res) => {
          console.log('Login done')
          console.log(res.data);
        })
        .catch(err => console.log(err))

       /* axios.post('/Auth/login', { username: this.state.username, password: this.state.password})
        .then((res) => {
          console.log(res.data);
          history.push('/home')
        })*/
    }
  };

  render() {
    const { classes } = this.props;
    return [
      <div style={{ padding: 70 }}>
        <Grid item xs={12} className={classes.headline}>
          <Grid container spacing={16} className={classes.root} justify="center">
            <Typography variant="display1">
              Welcome to AutoMaintainance
            </Typography>
          </Grid>
        </Grid>,

        <div className="main-content-section">
          <Grid item xs={12} className={classes.headline}>
            <Grid container spacing={16} className={classes.root} justify="center">
              <SignupForm
                handleFormSubmit = {this.handleFormSubmit}
                handleUsernameChange = {this.handleUsernameChange}
                handlePasswordChange = {this.handlePasswordChange}
                handleConfirmPasswordChange = {this.handleConfirmPasswordChange}
                handleEmailChange = {this.handleEmailChange}
                handleOvernightChange = {this.handleOvernightChange}
                handlePhoneNoChange = {this.handlePhoneNoChange}
                handleAddressChange = {this.handleAddressChange}
                usernameMissingError = {this.state.usernameMissingError}
                passwordMissingError = {this.state.passwordMissingError}
                emailMissingError = {this.state.emailMissingError}
                passwordLengthError = {this.state.passwordLengthError}
                confirmPasswordError = {this.state.confirmPasswordError}
                pickUpError = {this.state.pickUpError}
                dropOffError = {this.state.dropOffError}
                overnightError = {this.state.overnightError}
                addressError = {this.state.addressError}
                phoneNoError = {this.state.phoneNoError}
                handlePickUp= {this.handlePickUp}
                handleDropOff={this.handleDropOff}
              />
            </Grid>
          </Grid>
        </div>
      </div>,
    ];
  }
}

// Exporting the Login component
// so that the App.js file can render the Signup page.
export default withRouter(withStyles(styles)(DealerSignup));