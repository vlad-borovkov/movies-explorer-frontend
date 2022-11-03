import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import searchButton from './../../images/searchButton.svg';
import { useForm } from 'react-hook-form';

export default function SearchFormShort(props) {
  const {
    savedMoviesQuery,
    handleTumblerShortsSearch,
    handleTumblerAllSearch,
  } = props;

  const [renderShortsMoviesQuery, setRenderShortsMoviesQuery] = React.useState(
    localStorage.getItem('renderShortsMoviesQuery') || ''
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: { shortsMoviesQuery: renderShortsMoviesQuery },
  });

  const handleInput = (e) => {
    setRenderShortsMoviesQuery(
      localStorage.setItem('renderShortsMoviesQuery', e.target.value)
    );
  };

  //отправляем поисковый запрос
  const handleSubmitForm = (data) => {
    savedMoviesQuery(data.shortsMoviesQuery);
  };

  return (
    <section className='search-form'>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className='search-form__form'
        id='shorts-movies'
      >
        <div className='form_wrap'>
          <input
            {...register('shortsMoviesQuery', {
              required: 'Ввести название фильма обязательно',
            })}
            className='form__input'
            placeholder='Фильм'
            onInput={handleInput}
          />
          <span className='form__error'>
            {errors?.shortsMoviesQuery?.message}
          </span>
          <button className='form__submit' type='submit' form='shorts-movies'>
            <img
              className='form__submit_image'
              src={searchButton}
              alt='кнопка поиска'
            ></img>
          </button>
        </div>
      </form>
      <FilterCheckbox
        handleTumblerShortsSearch={handleTumblerShortsSearch}
        handleTumblerAllSearch={handleTumblerAllSearch}
      />
    </section>
  );
}
