import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../redux/filmSlice';
import FilmListItem from './FilmListItem';

const FilmList = () => {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films.items);
  const status = useSelector((state) => state.films.status);
  const error = useSelector((state) => state.films.error);

  const [visibleFilms, setVisibleFilms] = useState(3);

useEffect(() => {
  if (status === 'idle') {
    dispatch(fetchFilms());
  }
}, [status, dispatch]);


  const loadMore = () => setVisibleFilms(prev => prev + 3);

  // Spinner mientras carga
  if (status === 'loading') return <Spinner animation="border" />;

  // Mostrar error si falló
  if (status === 'failed') return <p>Error: {error}</p>;

  // Asegurarse de que films sea siempre un array
  const filmsArray = Array.isArray(films) ? films : [];

  return (
    <div>
      {filmsArray.length === 0 ? (
        <p>No hay películas disponibles.</p>
      ) : (
        <>
          <Row>
            {filmsArray.slice(0, visibleFilms).map(film => (
              <Col key={film.id} md={4} className="mb-4">
                <FilmListItem event={film} />
              </Col>
            ))}
          </Row>
          {visibleFilms < filmsArray.length && (
            <Button onClick={loadMore} className="mt-3" variant="primary">
              Cargar más
            </Button>
          )}
        </>
      )}
    </div>
  );
};

export default FilmList;
