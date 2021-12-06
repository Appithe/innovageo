import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { collection, getDocs } from "firebase/firestore";
import db from '../../firebase/database'

import Map from "../../components/Map/map";
import ItemGallery from './componets/ItemGallery';
import NavBar from '../../components/NavBar/navBar';

function MapView() {
    const [direccion_lugar, setDireccionLugar] = useState('');
    const [lugarID, setlugarID] = useState('');

    window.onload = async () => {
        const querySnapshot = await getDocs(collection(db, "lugares"));
        querySnapshot.forEach((doc) => {
            setlugarID(doc.id);
            setDireccionLugar(doc.data().direccion_lugar);
            console.log(doc.data());
        });
    }

    // TODO: implement leaflet clustering
    // TODO: implement something of Turf.js
    return (
        <Container fluid>
            <NavBar />
            <Row>
                <Col xs={5}>
                    <Row>
                        <ItemGallery directionName={direccion_lugar} itemID={lugarID} xs={4} md={6} />
                        <ItemGallery directionName={direccion_lugar} itemID={lugarID} xs={4} md={6} />
                        <ItemGallery directionName={direccion_lugar} itemID={lugarID} xs={4} md={6} />
                        <ItemGallery directionName={direccion_lugar} itemID={lugarID} xs={4} md={6} />
                        <ItemGallery directionName={direccion_lugar} itemID={lugarID} xs={4} md={6} />
                        <ItemGallery directionName={direccion_lugar} itemID={lugarID} xs={4} md={6} />
                        <ItemGallery directionName={direccion_lugar} itemID={lugarID} xs={4} md={6} />
                        <ItemGallery directionName={direccion_lugar} itemID={lugarID} xs={4} md={6} />
                        <ItemGallery directionName={direccion_lugar} itemID={lugarID} xs={4} md={6} />
                        <ItemGallery directionName={direccion_lugar} itemID={lugarID} xs={4} md={6} />
                        <ItemGallery directionName={direccion_lugar} itemID={lugarID} xs={4} md={6} />
                        <ItemGallery directionName={direccion_lugar} itemID={lugarID} xs={4} md={6} />
                    </Row>
                </Col>
                <Col xs={7} className="position-fixed end-0">
                    <Map width={'100%'} height={'100vh'} enableZoom={true} lat={21.152721752719273} lng={-101.71174153086338} zoom={20} />
                </Col>
            </Row>
        </Container>
    );
}

export default MapView