import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import LoginContext from "../context/LoginContext"
import Greeting from "./Greeting"
import LoginLogout from "./LoginLogout"



const Header = () => {
    return (
    <div className="header">
        <Container fluid>
            <Row className="align-content-center">
                <Col className="title" md={3}>
                    <Link to='/' className="linksHeader">
                        Patitas Pequeñas
                    </Link>
                </Col>

                <Col md={7}  >
                    <Greeting />
                </Col>

                <LoginLogout />

                <Col md={1}>
                    <Link to="/shop" className="linksHeader">
                        Shop
                    </Link>
                </Col>
            </Row>
        </Container>
    </div>
    )
}

export default Header