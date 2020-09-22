import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Table } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import css from "./Header.css";

function Header() {
    return (
        <Navbar expand="lg">
            <Navbar.Brand href="#home">
                <GiHamburgerMenu />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-item" to="/">
                        <span className="nav-link">HOME</span>
                    </Link>
                    <Link className="nav-item" to="/shop">
                        <span className="nav-link">SHOP</span>
                    </Link>
                    <Link className="nav-item" to="/magazine">
                        <span className="nav-link">MAGAZINE</span>
                    </Link>
                </Nav>
                <Form inline>
                    <AiOutlineShoppingCart />
                    <Button variant="light" className="btn-sm" id="login__btn">LOGIN</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
