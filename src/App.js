import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
<<<<<<< HEAD

import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Login1 from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Appointments from './components/Appointments';
import Appointment from './components/Appointment';
import NewAppointment from './components/NewAppointment';
import { clearMessage } from './actions/message';
import Dealers from './components/Dealers/Dealers';
import DealerDetail from './components/DealerDetail/DealerDetail';
import NewBooking from './components/Booking/Booking';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

const App = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(clearMessage()); // clear message when changing location
  }, [dispatch, location]);
=======
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Signup from "./pages/SignUp/Signup";
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import "./assets/css/app.scss";
import Dashboard from "./pages/Dashboard";
import DealerList from "./components/DealerList/DealerList";
import Booking from "./pages/Booking/Booking";
import DealerHome from "./pages/DealerHomepage/index"
function App() {
  
    // const {pathname} = this.props.location;
    /*return (
      <Router>
        { <Switch>  }
          <div>
            { {isLoggedIn() && <Header />}
            {isLoggedIn() && <Sidebar />} }
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/dealer-home' component={DealerHome} />
            <Route exact path='/dealerList' component={DealerList} />
            <Route exact path='/booking/:id' component={Booking} />


            {<SecuredRoute path="/dashboard" component={Dashboard} />
            <SecuredRoute path="/profile" component={Profile} />
            {isLoggedIn() && <Footer />} }
          </div>
        { </Switch> }
      </Router>
    );
  }*/

  return (
    <div>
      <Sidebar />
      <main>
        <Switch>
          <Route exact path={['/', '/home']} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/appointments/new" component={NewAppointment} />
          <Route exact path="/appointments/:id" component={Appointment} />
          <Route exact path="/dealerList" component={Dealers} />
          <Route exact path="/dealers/:id" component={DealerDetail} />
          <Route exact path="/booking/new" component={NewBooking} />

        </Switch>
      </main>
    </div>
  );
};

export default App;
