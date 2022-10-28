import React from 'react';
import { Route } from 'react-router-dom';
import AddMoviesBtn from '../AddMoviesBtn/AddMoviesBtn';
import MovieCard from './../MovieCard/MovieCard';
import Preloader from './../Preloader/Preloader';

export default function MoviesCardList(props) {
  const { moviesIsFetching } = props;

  //прилетает уже отфильтрованый по всем параметрам квери
  return (
    <section className='movie-list-section'>
      {moviesIsFetching ? (
        <ul className='movie-list'>
          {/* {moviesFromStorage.map((item) => (
            <MovieCard key={item.id} cardItem={item} />
          ))} */}
        </ul>
      ) : (
        <Preloader />
      )}
      <AddMoviesBtn {...props} />
    </section>
  );
}
