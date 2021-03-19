import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [{ isSignedIn, name, email }] = useContext(UserContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/home">Calling Cabs</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/destination/car" >Destination</Nav.Link>
                        <Nav.Link >Blog</Nav.Link>
                        <Nav.Link >Contact</Nav.Link>
                        {isSignedIn ? <Nav.Link className="text-white font-weight-bolder" >{name || email}</Nav.Link> : <Button variant="primary" as={Link} to="/login" > LogIn </Button>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;