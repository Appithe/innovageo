import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { Box } from '@mui/system';

import VistaMapa from './pages/mapa'
import NavBar from './components/navBar'

function App() {
  return (
    <Container fluid>
      <NavBar />
      <VistaMapa />
    </Container>
  );
}

export default App;
