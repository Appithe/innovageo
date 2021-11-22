import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Map from "../../components/Map/map";
import ItemGallery from './componets/ItemGallery';
import NavBar from '../../components/NavBar/navBar';

function MapView() {
    return (
        <Container fluid>
            <NavBar/>
            <Row>
                <Col>
                    <Row>
                        <ItemGallery />
                        <ItemGallery />
                        <ItemGallery />
                    </Row>
                    <Row>
                        <ItemGallery />
                        <ItemGallery />
                        <ItemGallery />
                    </Row>
                    <Row>
                        <ItemGallery />
                        <ItemGallery />
                        <ItemGallery />
                    </Row>
                    <Row>
                        <ItemGallery />
                        <ItemGallery />
                        <ItemGallery />
                    </Row>
                </Col>
                <Col xs={7}>
                    <Map width={'100%'} height={'100vh'} enableZoom={true} lat={21.152721752719273} lng={-101.71174153086338} zoom={20} />
                </Col>
            </Row>
        </Container>
    );
}

export default MapView