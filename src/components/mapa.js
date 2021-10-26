import React from 'react';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function Mapa() {

    const styles = {
        mapa: {
            width: '100%',
            height: '100vh',
        }
    }

    return (
        <MapContainer center={[21.152721752719273, -101.71174153086338]} zoom={20} style={styles.mapa}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[21.152721752719273, -101.71174153086338]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Mapa;