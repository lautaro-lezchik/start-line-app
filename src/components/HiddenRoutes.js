import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginContext from '../context/LoginContext'

const HiddenRoutes = () => {
    const {login} = useContext(LoginContext)

    return  login ? (
        
        <div>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className='mt-2'>
                            <Link to="/shop" className="linksHeader">
                                Shop
                            </Link>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='mt-2'>
                            <Link to="/cart" className="linksHeader">
                                Cart
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    ) : null
}

export default HiddenRoutes