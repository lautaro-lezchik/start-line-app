import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Greeting from "./Greeting"
import HiddenRoutes from "./HiddenRoutes"
import LoginLogout from "./LoginLogout"



const Header = () => {
    return (
    <div className="header">
        <Container fluid>
            <Row className="align-content-center pt-2 pb-2">
                <Col className="title" md={3}>
                    <Link to='/' className="linksHeader">
                        Patitas Pequeñas
                    </Link>
                </Col>
                <Col md={4}  >
                    <Greeting />
                </Col>
                <Col md={3}>
                    <LoginLogout />
                </Col>
                <Col md={2}>
                    <HiddenRoutes />
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Header