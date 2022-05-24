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
                        <Card.Img variant="top" src="https://phantom-marca.unidadeditorial.es/5f35dc7ba0a175d12db238a6c6e8d549/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/24/16456899624763.jpg" />
                        <Card.Body>
                            <Card.Title>Accesorios para perros</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/purina-por-que-vemos-tan-felices-a-los-gatos-en-cajas-de-carton.png?itok=xABhZ8v9" />
                        <Card.Body>
                            <Card.Title>Accesorios para gatos</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://m.media-amazon.com/images/I/811nm2k-OgL._SY500_.jpg" />
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