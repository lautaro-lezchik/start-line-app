import { Card, Container, Button, Form } from "react-bootstrap"
import { useRef, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const CrearCuenta = () => {
    const emailRef = useRef ();
    const passwordRef = useRef ();
    const confirmPasswordRef = useRef ();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            console.log("Los passwords no son identicos");
            return setError("Los passwords nos son idénticos")
        }

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then(() => {
            setError("");
            setLoading(true);
            navigate("/login");
        })
        .catch(() => {
            setError("No se ha podido crear la cuenta")
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
                            Crea cuenta
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
                            <Form.Group id="confirmPassword">
                                <Form.Label> Confirm Password</Form.Label>
                                <Form.Control type="password" ref={confirmPasswordRef} required />
                            </Form.Group>
                            <Button type="submit" className="m-4"> Crear la cuenta</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="text-center "> 
                    ¿Ya tienes una cuenta?
                    <Link to='/login'>
                        <Button disabled={loading} className="m-4">
                            Log In
                        </Button>
                    </Link>
                </div>
            </Container>
        </>
    )
}

export default CrearCuenta