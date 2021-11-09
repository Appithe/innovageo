import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Map from "../../components/Map/map";
import ItemGallery from './componets/ItemGallery';

function MapView() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <Row>
                        <ItemGallery />
                        <ItemGallery />
                        <ItemGallery />
                    </Row>
                </Col>
                <Col xs={7}>
                    <Map />
                </Col>
            </Row>
        </Container>
    );
}

export default MapView