import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import searchButton from './../../images/searchButton.svg';

export default function SearchForm() {
  return (
    <div className='search-form'>
      <form className='search-form__form' id='search-movies'>
        <div className='form_wrap'>
          <input
            className='form__input'
            form='search-movies'
            id='movie-query'
            type='text'
            name='moviequery'
            placeholder='Фильм'
            minLength='1'
            maxLength='60'
            required
          />
          {/* <span className='form__error'></span> */}
          <button className='form__submit' type='submit' form='search-movies'>
            <img
              className='form__submit_image'
              src={searchButton}
              alt='кнопка поиска'
            ></img>
          </button>
        </div>
      </form>
      <FilterCheckbox />
    </div>
  );
}
