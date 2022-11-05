import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import searchButton from './../../images/searchButton.svg';
import { useForm } from 'react-hook-form';

export default function SearchFormAll(props) {
  const { allMoviesQuery, handleTumblerAllSearch, handleTumblerShortsSearch } =
    props;

  //сохранение запросов, валидация для /movies
  const [renderAllMovisQuery, setAllMovisRenderQuery] = React.useState(
    localStorage.getItem('renderAllMovisQuery') || ''
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: { allMoviesQuery: renderAllMovisQuery },
  });

  const handleAllInput = (e) => {
    setAllMovisRenderQuery(
      localStorage.setItem('renderAllMovisQuery', e.target.value)
    );
  };

  //запрос для разных массивов фильмов
  const handleSubmitForm = (data) => {
    allMoviesQuery(data.allMoviesQuery);
  };

  return (
    <section className='search-form'>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className='search-form__form'
        id='all-movies'
      >
        <div className='form_wrap'>
          <input
            {...register('allMoviesQuery', {
              required: 'Ввести название фильма обязательно',
            })}
            className='form__input'
            placeholder='Фильм'
            onInput={handleAllInput}
          />
          <span className='form__error'>{errors?.allMoviesQuery?.message}</span>
          <button className='form__submit' type='submit' form='all-movies'>
            <img
              className='form__submit_image'
              src={searchButton}
              alt='кнопка поиска'
            ></img>
          </button>
        </div>
      </form>
      <FilterCheckbox
        handleTumblerAllSearch={handleTumblerAllSearch}
        handleTumblerShortsSearch={handleTumblerShortsSearch}
      />
    </section>
  );
}
