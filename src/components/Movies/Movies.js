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

  //состояние пустого массива всех фильмов для вывода сообщения
  const [isEmptyAllMoviesArray, setIsEmptyAllMovies] = React.useState(Boolean);

  // храним массив отфильтрованных фильмов
  const [userMoviesArray, setUserMoviesArray] = React.useState(
    JSON.parse(localStorage.getItem('userMovies')) || []
  );
  // принимаем запрос от пользователя и фильтруем все фильмы
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
    if (filteredArray.length === 0) {
      setIsEmptyAllMovies(true);
    } else setIsEmptyAllMovies(false);
  };

  const [isEmptySavedMoviesArray, setIsEmptySavedMovies] =
    React.useState(Boolean);
  // получаем массив сохранённых пользователей фильмов из MainAp
  const [savedMovies, setSavedMovies] = React.useState(
    JSON.parse(localStorage.getItem('savedMoviesLocalStorage'))
  );
  // принимаем запрос и фильтруем сохранённые фильмы
  const hadleSavedSubmitForm = (data) => {
    const tumblerValue = JSON.parse(localStorage.getItem('shortsIsOn'));
    const filteredArray = searchQuery.filterByQuery(
      savedMovies,
      data.movieQuery,
      tumblerValue
    );

    setSavedMovies(filteredArray);
    if (filteredArray.length === 0) {
      setIsEmptySavedMovies(true);
    } else setIsEmptySavedMovies(false);
  };

  const [cardIsUpdate, setCardIsUpdate] = React.useState(false);
  const handleUpdateCard = () => {
    setCardIsUpdate(!cardIsUpdate);
  };

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
      .catch((err) => console.log(err));
  }, [onUpdateSavedFilms, cardIsUpdate]);

  return (
    <>
      <SearchForm
        allMoviesQuery={hadleSubmitForm}
        savedMoviesQuery={hadleSavedSubmitForm}
      />
      <MoviesCardList
        moviesIsFetching={isMoviesFetched}
        updatedUserMovies={userMoviesArray}
        savedUserMovies={savedMovies}
        cardIsUpdate={() => handleUpdateCard()}
        isEmptyAllMoviesArray={isEmptyAllMoviesArray}
        isEmptySavedMoviesArray={isEmptySavedMoviesArray}
      />
    </>
  );
};
export default Movies;
