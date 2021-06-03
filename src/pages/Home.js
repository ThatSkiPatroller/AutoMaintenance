import React from 'react';
import Signup from '../components/Signup/Signup';
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