import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = ({ isMoviesFetched }) => {
  // парсим из локал сторидж после того, как загрузиться в него
  const [moviesFromStorage, setMoviesFromStorage] = React.useState([]);
  React.useEffect(() => {
    const parsedMovie = JSON.parse(localStorage.getItem('movies'));
    setMoviesFromStorage(parsedMovie);
  }, [isMoviesFetched]);

  return (
    <>
      <SearchForm />
      <MoviesCardList moviesFromStorage={moviesFromStorage} />
    </>
  );
};
export default Movies;
