import React from 'react';
import SamplePic from './../../images/sampleMoviePic.svg';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import { Route } from 'react-router-dom';

export default function MovieCard({ cardItem }) {
  return (
    <li className='movie-card'>
      <div className='movie-card__header'>
        <h3 className='movie-card__name'>{cardItem.nameRU}</h3>
        <p className='movie-card__duration'>{cardItem.duration} минут</p>
      </div>
      <img
        className='movie-card__image'
        src={`https://api.nomoreparties.co${cardItem.image.url}`}
        alt={cardItem.nameRU}
      ></img>
      <MovieCardButton />
    </li>
  );
}
