// src/components/FilmAdd.jsx
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const FilmAdd = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [language, setLanguage] = useState('es');
  const [director, setDirector] = useState('');
  const [genre, setGenre] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !year || !language) {
      alert('Por favor, completa los campos obligatorios: Título, Año y Lenguaje');
      return;
    }

    try {
      const res = await fetch('/films', { // <--- usar proxy o mismo origen
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          year,
          language,
          director,
          genre,
          image_url: image
        })
      });

      if (!res.ok) throw new Error('Error al añadir la película');

      const data = await res.json();
      console.log('Película añadida:', data);

      navigate('/films'); // Volver al listado
    } catch (err) {
      console.error(err);
      alert('No se pudo añadir la película. Revisa la consola.');
    }
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <h2 className="mb-4">Añadir Película</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Título *</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Año *</Form.Label>
              <Form.Control
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Lenguaje *</Form.Label>
              <Form.Select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="es">Español</option>
                <option value="en">Inglés</option>
                <option value="fr">Francés</option>
                <option value="de">Alemán</option>
                <option value="ja">Japonés</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Director</Form.Label>
              <Form.Control
                type="text"
                value={director}
                onChange={(e) => setDirector(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Género</Form.Label>
              <Form.Control
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>URL de Imagen</Form.Label>
              <Form.Control
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Añadir Película
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FilmAdd;
