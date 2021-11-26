import React from 'react';
import {
    Container,
    Card,
    Button,
    Stack,
    Form
} from 'react-bootstrap';

import NavBar from '../../components/NavBar/navBar'

const Login = () => {
    const styles = {
        loginCard: {
            height: '552px',
            width: '612px',
            boxShadow: '5px 5px 15px 0px #9E9E9E',
            margin: '3em'
        },
        form: {
            display: 'flex',
            width: '350px',
            flexDirection: 'column',
            alignItems: 'center'
        },
        formContainer: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        bodyContainer: {
            width: 'fit-content',
            height: 'fit-content',
        }
    }

    return (
        <Container>
            <NavBar />
            <Container style={styles.bodyContainer}>
                <Card style={styles.loginCard}>
                    <Card.Header>Iniciar sesión ó registro</Card.Header>
                    <Card.Body style={styles.formContainer}>
                        <Card.Title className="mb-5">Bienvenido</Card.Title>
                        <Form style={styles.form}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="email" placeholder="Nombre de usuario" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Continuar
                            </Button>
                        </Form>
                    </Card.Body>
                    <Card.Footer >
                        <Stack gap={2} className="col-md-5 mx-auto">
                            <Button variant="outline-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-facebook m-1" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                Continua con facebook
                            </Button>
                            <Button variant="outline-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-google m-1" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                </svg>
                                Continua con Gmail
                            </Button>
                        </Stack>
                    </Card.Footer>
                </Card>
            </Container>
        </Container>
    )
}

export default Login;