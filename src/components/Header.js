import { Col, Container, Nav, NavItem, Row } from "react-bootstrap"


const Header = () => {
    return (
    <div className="header">
        <Container fluid>
            <Row className="align-content-center">
                <Col className="title" md={3}>Patitas Pequeñas</Col>
                <Col md={7} className="barraNavegacion" >
                    <Nav className="justify-content-around">
                        <NavItem>
                            <p>Perros</p>
                        </NavItem>
                        <NavItem>
                            Gatos
                        </NavItem>
                        <NavItem>
                            Merch
                        </NavItem>
                    </Nav>
                </Col>
                <Col md={1}>log in</Col>
                <Col md={1}>Carrito</Col>
            </Row>
        </Container>
    </div>
    )
}

export default Header