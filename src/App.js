import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Home from './pages/Home';
import Login from './pages/Login';

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
            {/* <SecuredRoute path="/dashboard" component={Dashboard} />
            <SecuredRoute path="/profile" component={Profile} />
            {isLoggedIn() && <Footer />} */}
          </div>
        {/* </Switch> */}
      </Router>
    );
  }


export default App;
