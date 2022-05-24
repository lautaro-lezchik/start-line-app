import { Card, Container, Button, Form } from "react-bootstrap"
import { useRef } from "react"

const Login = () => {
    const emailRef = useRef ();
    const passwordRef = useRef ();

    return (
        <>
            <Container className="w-50">
                <Card>
                    <Card.Body className="text-center">
                        <h2>
                            Accedé a tu cuenta
                        </h2>
                        <Form>
                            <Form.Group id="email">
                                <Form.Label> Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label> Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Button type="submit" className="m-4"> Accede</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="text-center "> 
                    ¿No tienes una cuenta?
                    <Button href="/crear-cuenta" className="m-4">
                        Crear Cuenta
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default Login