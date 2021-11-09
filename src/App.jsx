import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

import MapView from './pages/MapView';
import NavBar from './components/NavBar/navBar';

function App() {
  return (
    <Container fluid>
      <NavBar />
      <MapView />
    </Container>
  );
}

export default App;
