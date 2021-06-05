import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Signup from "./pages/SignUp/Signup";
import Home from './pages/Home';
import Login from './pages/Login';
import Main from './pages/Main';
import "./assets/css/app.scss";
import Dashboard from "./pages/Dashboard";
import DealerList from "./components/DealerList/DealerList";
import Booking from "./pages/Booking/Booking";

function App() {
  
    // const {pathname} = this.props.location;
    return (
      <Router>
        {/* <Switch>  */}
          <div>
            {/* {isLoggedIn() && <Header />}
            {isLoggedIn() && <Sidebar />} */}
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={Signup} />
            <Route exact path='/main' component={Main} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/dealerList' component={DealerList} />
            <Route exact path='/booking/:id' component={Booking} />

            {/* <SecuredRoute path="/dashboard" component={Dashboard} />
            <SecuredRoute path="/profile" component={Profile} />
            {isLoggedIn() && <Footer />} */}
          </div>
        {/* </Switch> */}
      </Router>
    );
  }


export default App;
