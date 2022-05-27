import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import context from 'react-bootstrap/esm/AccordionContext';
import LoginContext from '../context/LoginContext';
import { useContext } from "react"





    export default function Item ({id, image , name, price}) {
    const context = useContext(LoginContext)
        

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
                console.log({id, image , name, price});
                context.cart({id, image , name, price})
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
                            ${price}
                        </CardContent>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button onClick={purchaseNotification}>Comprar</Button>
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