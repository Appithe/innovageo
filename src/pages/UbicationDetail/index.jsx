import React from 'react';
import {
    Col,
    Container,
    Image,
    Row,
} from 'react-bootstrap';

import NavBar from '../../components/NavBar/navBar';
import Map from "../../components/Map/map";

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
            margin: '20px 20px',
        },
        mapa: {
            width: '1210px',
            height: '744px',
        }
    }

    return (
        <Container fluid>
            <NavBar />
            <Container style={styles.container}>
                <h1>Calle del Llano 234</h1>
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
                            <h4>Arrendador: </h4>
                        </Col>
                        <Col>
                            <h4>Contacto: </h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h4>Numero de habitaciones: </h4>
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
                    <Map width={'1210px'} height={'744px'} enableZoom={false} lat={21.149838431448007} lng={-101.71072419504823} zoom={17}/>
                </Container>
            </Container>
        </Container>
    )
}

export default UbicationDetail;