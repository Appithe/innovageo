import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Mapa from "../components/mapa";
import Galeria from "../components/galeria";
import NavBar from "../components/navBar";

function VistaMapa() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Galeria />
                </Col>
                <Col xs={7}>
                    <Mapa />
                </Col>
            </Row>
        </Container>
    );
}

export default VistaMapa