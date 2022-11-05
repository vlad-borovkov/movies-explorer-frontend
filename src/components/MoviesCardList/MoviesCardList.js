import React from 'react';
import { Route } from 'react-router-dom';
import AddMoviesBtn from '../AddMoviesBtn/AddMoviesBtn';
import MovieCard from './../MovieCard/MovieCard';
import Preloader from './../Preloader/Preloader';
import { searchQuery } from '../../utils/SearchQuery';
import { mainApi } from '../../utils/MainApi';

export default function MoviesCardList(props) {
  const {
    moviesIsFetching,
    updatedUserMovies,
    savedUserMovies,
    cardIsUpdate,
    isEmptyAllMoviesArray,
    isEmptySavedMoviesArray,
    isErrorFetched,
  } = props;

  // определяем текущий размер окна, чтобы выдать пагинацию, удаляем слушатель после выхода с этой страницы
  const [currentPagination, setCurrentPagination] = React.useState({
    more: '',
  });

  React.useEffect(() => {
    if (window.innerWidth >= 1280) {
      setCurrentPagination({ more: 3 });
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
      setCurrentPagination({ more: 2 });
    } else if (window.innerWidth >= 320 && window.innerWidth <= 767) {
      setCurrentPagination({ more: 2 });
    }
    const setResizeListener = () => {
      window.addEventListener('resize', resizeThrottler, false);
      var resizeTimeout;
      function resizeThrottler() {
        if (!resizeTimeout) {
          resizeTimeout = setTimeout(function () {
            resizeTimeout = null;
            actualResizeHandler();
          }, 66);
        }
      }
      function actualResizeHandler() {
        if (window.innerWidth >= 1280) {
          setCurrentPagination({ more: 3 });
        } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
          setCurrentPagination({ more: 2 });
        } else if (window.innerWidth >= 320 && window.innerWidth <= 767) {
          setCurrentPagination({ more: 2 });
        }
      }
    };
    setResizeListener();
    return () => {
      setResizeListener();
    };
  }, []);

  //приняли нужное количество фильмов после поиска по слову
  const [moviesForPagination, setMoviesForPagination] = React.useState([]);
  React.useEffect(() => {
    setMoviesForPagination(updatedUserMovies);

    //isButtonToAdd(moviesForRender, currentWidthWindow);
  }, [updatedUserMovies]);

  //отфильтровали по ширине экрана и показали первые результаты
  const [moviesForRender, setMoviesForRender] = React.useState([]);
  React.useEffect(() => {
    setMoviesForRender(searchQuery.filterByScreenSize(moviesForPagination));
    localStorage.setItem(
      'moviesForRender',
      JSON.stringify(searchQuery.filterByScreenSize(moviesForPagination))
    );
  }, [moviesForPagination]);

  const addMoreMovies = () => {
    if (moviesForPagination.length > moviesForRender.length) {
      const [...moreMovies] = moviesForPagination.slice(
        moviesForRender.length,
        moviesForRender.length + currentPagination.more
      ); //взяли кусок для вставки

      setMoviesForRender(moviesForRender.concat([...moreMovies]));
    }
  };

  // передаём значения нажатых карточек
  const handleSaveCard = (data) => {
    mainApi
      .handlerAddMovies({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      })
      .then((res) => cardIsUpdate())
      .catch((err) => console.log(err.message));
  };

  const handleDeleteCard = (data) => {
    const cardId = data._id;

    if (cardId) {
      mainApi
        .deleteCard(cardId)
        .then((res) => cardIsUpdate())
        .catch((err) => console.log(err));
    } else {
      const localStorageCardId = data.id;
      const cardForDelete = savedUserMovies.find(
        (item) => item.movieId === localStorageCardId
      );
      mainApi
        .deleteCard(cardForDelete._id)
        .then((res) => cardIsUpdate())
        .catch((err) => console.log(err));
    }
  };

  const handleClickCard = (data) => {
    const trailerLink = data.trailerLink;
    window.open(trailerLink, '_blank');
  };

  return (
    <section className='movie-list-section'>
      <Route path='/movies'>
        <p className='movie-list__message'>
          {isEmptyAllMoviesArray &&
            `Таких фильмов еще не придумали. Повторите другой запрос`}
          {isErrorFetched &&
            'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.'}
        </p>
        {moviesIsFetching ? (
          <ul className='movie-list'>
            {moviesForRender.map((item) => (
              <MovieCard
                key={item.id || item._id}
                cardItem={item}
                handleSaveCard={handleSaveCard}
                handleDeleteCard={handleDeleteCard}
                savedUserMovies={savedUserMovies}
                onCardClick={handleClickCard}
              />
            ))}
          </ul>
        ) : (
          <Preloader />
        )}
        {moviesForPagination.length > moviesForRender.length && (
          <AddMoviesBtn addMoreMovies={addMoreMovies} />
        )}
      </Route>
      <Route path='/saved-movies'>
        {moviesIsFetching ? (
          <>
            <p className='movie-list__message'>
              {savedUserMovies.length === 0 && `Здесь фильмы еще не живут.`}
            </p>
            <ul className='movie-list'>
              {savedUserMovies.map((item) => (
                <MovieCard
                  key={item.id || item._id}
                  cardItem={item}
                  handleSaveCard={handleSaveCard}
                  handleDeleteCard={handleDeleteCard}
                  savedUserMovies={savedUserMovies}
                  onCardClick={handleClickCard}
                />
              ))}
            </ul>
          </>
        ) : (
          <Preloader />
        )}
      </Route>
    </section>
  );
}
