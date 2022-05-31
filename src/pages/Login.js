import { Card, Container, Button, Form } from "react-bootstrap"
import { useContext, useRef, useState } from "react"
import {  useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import LoginContext from "../context/LoginContext";
import FormGroup from "../components/formComponents/FormGroup";
import BelowCard from "../components/formComponents/BelowCard";
import FormHeader from "../components/formComponents/FormHeader";


const Login = () => {
    const emailRef = useRef ();
    const passwordRef = useRef ();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    const context = useContext(LoginContext)

    async function handleSubmit(e) {
        e.preventDefault()

        const auth = getAuth();
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then(() => {
            setError("");
            setLoading(true);
            context.setLogin(true)
            localStorage.setItem('isLogged', JSON.stringify(true));
            navigate("/shop");
        })
        .catch((e) => {
            setError("No se ha podido ingresar");
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
                                <Button type="submit" className="m-4"> Acceder</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <BelowCard loading={loading} />
                </div>
            </Container>
        </>
    )
}

export default Login;