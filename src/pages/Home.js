import React from 'react';
import Signup from '../pages/SignUp/Signup';
import Navbar from '../components/Navbar'

function Home () {
    return (
        <div>
            <Navbar btn='Login'></Navbar>
            <Signup></Signup>
        </div>
    )
}

export default Home;