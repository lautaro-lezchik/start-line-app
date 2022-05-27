import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GetRedirected = () => {
    return (
        <Container className="w-50">
            <div className="loginContainer">
                <Card>
                    <Card.Body className="text-center">
                        Lo sentimos, debe logearse para poder ingresar al Shop
                    </Card.Body>
                </Card>
                <Row md={2} className="g-2 text-center m-5">
                    <Link to='/' >
                        <Button>Home</Button>
                    </Link>
                    <Link to='/login' >
                        <Button>Login</Button>
                    </Link>
                </Row>
            </div>
    </Container>
    )
}

export default GetRedirected