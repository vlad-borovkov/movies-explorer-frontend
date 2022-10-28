import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { searchQuery } from '../../utils/SearchQuery';
import { moviesApi } from '../../utils/MoviesApi';

const Movies = ({}) => {
  const [isMoviesFetched, setMoviesFetched] = React.useState(false); //для спинера

  React.useEffect(() => {
    moviesApi
      .getMoviesFromServer()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res));
      })
      .then(() => {
        setMoviesFetched(true);
      })
      .catch((err) => {
        console.log(`Упс, ошибка ${err}`);
      });
  }, []);

  const [userMoviesArray, setUserMoviesArray] = React.useState([]); //храним массив отфильтрованных фильмов
  // принимаем запрос от пользователя и фильтруем
  const hadleSubmitForm = (data) => {
    const tumblerValue = JSON.parse(localStorage.getItem('shortsIsOn')); // получили состояние тумблера
    const allMoviesArray = JSON.parse(localStorage.getItem('movies')); // получили из сторидж все фильмы

    const filteredArray = searchQuery.filterByQuery(
      allMoviesArray,
      data.movieQuery,
      tumblerValue
    );
    //вернуть отфильтрованный массив значений в соответсвии со всеми условиями(запрос, тумблер)
    localStorage.setItem('userMovies', JSON.stringify(filteredArray));

    setUserMoviesArray(JSON.parse(localStorage.getItem('userMovies')));
  };

  return (
    <>
      <SearchForm queryForm={hadleSubmitForm} />
      <MoviesCardList
        moviesIsFetching={isMoviesFetched}
        updatedUserMovies={userMoviesArray}
      />
    </>
  );
};
export default Movies;
