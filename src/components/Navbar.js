import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, } from 'react-bootstrap'
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import ImportContactsOutlinedIcon from '@mui/icons-material/ImportContactsOutlined';
import SchoolIcon from '@mui/icons-material/School';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

// Style*****************
import './style.css';

function myNavbar() {
    return (
        <div >
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" style={{ padding: "20px" }}>
                <Container>
                    <Avatar alt="subhajit.jpg" src='/subhajit.jpg' sx={{ marginRight: "1.2rem" }} />
                    <Navbar.Brand ><NavLink to="/" style={{ color: "black", textDecoration: "none" }}>Subhajit Ghosh</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link style={{ paddingRight: "10px" }}><NavLink className="navs" to="/" style={{ textDecoration: "none" }}><HomeIcon />Home</NavLink></Nav.Link>
                            <Nav.Link style={{ paddingRight: "10px" }}>
                                <NavLink to="/about" className="navs" style={{ textDecoration: "none" }}><ImportContactsOutlinedIcon />About</NavLink>
                            </Nav.Link>
                            <Nav.Link style={{ paddingRight: "10px" }}><NavLink to="/qualification" className="navs" style={{ textDecoration: "none" }}><SchoolIcon />Qualification</NavLink></Nav.Link>
                            <Nav.Link style={{ paddingRight: "10px" }}><NavLink to="/skills" className="navs" style={{ textDecoration: "none" }}><WorkspacePremiumIcon />Skills</NavLink></Nav.Link>
                            <Nav.Link style={{ paddingRight: "10px" }}><NavLink to="/projects" className="navs" style={{ textDecoration: "none" }}><LaptopChromebookIcon />Project</NavLink></Nav.Link>
                            <Nav.Link style={{ paddingRight: "10px" }}><NavLink to="/contact" className="navs" style={{ textDecoration: "none" }}><PermContactCalendarRoundedIcon />Contact me</NavLink></Nav.Link>

                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
export default myNavbar
