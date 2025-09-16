import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const EventListFilter = ({ onFilter }) => {
  const [search, setSearch] = useState('');
  const [startYear, setStartYear] = useState('');
  const [endYear, setEndYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter({ search, startDate: startYear, endDate: endYear });
  };

  return (
    <Form onSubmit={handleSubmit} className="my-4 p-3 bg-white shadow-sm rounded">
      <Row className="align-items-end">
        <Col md={4}>
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Buscar por título..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Año desde</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 2000"
              value={startYear}
              onChange={(e) => setStartYear(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group>
            <Form.Label>Año hasta</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ej: 2023"
              value={endYear}
              onChange={(e) => setEndYear(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={2}>
          <Button type="submit" variant="primary" className="w-100">
            Filtrar
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EventListFilter;
