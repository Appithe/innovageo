import React from 'react';
import { Navbar, Stack, Nav, NavDropdown, Form, Container } from 'react-bootstrap';

function NavBar() {
    return (
        <Container>
            <Stack direction="horizontal" gap={3}>
                <div>
                    <Navbar>
                        <Navbar.Brand>Innovageo</Navbar.Brand>
                    </Navbar>
                </div>
                <div>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control className="me-auto" placeholder="Ubicación" />
                        <Form.Control className="me-auto" placeholder="Precio" />
                        <Form.Control type="number" className="me-auto" placeholder="Distancia a la universidad" />
                    </Stack>
                </div>
                <div className="ms-auto">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" disabled>Agregar Ubicación</Nav.Link>
                        <NavDropdown title="Perfil" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/login">Iniciar sesión</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </div>
            </Stack>
        </Container>
    )
}

export default NavBar;