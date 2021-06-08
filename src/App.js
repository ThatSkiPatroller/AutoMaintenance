import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
