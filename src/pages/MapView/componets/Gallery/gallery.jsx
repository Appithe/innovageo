import React from 'react';
import { Container, Row } from 'react-bootstrap';

import ItemmGallery from '../ItemGallery/itemGallery';

function Gallery() {

    return (
        <Container fluid>
            <Row>
                <ItemmGallery />
                <ItemmGallery />
                <ItemmGallery />
            </Row>
            <Row>
                <ItemmGallery />
                <ItemmGallery />
                <ItemmGallery />
            </Row>
            <Row>
                <ItemmGallery />
                <ItemmGallery />
                <ItemmGallery />
            </Row>
        </Container>
    );
}

export default Gallery;