import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from "react-redux"


const PurchaseTotal = () => {
    const cartItems = useSelector((state)=>state.cart)

/* 
        let subTotal = cartItems.map(item => item.price);
        console.log(subTotal); */
    
    

    return (
        <Container>
            <Row>
                <Col>
                    TOTAL
                </Col>
                <Col>
                    total
                </Col>
            </Row>
        </Container>
    )
}

export default PurchaseTotal