import React from 'react'
import { Link } from 'react-router-dom'
import './Navigate.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


function Navigate() {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <div className="nav-container">
                <Nav className="nav-list-group">
                    <div className="list-item"><Link to="/" className="list-anchor">Home</Link></div>
                    <div className="list-item"><Link to="/store" className="list-anchor">Store</Link></div>
                    <div className= "list-item"><Link to="/cart" className="list-anchor">Cart</Link></div>
                </Nav>
            </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigate
