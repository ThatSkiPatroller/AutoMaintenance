import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './App.css';
import Footer from './Components/Footer';
import Home from './pages/Home';
import DealerList from './pages/DealerList';
import Appointments from './pages/Appointments';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NewAppointments from './pages/NewAppointments';
import AddCar from './pages/AddCar'

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
              <Route exact path="/dealers" component={DealerList} />
              <Route exact path="/appointments" component={Appointments} />
              <Route exact path="/newappointment/:id" component={NewAppointments} />
              <Route exact path="/addcar" component={AddCar} />
              </Switch>
          </div>
        </Router>
        <Footer />
      </MuiThemeProvider>,
    ];
  }
}

// Exporting App component so that index.js can access it and render the components to the page.
export default App;
