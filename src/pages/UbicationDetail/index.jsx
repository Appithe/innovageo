import React from 'react';
import {
    Col,
    Container,
    Image,
    Row,
    InputGroup,
    FormControl,
    Button,
} from 'react-bootstrap';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import * as turf from '@turf/turf'
import { Toaster, toast } from 'react-hot-toast'
import NavBar from '../../components/NavBar/navBar';

// TODO: load data from firebase

function Map(props) {

    const styles = {
        mapa: {
            width: props.width,
            height: props.height,
        },
    }

    const position = [props.lat, props.lng];
    const ulsa = [21.15071, -101.7111];

    const polyline = [
        position,
        ulsa,
    ];
    const limeOptions = { color: 'lime' };

    var from = turf.point(position);
    var to = turf.point(ulsa);
    var options = { units: 'kilometers' };

    var distance = turf.distance(from, to, options);

    return (
        <MapContainer center={position} zoom={props.zoom} scrollWheelZoom={props.enableZoom} style={styles.mapa}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Polyline pathOptions={limeOptions} positions={polyline} >
                <Popup>
                    Distancia: {Math.round(distance * 1000) + 'm'}
                </Popup>
            </Polyline>
            <Marker position={position}>
                <Popup>
                    Cima del sol 151
                </Popup>
            </Marker>
            <Marker position={ulsa}>
                <Popup>
                    Universidad de LaSalle Bajio
                </Popup>
            </Marker>
        </MapContainer>
    );
}

const UbicationDetail = () => {
    const styles = {
        container: {
            marginTop: '50px',
        },
        gridContainer: {
            display: 'grid',
            gridTemplateColumns: 'repeat(4 1fr)',
            gridTemplateRows: 'repeat(2 1fr)',
            gridColumnGap: '18px',
            gridRowGap: '18px',
        },
        mainImage: {
            gridColumn: '1 / span 2',
            gridRow: '1 / span 2',
        },
        topLeft: {
            gridColumn: '3 / span 1',
            gridRow: '1 / span 1',
        },
        topRight: {
            gridColumn: '4 / span 1',
            gridRow: '1 / span 1',
        },
        bottomLeft: {
            gridColumn: '3 / span 1',
            gridRow: '2 / span 1',
        },
        bottomRight: {
            gridColumn: '4 / span 1',
            gridRow: '2 / span 1',
        },
        info: {
            margin: '20px 0px',
        },
        mapa: {
            width: '1210px',
            height: '744px',
        }
    }

    return (
        <Container fluid>
            <Toaster />
            <NavBar />
            <Container style={styles.container}>
                <h1>Cima del sol 151</h1>
                <Container style={styles.gridContainer}>
                    <Image style={styles.mainImage} src="https://picsum.photos/id/1031/595/512" rounded />
                    <Image style={styles.topLeft} src="https://picsum.photos/id/1065/297/247" rounded />
                    <Image style={styles.topRight} src="https://picsum.photos/id/1068/297/247" rounded />
                    <Image style={styles.bottomLeft} src="https://picsum.photos/id/163/297/247" rounded />
                    <Image style={styles.bottomRight} src="https://picsum.photos/id/311/297/247" rounded />
                </Container>
                <Container style={styles.info}>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Arrendador</InputGroup.Text>
                                <FormControl value="Karen Lopez" readOnly />
                            </InputGroup>
                        </Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Contacto</InputGroup.Text>
                                <FormControl value="477-654-2341" readOnly />
                                <CopyToClipboard text="477-654-2341">
                                    <Button variant="outline-secondary" onClick={() => toast("Texto copiado")}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
                                            <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z" />
                                        </svg>
                                    </Button>
                                </CopyToClipboard>
                            </InputGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>Numero de habitaciones disponibles</InputGroup.Text>
                                <FormControl value="3/3" readOnly />
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
                <h2>Servicos que ofrece</h2>
                <Container style={styles.info}>
                    <Row>
                        <Col>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Amet, pretium a ultrices dui</li>
                            <li>Sollicitudin quis suspendisse maecenas</li>
                        </Col>
                        <Col>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Amet, pretium a ultrices dui</li>
                            <li>Sollicitudin quis suspendisse maecenas</li>
                        </Col>
                        <Col>
                            <li>Lorem ipsum dolor sit amet</li>
                            <li>Consectetur adipiscing elit</li>
                            <li>Amet, pretium a ultrices dui</li>
                            <li>Sollicitudin quis suspendisse maecenas</li>
                        </Col>
                    </Row>
                </Container>
                <h2>Donde se ubica?</h2>
                <Container style={styles.info}>
                    <Map width={'1210px'} height={'744px'} enableZoom={false} lat={21.150306} lng={-101.713420} zoom={17} />
                </Container>
            </Container>
        </Container>
    )
}

export default UbicationDetail;