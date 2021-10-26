import React from 'react';
import { Container, Row } from 'react-bootstrap';

import GaleriaItem from './galeriaItem';

function Galeria() {

    return (
        <Container fluid>
            <Row>
                <GaleriaItem />
                <GaleriaItem />
                <GaleriaItem />
            </Row>
            <Row>
                <GaleriaItem />
                <GaleriaItem />
                <GaleriaItem />
            </Row>
            <Row>
                <GaleriaItem />
                <GaleriaItem />
                <GaleriaItem />
            </Row>
        </Container>
    );
}

export default Galeria;