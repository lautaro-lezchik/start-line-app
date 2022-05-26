import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button, Col, Row } from 'react-bootstrap';




    export default function Item ({id, image , name, price}) {
        /* const avisoCompra = alert(`compraste ${name}`) */

    return (
        <>
        <Link to={`/item/${id}`}>
            <Card sx={{ maxWidth: 400 }} className="imgShopItem" key={id}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt=""
                        />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
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
                        <Button>Comprar</Button>
                    </Col>
                </Row>
            </Card>
        </Link>
        </>
    );
}