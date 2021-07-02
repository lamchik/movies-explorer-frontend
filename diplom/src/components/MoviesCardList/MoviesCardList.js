import poster from '../../images/movie.png';
import '../MoviesCardList/MoviesCardList.css';
import Preloader from '../Preloader/Preloader';
import { Suspense, lazy, useEffect } from 'react';
const MoviesCard = lazy(() => import('../MoviesCard/MoviesCard'));

function MoviesCardList(props) {
  // console.log(props.filteredMovies)

  const items = Array.from(props.filteredMovies).map((movie) => (
    // console.log(movie),
    <MoviesCard
      movie={movie}
      page={props.page}
      key={movie.id}
      like={props.like}
      likedMovie={props.likedMovie}
      onClick={props.onClick}
      setLikeActive={props.setLikeActive}
      likes={props.likes}
    />
  ));
  return (
    <Suspense fallback={<Preloader />}>
      <div className="movies-list">{items}</div>
    </Suspense>
  );
}

export default MoviesCardList;
