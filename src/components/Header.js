import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


const Header = () => {
    return (
    <div className="header">
        <Container fluid>
            <Row className="align-content-center">
                <Col className="title" md={3}>
                    <Link to='/'>
                        Patitas Pequeñas
                    </Link>
                </Col>

                <Col md={7}  >
                    <div>

                    </div>
                </Col>

                <Col className="navCol" md={1}>
                    <Link to='/login'>
                        log in
                    </Link>
                </Col>

                <Col md={1}>
                    <Link to="/shop">
                        Shop
                    </Link>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Header