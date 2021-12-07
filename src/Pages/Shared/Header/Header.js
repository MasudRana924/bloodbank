import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    const search=<FontAwesomeIcon icon={faSearch} />
    return (
        <Container fluid >
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="#home" className="text-white">BloodBank</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-5 ps-5">
                            <Nav.Link as={HashLink} to="/home" className="nav-name text-white">Home</Nav.Link>
                            <Nav.Link href="#pricing" className="nav-name text-white">About</Nav.Link>
                            <Nav.Link as={HashLink} to="/contact"className="nav-name text-white">Contact </Nav.Link>
                            <Nav.Link as={HashLink} to="/home#donate" className="nav-name text-white">Donate</Nav.Link>

                        </Nav>
                        <Nav className=" mx-auto">
                            <span>
                            <span className="search">{search}</span>
                                <input type="text" placeholder="fine here" className="input-panel ps-5" /> 
                            </span>
                        </Nav>
                        <Nav>
                            <Link to="/login" className="login-panel ms-3"> <button className="login-btn">
                                Login</button> </Link>
                            <Link to="/signup" className="login-panel ms-3"> <button className="login-btn">
                                SignUp</button> </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;