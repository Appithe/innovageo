import React from 'react';
import { Routes, Route } from "react-router-dom";

import App from '../App'
import Login from '../pages/Login';
import NewUbicationForm from '../pages/NewUbicationForm';
import UbicationDetail from '../pages/UbicationDetail';

const Rutas = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<App />} />
            <Route path="/newUbicationForm" element={<NewUbicationForm />} />
            <Route path="/ubicationDetail" element={<UbicationDetail />} />
        </Routes>
    );
}

export default Rutas;