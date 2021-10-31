import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Map from "../../components/Map/map";
import Gallery from "./componets/Gallery/gallery";


function MapView() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Gallery />
                </Col>
                <Col xs={7}>
                    <Map />
                </Col>
            </Row>
        </Container>
    );
}

export default MapView