import { Card, Container, Button, Form } from "react-bootstrap"
import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Login = () => {
    const emailRef = useRef ();
    const passwordRef = useRef ();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    

    async function handleSubmit(e) {
        e.preventDefault()

        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then(() => {
            setError("");
            setLoading(true);
            navigate("/shop");
        })
        .catch(() => {
            setError("No se ha podido ingresar")
            // ..
        });

        setLoading(false)
    }

    return (
        <>
            <Container className="w-50">
                <Card>
                    <Card.Body className="text-center">
                        <h2>
                            Accede
                        </h2>
                        <div>{error && 
                            <div className="text-danger m-4">
                                {error}
                            </div>}
                        </div>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="email">
                                <Form.Label> Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label> Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Button type="submit" className="m-4"> Acceder</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="text-center "> 
                    ¿No tienes una cuenta?
                    <Link to='/crear-cuenta'>
                        <Button disabled={loading} className="m-4">
                            Crear cuenta
                        </Button>
                    </Link>
                </div>
            </Container>
        </>
    )
}

export default Login;