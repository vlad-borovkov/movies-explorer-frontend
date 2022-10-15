import React from 'react';
import { Route } from 'react-router-dom';
import AddMoviesBtn from '../AddMoviesBtn/AddMoviesBtn';
import MovieCard from './../MovieCard/MovieCard';

export default function MoviesCardList() {
  return (
    <div className='movie-list-section'>
      <ul className='movie-list'>
        <MovieCard />
      </ul>
      <AddMoviesBtn />
    </div>
  );
}
