import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const LandPage = () => {
    return (
        <Container className="text-center">
            <Row>
                <Col>
                    <h1 className="landPageTitle"> Patitas Pequeñas</h1>
                </Col>
            </Row>

            <Row>
                <h3>
                    Todo lo que necesitas para cuidar de los animalitos de la casa lo encontrás en este shop.
                </h3>
            </Row>

            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/auth-usuarios-e1ad7.appspot.com/o/perros-3.jpg?alt=media&token=2fceaa5b-e442-41b7-918e-a5066a49643e" />
                        <Card.Body>
                            <Card.Title>Accesorios para perros</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/auth-usuarios-e1ad7.appspot.com/o/gatos-1.jpg?alt=media&token=efeedc1a-d427-4527-8fed-380b2630d7cf" />
                        <Card.Body>
                            <Card.Title>Accesorios para gatos</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://firebasestorage.googleapis.com/v0/b/auth-usuarios-e1ad7.appspot.com/o/merch-2.jpg?alt=media&token=ffbeb378-6925-4e5e-ba02-17860ffc85dd" />
                        <Card.Body>
                            <Card.Title>Para amantes de las mascotas</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row>
                <h3>
                    ¡Subscribite al sitio para encontrar los mejores precios!
                </h3>
            </Row>

            <Row md={2} className="g-5">
                <Link to='/login'>
                    <Button>
                        Log In
                    </Button>
                </Link>
                <Link to='/shop'>
                    <Button>
                        Ir al Shop
                    </Button>
                </Link>
            </Row>
        </Container>
    )
}

export default LandPage