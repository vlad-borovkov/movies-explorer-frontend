import React from 'react';
import { Route } from 'react-router-dom';
import AddMoviesBtn from '../AddMoviesBtn/AddMoviesBtn';
import MovieCard from './../MovieCard/MovieCard';
import Preloader from './../Preloader/Preloader';
import { searchQuery } from '../../utils/SearchQuery';

export default function MoviesCardList(props) {
  const { moviesIsFetching, updatedUserMovies } = props;

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

  const fromStorageMovie = JSON.parse(localStorage.getItem('moviesForRender'));

  const addMoreMovies = () => {
    if (moviesForPagination.length > moviesForRender.length) {
      const [...moreMovies] = moviesForPagination.slice(
        moviesForRender.length,
        moviesForRender.length + currentPagination.more
      ); //взяли кусок для вставки

      setMoviesForRender(moviesForRender.concat([...moreMovies]));
    }
  };
  //прилетает массив уже отфильтрованый по параметрам запросам. .сделать функцию, которая выдаёт количесвто карточек по ширине экрана, и управляет кнопкое "ЕЩЁ", которая выдаёт еще карточки, если они есть.
  return (
    <section className='movie-list-section'>
      {console.log(moviesForRender)}
      {moviesIsFetching ? (
        <ul className='movie-list'>
          {moviesForRender.map((item) => (
            <MovieCard key={item.id} cardItem={item} />
          ))}
        </ul>
      ) : (
        <Preloader />
      )}
      {moviesForPagination.length > moviesForRender.length && (
        <AddMoviesBtn addMoreMovies={addMoreMovies} />
      )}
    </section>
  );
}
