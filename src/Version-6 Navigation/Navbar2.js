import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navbar, Container, Nav, } from 'react-bootstrap'
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout'
import ScreenLoader from './Screen_loader';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

function Mynavbar() {
    const navigate = useNavigate();
    const [flag, setFlag] = useState();
    const [load, setLoad] = useState();


    const clearCookie = async () => {
        const p = prompt("Do your wnat to logout your acconut ? ")
        if (p === 'y') {
            cookies.remove('quiz-realm')
            setFlag(true)
            setLoad(<ScreenLoader />)
            setTimeout(() => {
                setLoad();
            }, 3000)
        } else {
            setFlag(false)
            alert("OK!")
        }
    }
    useEffect(() => {
        function action() {
            if (flag) {
                setTimeout(() => {
                    navigate('/')
                }, 3000)
            }
        }
        action()

        return () => {
            action();
        }
    }, [flag, navigate])


    return (
        < div >
            {flag ? load : load}
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ padding: "15px" }}>
                <Container>
                    <Navbar.Brand ><Link to="/" style={{ color: "white", textDecoration: "none" }}>Quiz Realm</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link style={{ paddingRight: "10px", marginRight: '1.2rem' }}><Link to="/dashboard" className="navs" style={{ textDecoration: "none", color: "white" }}>Dashboard</Link></Nav.Link>
                            <Nav.Link style={{ paddingRight: "10px", marginRight: '1.2rem' }}><Link to="/profile" className="navs" style={{ textDecoration: "none", color: "white" }}> <AccountCircleIcon /></Link></Nav.Link>
                            <Button color="inherit" className="home_menus" style={{ textDecoration: "none", color: "white" }} onClick={clearCookie}> <LogoutIcon /> </Button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    )
}
export default Mynavbar;