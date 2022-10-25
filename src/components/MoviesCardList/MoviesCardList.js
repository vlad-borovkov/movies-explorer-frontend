import React from 'react';
import { Route } from 'react-router-dom';
import AddMoviesBtn from '../AddMoviesBtn/AddMoviesBtn';
import MovieCard from './../MovieCard/MovieCard';
import Preloader from './../Preloader/Preloader';

export default function MoviesCardList({ moviesFromStorage }) {
  //отображение конкретного числа карточек, пагинация при нажатии на кнопку "еще", картинка в карточке.
  console.log(moviesFromStorage);

  const allMovies = moviesFromStorage;

  return (
    <section className='movie-list-section'>
      {moviesFromStorage ? (
        <ul className='movie-list'>
          {moviesFromStorage.map((item) => (
            <MovieCard key={item.id} cardItem={item} />
          ))}
        </ul>
      ) : (
        <Preloader />
      )}
      <AddMoviesBtn />
    </section>
  );
}
