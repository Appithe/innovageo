import React from 'react';
import { Navbar, Nav, Form, Container, FormControl } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pin-map-fill m-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                        <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                    </svg>
                    Inovvageo
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-between">
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Universidad"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Form.Select aria-label="Default select example" className="me-2">
                            <option>Precio</option>
                            <option value="1">$</option>
                            <option value="2">$$</option>
                            <option value="3">$$$</option>
                        </Form.Select>
                        <Form.Select aria-label="Default select example" className="me-2">
                            <option>Distancia</option>
                            <option value="1">-5 minutos</option>
                            <option value="2">entre 5 y 10 minutos</option>
                            <option value="3">+10 minutos</option>
                        </Form.Select>
                    </Form>
                    <Nav
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/newUbicationForm" disabled>Agregar ubicación</Nav.Link>
                        <Nav.Link href="/login">Iniciar Sesión</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;