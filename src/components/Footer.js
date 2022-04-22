import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav, } from 'react-bootstrap'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function myNavbar() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><NavLink to="/">Subhajit Ghosh</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link href="https://www.facebook.com/profile.php?id=100013021695623"><FacebookRoundedIcon /></Nav.Link>
                            <Nav.Link href="https://github.com/subhajit20"><GitHubIcon /></Nav.Link>
                            <Nav.Link href="https://www.instagram.com/mr_ghosh1707/</Nav>"><InstagramIcon /></Nav.Link>
                            <Nav.Link href="https://twitter.com/Subhajit812">
                                <TwitterIcon />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >
    )
}

export default myNavbar

