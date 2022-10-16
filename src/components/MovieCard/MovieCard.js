import React from 'react';
import SamplePic from './../../images/sampleMoviePic.svg';
import MovieCardButton from '../MovieCardButton/MovieCardButton';
import { Route } from 'react-router-dom';

export default function MovieCard() {
  return (
    <>
      <li className='movie-card'>
        <div className='movie-card__header'>
          <h3 className='movie-card__name'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img
          className='movie-card__image'
          src={SamplePic}
          alt='В погоне за Бенкси'
        ></img>
        <MovieCardButton />
      </li>
      <li className='movie-card'>
        <div className='movie-card__header'>
          <h3 className='movie-card__name'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img
          className='movie-card__image'
          src={SamplePic}
          alt='В погоне за Бенкси'
        ></img>
        <MovieCardButton />
      </li>
      <li className='movie-card'>
        <div className='movie-card__header'>
          <h3 className='movie-card__name'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img
          className='movie-card__image'
          src={SamplePic}
          alt='В погоне за Бенкси'
        ></img>
        <MovieCardButton />
      </li>
      <li className='movie-card'>
        <div className='movie-card__header'>
          <h3 className='movie-card__name'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img
          className='movie-card__image'
          src={SamplePic}
          alt='В погоне за Бенкси'
        ></img>
        <MovieCardButton />
      </li>
      <li className='movie-card'>
        <div className='movie-card__header'>
          <h3 className='movie-card__name'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img
          className='movie-card__image'
          src={SamplePic}
          alt='В погоне за Бенкси'
        ></img>
        <MovieCardButton />
      </li>
      <li className='movie-card'>
        <div className='movie-card__header'>
          <h3 className='movie-card__name'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img
          className='movie-card__image'
          src={SamplePic}
          alt='В погоне за Бенкси'
        ></img>
        <MovieCardButton />
      </li>
      <li className='movie-card'>
        <div className='movie-card__header'>
          <h3 className='movie-card__name'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img
          className='movie-card__image'
          src={SamplePic}
          alt='В погоне за Бенкси'
        ></img>
        <MovieCardButton />
      </li>
      <li className='movie-card'>
        <div className='movie-card__header'>
          <h3 className='movie-card__name'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img
          className='movie-card__image'
          src={SamplePic}
          alt='В погоне за Бенкси'
        ></img>
        <MovieCardButton />
      </li>
      <li className='movie-card'>
        <div className='movie-card__header'>
          <h3 className='movie-card__name'>В погоне за Бенкси</h3>
          <p className='movie-card__duration'>27 минут</p>
        </div>
        <img
          className='movie-card__image'
          src={SamplePic}
          alt='В погоне за Бенкси'
        ></img>
        <MovieCardButton />
      </li>
    </>
  );
}
