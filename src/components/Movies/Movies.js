import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { searchQuery } from '../../utils/SearchQuery';
import { moviesApi } from '../../utils/MoviesApi';

const Movies = ({ isMoviesFetched }) => {
  // парсим из локал сторидж после того, как загрузиться в него
  // const [moviesFromStorage, setMoviesFromStorage] = React.useState([]);
  // React.useEffect(() => {
  //   const parsedMovie = JSON.parse(localStorage.getItem('movies'));
  //   setMoviesFromStorage(parsedMovie);
  // }, [isMoviesFetched]);

  //прилетает валидный квери от формы, оно обрабатывается классом и делается запрос к api.

  const queryFromForm = (data) => {
    console.log(data);
  };
  const onUpdaterTumbler = (data) => {
    console.log(data);
  };

  return (
    <>
      <SearchForm
        queryFromForm={queryFromForm}
        onUpdaterTumbler={onUpdaterTumbler}
      />
      <MoviesCardList />
    </>
  );
};
export default Movies;
