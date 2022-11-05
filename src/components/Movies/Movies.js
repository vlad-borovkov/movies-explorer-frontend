import React from 'react';
import SearchFormAll from '../SearchForm/SearchFormAll';
import SearchFormShort from '../SearchForm/SearchFormShort';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { searchQuery } from '../../utils/SearchQuery';
import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { Route, useHistory } from 'react-router-dom';

const Movies = ({ onUpdateSavedFilms }) => {
  const [isMoviesFetched, setMoviesFetched] = React.useState(false); //для спинера
  const [isErrorFetched, setErrorFetched] = React.useState(false);
  const history = useHistory();
  // принимаем фильмы с БитФИльм
  React.useEffect(() => {
    setErrorFetched(false);
    moviesApi
      .getMoviesFromServer()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res));
      })
      .then(() => {
        setMoviesFetched(true);
      })
      .catch((err) => {
        setErrorFetched(true);
        console.log(`Упс, ошибка ${err}`);
      });
  }, []);

  //состояние пустого массива всех фильмов для вывода сообщения
  const [isEmptyAllMoviesArray, setIsEmptyAllMovies] = React.useState(Boolean);

  // храним массив отфильтрованных фильмов
  const [userMoviesArray, setUserMoviesArray] = React.useState(
    JSON.parse(localStorage.getItem('userMovies')) || []
  );
  //  фильтруем все фильмы на /movies
  const handleSubmitForm = (quaryValue) => {
    console.log(quaryValue);
    const allMoviesFilter = JSON.parse(localStorage.getItem('shortsIsOnAll')); // получили состояние тумблера для /movies
    const allMoviesArray = JSON.parse(localStorage.getItem('movies')); // получили из сторидж все фильмы

    const filteredArray = searchQuery.filterByQuery(
      allMoviesArray,
      quaryValue,
      allMoviesFilter
    ); // передали запрос из формы со страницы фильмов

    //вернуть отфильтрованный массив значений в соответсвии со всеми условиями(запрос, тумблер)
    localStorage.setItem('userMovies', JSON.stringify(filteredArray));
    setUserMoviesArray(JSON.parse(localStorage.getItem('userMovies')));
    if (filteredArray.length === 0) {
      setIsEmptyAllMovies(true);
    } else setIsEmptyAllMovies(false);
  };
  // отфильтровать при нажатии тумблера
  const handleTumblerAllSearch = () => {
    const allMoviesQuery = localStorage.getItem('renderAllMovisQuery');
    if (allMoviesQuery.length >= 1) {
      handleSubmitForm(allMoviesQuery);
    } else return;
  };

  const [cardIsUpdate, setCardIsUpdate] = React.useState(false);
  const handleUpdateCard = () => {
    setCardIsUpdate(!cardIsUpdate);
  };

  const [isEmptySavedMoviesArray, setIsEmptySavedMovies] =
    React.useState(Boolean);

  // сохраняем массив фильмов пользователя из MainApi
  const [savedMovies, setSavedMovies] = React.useState(
    JSON.parse(localStorage.getItem('savedMoviesLocalStorage'))
  );
  // принимаем сохраненные пользователем фильмы и подписываемся на события
  React.useEffect(() => {
    mainApi
      .getCardsFromServer()
      .then((data) => {
        localStorage.setItem(
          'savedMoviesLocalStorage',
          JSON.stringify(data.movies)
        );
        let savedMoviesLocalStorage = JSON.parse(
          localStorage.getItem('savedMoviesLocalStorage')
        );
        setSavedMovies(savedMoviesLocalStorage);
      })
      .catch((err) => {
        if (err.status === 401) {
          history.push('/');
          localStorage.clear();
        }
      });
  }, [onUpdateSavedFilms, cardIsUpdate]);

  //  фильтруем фильмы на /saved-movies
  const handleSavedSubmitForm = (quaryValue) => {
    const shortsMoviesTumbler = JSON.parse(
      localStorage.getItem('shortsMoviesFilter')
    );
    const usersMoviesArray = JSON.parse(
      localStorage.getItem('savedMoviesLocalStorage')
    );

    const filteredArray = searchQuery.filterByQuery(
      usersMoviesArray,
      quaryValue,
      shortsMoviesTumbler
    );

    setSavedMovies(filteredArray);
    if (filteredArray.length === 0) {
      setIsEmptySavedMovies(true);
    } else setIsEmptySavedMovies(false);
  };

  const handleTumblerShortsSearch = () => {
    const shortsMoviesQuery = localStorage.getItem('renderShortsMoviesQuery');

    if (shortsMoviesQuery !== null && shortsMoviesQuery.length >= 1) {
      handleSavedSubmitForm(shortsMoviesQuery);
    } else return;
  };

  return (
    <>
      <Route path='/movies'>
        <SearchFormAll
          allMoviesQuery={handleSubmitForm}
          handleTumblerAllSearch={handleTumblerAllSearch}
          handleTumblerShortsSearch={handleTumblerShortsSearch}
        />
      </Route>

      <Route path='/saved-movies'>
        <SearchFormShort
          savedMoviesQuery={handleSavedSubmitForm}
          handleTumblerShortsSearch={handleTumblerShortsSearch}
          handleTumblerAllSearch={handleTumblerAllSearch}
        />
      </Route>

      <MoviesCardList
        moviesIsFetching={isMoviesFetched}
        updatedUserMovies={userMoviesArray}
        savedUserMovies={savedMovies}
        cardIsUpdate={() => handleUpdateCard()}
        isEmptyAllMoviesArray={isEmptyAllMoviesArray}
        isEmptySavedMoviesArray={isEmptySavedMoviesArray}
        isErrorFetched={isErrorFetched}
      />
    </>
  );
};
export default Movies;
