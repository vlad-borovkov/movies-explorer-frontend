import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { searchQuery } from '../../utils/SearchQuery';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';

const Movies = ({ onUpdateSavedFilms }) => {
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

  // получаем массив сохранённых пользователей фильмов из MainAp
  const [savedMovies, setSavedMovies] = React.useState([]);

  const [cardIsUpdate, setCardIsUpdate] = React.useState(false);
  const handleUpdateCard = () => {
    setCardIsUpdate(!cardIsUpdate);
  };

  // принимаем сохраненные пользователем фильмы и подписываемся на события
  React.useEffect(() => {
    mainApi
      .getCardsFromServer()
      .then((data) => setSavedMovies(data.movies))
      .catch((err) => console.log(err));
  }, [onUpdateSavedFilms, cardIsUpdate]);

  return (
    <>
      <SearchForm queryForm={hadleSubmitForm} />
      <MoviesCardList
        moviesIsFetching={isMoviesFetched}
        updatedUserMovies={userMoviesArray}
        savedUserMovies={savedMovies}
        cardIsUpdate={() => handleUpdateCard()}
      />
    </>
  );
};
export default Movies;
