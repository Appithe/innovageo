import React, { useState } from 'react';
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Modal
} from 'react-bootstrap';
import { MapContainer, TileLayer } from 'react-leaflet';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../firebase/database'

import NavBar from '../../components/NavBar/navBar';

// TODO: implement leaflet geocoding 
const NewUbicationForm = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [nombre, setNombre] = useState('');
    const [contacto, setContacto] = useState('');
    const [habitaciones, setHabitaciones] = useState('');
    const [direccion_lugar, setDireccionLugar] = useState('');

    const styles = {
        mapa: {
            width: '100%',
            height: '800px'
        },
    }

    const position = {
        lat: 21.116667,
        lng: -101.683334
    }

    const createUbucation = async () => {
        try {
            const docRef = await addDoc(collection(db, "lugares"), {
                nombre: nombre,
                contacto: contacto,
                habitaciones: habitaciones,
                direccion_lugar: direccion_lugar,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return (
        <Container>
            <NavBar />
            <Form className="m-4">
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm={2}>Nombre del arrendador*</Form.Label>
                    <Col sm={10}>
                        <Form.Control placeholder="Nombre" onChange={(e) => setNombre(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                    <Form.Label column sm={2}>Telefono del arrendador*</Form.Label>
                    <Col sm={10}>
                        <Form.Control placeholder="Numero" onChange={(e) => setContacto(e.target.value)} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formBasicPassword">
                    <Form.Label column sm={2}>Numero de habitaciones*</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="number" placeholder="Numero de habitaciones" onChange={(e) => setHabitaciones(e.target.value)} />
                    </Col>
                </Form.Group>
                {/* <Container>
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
                </Container> */}
                <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
                    <Form.Label column sm={2}>Dirección del lugar*</Form.Label>
                    <Col sm={10}>
                        <Form.Control placeholder="Dirección" onChange={(e) => setDireccionLugar(e.target.value)} />
                    </Col>
                </Form.Group>
                <MapContainer center={position} zoom={13} style={styles.mapa}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </MapContainer>
                <Button variant="primary" className="my-3" onClick={createUbucation}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg me-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                    </svg>
                    Agregar ubicación
                </Button>
            </Form>
        </Container>
    )
}

export default NewUbicationForm;