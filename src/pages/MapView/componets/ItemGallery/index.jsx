import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ItemGallery(props) {

    const styles = {
        container: {
            marginTop: '30px',
            marginLeft: '35px',
            width: '206px'
        },
    }

    const srcImg = 'https://picsum.photos/seed/'+props.lugarID+'/206/160';
    const url = '/ubicationDetail?' + props.lugarID;

    return (
        <Card style={styles.container}>
            <Card.Img variant="top" src={srcImg}/>
            <Card.Body>
                <Card.Title>{props.directionName}</Card.Title>
                <Card.Text style={{
                    width: 'auto',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary" href={url}>Ver mas</Button>
            </Card.Body>
        </Card >
    );
}

export default ItemGallery;