import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PriceFormat from './PriceFormat';
import { useDispatch } from 'react-redux';



    export default function Item ({id, image , name, price}) {
        const dispatch = useDispatch()
        
        const productInfo = {
            id,
            image,
            name,
            price,
        }

        const sendToCart = () => {
            dispatch({type:'ADD_TO_CART', payload: productInfo})
            purchaseNotification()
        }

        const purchaseNotification = ()=>{
            toast.success(`Compraste ${name}`, {
                position: "top-left",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        } 

    return (
        <>
            <Card sx={{ maxWidth: 400 }} className="imgShopItem" key={id}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt=""
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" >
                            <p className='productName'>{name}</p>
                        </Typography>
                    </CardContent>
                <Row>
                    <Col>
                        <CardContent>
                            <PriceFormat price= {price} />
                        </CardContent>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={sendToCart}>Comprar</Button>
                        <ToastContainer
                            position="top-left"
                            autoClose={1000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </Col>
                </Row>
            </Card>
        </>
    );
}