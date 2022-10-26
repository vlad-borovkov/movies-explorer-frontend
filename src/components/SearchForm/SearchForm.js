import React from 'react';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import searchButton from './../../images/searchButton.svg';
import { useForm } from 'react-hook-form';

export default function SearchForm({ queryFromForm, onUpdaterTumbler }) {
  // передача значения после сабмита формы

  //рендер запроса в строку из локального хранилища, чтобы при перезагрузке страницы
  const [renderQuery, setRenderQuery] = React.useState(
    localStorage.getItem('movieQuery') || ''
  );
  const handleInput = (e) => {
    setRenderQuery(localStorage.setItem('movieQuery', e.target.value));
  };
  //обработка формы
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    { defaultValues: { movieQuery: renderQuery } },
    { mode: 'onChange' }
  );

  const handleSubmitForm = (data) => {
    queryFromForm(data);
  };

  return (
    <section className='search-form'>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className='search-form__form'
        id='search-movies'
      >
        <div className='form_wrap'>
          <input
            {...register('movieQuery', {
              required: 'Ввести имя обязательно',
            })}
            className='form__input'
            placeholder='Фильм'
            onInput={handleInput}
          />
          <span className='form__error'>{errors?.movieQuery?.message}</span>
          <button className='form__submit' type='submit' form='search-movies'>
            <img
              className='form__submit_image'
              src={searchButton}
              alt='кнопка поиска'
            ></img>
          </button>
        </div>
      </form>
      <FilterCheckbox onUpdaterTumbler={onUpdaterTumbler} />
    </section>
  );
}
