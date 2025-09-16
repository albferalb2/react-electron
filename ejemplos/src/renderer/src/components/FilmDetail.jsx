import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const FilmDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const film = useSelector(state => 
    state.films.find(film => film.id === parseInt(id))
  );

  if (!film) {
    navigate('/');
    return null;
  }
  return (
    <div>
      <h1>{film.title}
        </h1>
        <p>Director: {film.director}</p>
        <p>Año: {film.year}</p>
        <p>Género: {film.genre}</p>
    </div>
  );
};

export default FilmDetail;
