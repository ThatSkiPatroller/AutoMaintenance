import React from 'react';
import Login from '../components/Login'
import Navbar from '../components/Navbar'

function LoginPage () {
    return(
        <div>
        <Navbar btn='Signup' />
        <Login />
        </div>
    )
} 

export default LoginPage;