import { Card, Container, Button, Form } from "react-bootstrap"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import BelowCard from "../components/formComponents/BelowCard";
import FormHeader from "../components/formComponents/FormHeader";
import FormGroup from "../components/formComponents/FormGroup";


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
        });

        setLoading(false)
    }

    return (
        <>
            <Container className="w-50">
                <div className="loginContainer">
                    <Card>
                        <Card.Body className="text-center">
                            <FormHeader error={error} />
                            <Form onSubmit={handleSubmit}>
                                <FormGroup ide="email" lab="Email" ty="email" refer={emailRef}/>
                                <FormGroup ide="password" lab="Password" ty="password" refer={passwordRef}/>
                                <FormGroup ide="confirmPassword" lab="Confirm Password" ty="password" refer={confirmPasswordRef}/>
                                <Button type="submit" className="m-4"> Crear la cuenta</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
                <BelowCard loading={loading} />
            </Container>
        </>
    )
}

export default CrearCuenta