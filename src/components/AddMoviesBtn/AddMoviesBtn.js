import React from 'react';
import { Route } from 'react-router-dom';

export default function AddMoviesBtn({ addMoreMovies }) {
  return (
    <section className='add-movies-btn'>
      <Route exact path='/movies'>
        <div className='movie-list-section__add-btn' onClick={addMoreMovies}>
          Ещё
        </div>
      </Route>
    </section>
  );
}
