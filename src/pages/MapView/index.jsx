import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { collection, getDocs } from "firebase/firestore";
import db from '../../firebase/database'

import ItemGallery from './componets/ItemGallery';
import NavBar from '../../components/NavBar/navBar';

import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import * as turf from '@turf/turf'

function Map(props) {

    const styles = {
        mapa: {
            width: props.width,
            height: props.height,
        },
    }

    const position = [props.lat, props.lng]
    const polygon = [
        [
            21.152236028159873,
            -101.71640396118164,
        ],
        [
            21.14721294096405,
            -101.71550273895262,
        ],
        [
            21.14659254785756,
            -101.71492338180542,
        ],
        [
            21.14741306721832,
            -101.71046018600464,
        ],
        [
            21.148033456888157,
            -101.70870065689087,
        ],
        [
            21.149494364233398,
            -101.70799255371094,
        ],
        [
            21.154617432274843,
            -101.71013832092285,
        ],
        [
            21.152236028159873,
            -101.71640396118164,
        ]
    ]
    const purpleOptions = { color: 'purple' }

    var points = turf.randomPoint(10, { bbox: [-101.716737, 21.146052, -101.707778, 21.154597] })

    const loadPoints = () => {
        points.features.forEach((point) => {
            console.log(point.geometry.coordinates);
        })
    }

    return (
        <MapContainer center={position} zoom={props.zoom} scrollWheelZoom={props.enableZoom} style={styles.mapa}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    Universidad de LaSalle Bajio
                </Popup>
            </Marker>
            <Polygon pathOptions={purpleOptions} positions={polygon} />
        </MapContainer>
    );
}

// TODO: implement leaflet clustering
// TODO: show the randomPoints like markers on the map

function MapView() {
    const [lugares, setLugares] = useState([])

    useEffect(() => {
        getLugares()
    }, [])

    async function getLugares() {
        const querySnapshot = await getDocs(collection(db, "lugares"));
        setLugares(
            querySnapshot.docs.map((doc) => ({
                id: doc.id,
                direccion_lugar: doc.data().direccion_lugar
            }))
        );
    }

    return (
        <Container fluid>
            <NavBar />
            <Row>
                <Col xs={5}>
                    <Row>
                        {
                            lugares.map((lugar) => (
                                <ItemGallery directionName={lugar.direccion_lugar} lugarID={lugar.id} xs={4} md={6} />
                            ))
                        }
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