// Importing React since we are using React.
import React, { Component } from 'react';
// Importing React Router to add page routes.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Importing material-ui theme.
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// Importing css
import './App.css';
// Importing Footer component.
import Footer from './Components/Footer';
// Importing Home page component.
import Home from './containers/Home';
import Appointments from './containers/Appointments';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NoMatch from './containers/NoMatch';
import Dealers from './containers/Dealers';
import NewAppointment from './containers/NewAppointments'
import AddCar from './containers/AddCar'

// App theme customization.
const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 18,
  },
});

class App extends Component {

  state = {
    currentlyLoggedInUser: null
  }
  setUser = userId => {
    this.setState ({ currentlyLoggedInUser: userId})
  }

  render() {
    return [
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" render={props => <Login {...props} setUser={this.setUser}></Login>}/>
              <Route exact path="/signup" component={Signup} 
                loggedInUser = {this.state.currentlyLoggedInUser}/>
              <Route exact path="/home" component={Home} />
              <Route exact path="/appointments" component={Appointments} />
              <Route exact path="/dealers" component={Dealers} />
              <Route exact path="/newappointment/:id" component={NewAppointment} />
              <Route exact path="/addcar" component={AddCar} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>

      </MuiThemeProvider>
    ];
  }
}

// Exporting App component so that index.js can access it and render the components to the page.
export default App;
