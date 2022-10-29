import React from 'react';
import SamplePic from './../../images/sampleMoviePic.svg';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import { Route } from 'react-router-dom';

export default function MovieCard({
  cardItem,
  handleSaveCard,
  handleDeleteCard,
  savedUserMovies,
}) {
  //проверка на сохранение в массиве сохранённых пользователем фильмов

  const isSaved = savedUserMovies.some(
    (element) => element.movieId === cardItem.id
  );

  return (
    <li className='movie-card'>
      <div className='movie-card__header'>
        <h3 className='movie-card__name'>{cardItem.nameRU}</h3>
        <p className='movie-card__duration'>{cardItem.duration} минут</p>
      </div>
      <Route path='/movies'>
        <img
          className='movie-card__image'
          src={`https://api.nomoreparties.co${cardItem.image.url}`}
          alt={cardItem.nameRU}
        ></img>
      </Route>

      <Route path='/saved-movies'>
        <img
          className='movie-card__image'
          src={cardItem.image}
          alt={cardItem.nameRU}
        ></img>
      </Route>

      <MovieCardButton
        cardItem={cardItem}
        onCardSave={handleSaveCard}
        onCardDelete={handleDeleteCard}
        isSavedMovies={isSaved}
      />
    </li>
  );
}
