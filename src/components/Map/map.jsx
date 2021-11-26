import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Map(props) {

    const styles = {
        mapa: {
            width: props.width,
            height: props.height,
        },
    }

    const position = [props.lat, props.lng]

    return (
        <MapContainer center={position} zoom={props.zoom} scrollWheelZoom={props.enableZoom} style={styles.mapa}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;