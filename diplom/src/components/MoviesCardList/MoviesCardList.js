import '../MoviesCardList/MoviesCardList.css';
import Movie from '../MoviesCard/Movie';

function MoviesCardList(props) {
  const {filteredMovies, page, onClick, likes} = props;

  const items = Array.from(filteredMovies).map((movie) => (
    <Movie
      key={movie.id || movie._id}

      movie={movie}
      page={page}
      onClick={onClick}
      likes={likes}
    />
  ));
  return (
    <div className="movies-list">{items}</div>
  );
}

export default MoviesCardList;
