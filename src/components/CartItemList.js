import { Card, CardMedia } from '@mui/material'
import Button from '@mui/material/Button';
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from "react-redux"
import PriceFormat from './PriceFormat'


const CartItemList = () => {
    const cartItems = useSelector((state)=>state.cart)
    const dispatch = useDispatch()




    return (
        cartItems.map(item=>
            <Card key={item.id}  className="CartItem">
                <Row>
                    <Col>
                        <CardMedia
                            component="img"
                            alt=""
                            height="140"
                            image={item.image}
                        />
                    </Col>

                    <Col>
                        {item.name}
                    </Col>

                    <Col>
                        {item.qty}
                    </Col>

                    <Col>
                        <PriceFormat price={item.price} />
                    </Col>

                    <Col>
                        <Button variant="contained" onClick={()=>dispatch({type:'DELETE_PRODUCT', payload: item.id})}>
                            Delete Product
                        </Button>
                    </Col>
                </Row>
            </Card>
        )
    )
}

export default CartItemList