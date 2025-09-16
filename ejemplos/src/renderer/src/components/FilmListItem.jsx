import React from 'react';
import { Card } from 'react-bootstrap';

const FilmListItem = ({ event }) => {
  return (
    <Card>
      {event.image_url && <Card.Img variant="top" src={event.image_url} />}
      <Card.Body>
        <Card.Title>{event.title} ({event.year})</Card.Title>
        <Card.Text>
          Lenguaje: {event.language} <br />
          Director: {event.director || '-'} <br />
          Género: {event.genre || '-'}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FilmListItem;
