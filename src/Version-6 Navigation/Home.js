import React from 'react'
import { Outlet, Link } from 'react-router-dom';
import HomeNavbar from './Navbar2';
import Auth from '../Hooks/Auth_hook';

function Home() {
    const checkLogin = Auth();
    return (
        <div>
            <HomeNavbar />
            {checkLogin ? <Outlet /> : <h3>You don't have permission to use this page...Go and Login<Link to='/'>Login</Link></h3>}
        </div>
    )
}

export default Home
