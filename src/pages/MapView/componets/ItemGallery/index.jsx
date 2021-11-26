import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ItemGallery() {

    const styles = {
        container: {
            marginTop: '30px',
            marginLeft: '35px',
            width: '206px'
        },

    }

    return (
        <Card style={styles.container}>
            <Card.Img variant="top" src="https://picsum.photos/id/1065/206/160"/>
            <Card.Body>
                <Card.Title>Lorem Impsum</Card.Title>
                <Card.Text style={{
                    width: 'auto',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary" href='/ubicationDetail'>Go somewhere</Button>
            </Card.Body>
        </Card >
    );
}

export default ItemGallery;