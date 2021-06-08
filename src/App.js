import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Switch, Route, useLocation,
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Profile from './components/Profile';
import { clearMessage } from './actions/message';
import Dealers from './components/Dealers/Dealers';
import DealerDetail from './components/DealerDetail/DealerDetail';
import NewBooking from './components/Booking/Booking';
import Login from './components/Login/Login';
import SignUpDealer from './components/SignUp/SignUpDealer';
import signupAsUser from './components/SignUp/SignUpUser';

import { BrowserRouter as Router, Redirect } from "react-router-dom";
import DealerHomePage from './components/DealerHomepage/index';

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
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/dealerList" component={Dealers} />
          <Route exact path="/dealers/:id" component={DealerDetail} />
          <Route exact path="/booking/new" component={NewBooking} />
          <Route exact path="/dealerHome" component={DealerHomePage} />
          <Route exact path="/signupAsUser" component={signupAsUser} />
          <Route exact path="/signupAsDealer" component={SignUpDealer} />

        </Switch>
      </main>
    </div>
  );
};

export default App;
