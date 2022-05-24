import { Card, Container, Button, Form } from "react-bootstrap"
import { useRef } from "react"

const CrearCuenta = () => {
    const usernameRef = useRef ();
    const emailRef = useRef ();
    const passwordRef = useRef ();
    const confirmPasswordRef = useRef ();

    return (
        <>
            <Container className="w-50">
                <Card>
                    <Card.Body className="text-center">
                        <h2>
                            Accedé a tu cuenta
                        </h2>
                        <Form>
                            <Form.Group id="username">
                                <Form.Label> Username</Form.Label>
                                <Form.Control type="text" ref={usernameRef} required />
                            </Form.Group>
                            <Form.Group id="email">
                                <Form.Label> Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label> Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group id="confirmPassword">
                                <Form.Label> Confirm Password</Form.Label>
                                <Form.Control type="password" ref={confirmPasswordRef} required />
                            </Form.Group>
                            <Button type="submit" className="m-4"> Accede</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="text-center "> 
                    ¿Ya tienes una cuenta?
                    <Button href="/login" className="m-4">
                        Log In
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default CrearCuenta