import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Navbar,
    Form,
    Button,
    Modal
} from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const NewUbicationForm = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const styles = {
        mapa: {
            width: '100%',
            height: '800px'
        },
    }

    const position ={
        lat: 21.116667,
        lng: -101.683334
    }

    return (
        <Container>
            <Navbar bg="light" expand="lg" className="sticky-top">
                <Container>
                    <Navbar.Brand href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pin-map-fill m-1" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                            <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                        </svg>
                        Inovvageo
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Form className="m-4">
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm={2}>Nombre del arrendador*</Form.Label>
                    <Col sm={10}>
                        <Form.Control placeholder="Nombre" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                    <Form.Label column sm={2}>Telefono del arrendador*</Form.Label>
                    <Col sm={10}>
                        <Form.Control placeholder="Numero" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                    <Form.Label column sm={2}>Numero de habitaciones*</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" placeholder="Numero de habitaciones" />
                    </Col>
                </Form.Group>
                <Container>
                    <Row>
                        <Col>
                            <Container className="p-3 mb-2 border">
                                <h6>Servicios que ofrece</h6>
                                <Button variant="outline-primary" onClick={handleShow}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus me-1" viewBox="0 0 16 16">
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                    </svg>
                                    Agregar servicio
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Agrege los servicios que ofrece</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <span className="text-muted">Cada renglón es un servicio</span>
                                        <Form>
                                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                                <Form.Control as="textarea" rows={5} />
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x me-1" viewBox="0 0 16 16">
                                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                            </svg>
                                            Cancelar
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus me-1" viewBox="0 0 16 16">
                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                            </svg>
                                            Agregar
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Container>
                        </Col>
                        <Col>
                            <Container className="p-3 mb-2 border">
                                <h6>Fotos del lugar</h6>
                                <Form.Group controlId="formFileMultiple" >
                                    <Form.Control type="file" accept="image/*" multiple />
                                </Form.Group>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm={2}>Dirección del lugar*</Form.Label>
                    <Col sm={10}>
                        <Form.Control placeholder="Dirección" />
                    </Col>
                </Form.Group>
                <MapContainer center={position} zoom={13} style={styles.mapa}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
                <Button variant="primary" type="submit" className="my-3">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default NewUbicationForm;