import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import FilmList from './components/FilmList';
import AddFilm from './components/FilmAdd';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid className="bg-light min-vh-100 py-5">
      <Container>
        {/* Header */}
        <Row className="text-center mb-5">
          <Col>
            <h1 className="display-4 text-primary fw-bold mb-3">
              🎬 Catálogo de Películas
            </h1>
            <p className="lead text-muted">
              Gestiona tus películas favoritas en un solo lugar
            </p>
          </Col>
        </Row>

        {/* Rutas */}
        <Row>
          <Col>
            <Routes>
              <Route path="/films" element={<FilmList />} />
              <Route path="/add-film" element={<AddFilm />} />
              <Route path="*" element={<Navigate to="/films" />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
