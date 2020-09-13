import React from 'react'
import logo from '../../data/nikelogo.png'
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Home.css'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'


function Home() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col lg={6} className="carousel">
                    <Carousel className="slides"/>
                </Col>
                <Col lg={6} className="nike-content">
                <img src={logo} alt="nike logo" width="320" height="250"/>
                <div className="nike-content-text">
                    <h1>NIKE</h1>
                    <p>Just Do It</p>
                    <Button variant="success"><Link to="/store" className="shop-btn">Go Shopping</Link></Button>
                </div>
                </Col>  
            </Row>
        </Container>
    )
}

export default Home
