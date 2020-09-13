import React, { useContext } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { GlobalContext } from '../../data/GlobalContext'

function Store() {
    const { data, addToCart, removeFromCart, cartItems } = useContext(GlobalContext)



    return (
            <Container style={{ marginTop: "50px"}}>
                <Row> 
                {
                    data.map((item, key) => {
                        if (cartItems.indexOf(item) !== -1){
                            return (
                                <Col lg={4} xs={12} key={key}>
                                <Card style={{ marginBottom: "20px", boxShadow: "5px 5px 8px #777"}}>
                                    <div>
                                        <Card.Img variant="top" src={item.Images[0]} style={{ width: "100%", height: "350px"}} />
                                        <Card.Body>
                                            <Card.Title>{item["Product Name"]}</Card.Title>
                                            <Card.Text>
                                                {item.Description}
                                            </Card.Text>
                                            <Card.Subtitle style={{ fontSize: "18px"}}>Rs. {item["Sale Price"]}</Card.Subtitle>
                                            <Button variant="danger" style={{ marginTop: "25px" ,width: "100%"}} onClick={() => removeFromCart(item)}>Remove From Cart</Button>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                            )
                        }
                        else{
                        return(
                            <Col lg={4} xs={12} key={key}>
                                <Card style={{ marginBottom: "20px", boxShadow: "5px 5px 8px #777"}}>
                                    <div key={key}>
                                        <Card.Img variant="top" src={item.Images[0]} style={{ width: "100%", height: "350px"}} />
                                        <Card.Body>
                                            <Card.Title>{item["Product Name"]}</Card.Title>
                                            <Card.Text>
                                                {item.Description}
                                            </Card.Text>
                                            <Card.Subtitle style={{ fontSize: "18px"}}>Rs. {item["Sale Price"]}</Card.Subtitle>
                                            <Button variant="success" style={{ marginTop: "25px" ,width: "100%"}} onClick={() => addToCart(item)}>Add To Cart</Button>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </Col>
                        )
                    }
                    })

                }
                </Row>
            </Container>            
    )
}

export default Store


