import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Navbar from './Navbar';
import Auth from '../Hooks/Auth_hook';

function Public() {
    const checkLogin = Auth();
    return (
        <div>
            <Navbar />
            {!checkLogin ? <Outlet /> : <h4>You are already logged in <Link to='/dashboard'>Dashboard</Link></h4>}
        </div>
    )
}

export default Public
