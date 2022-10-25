import React from 'react';
import { Link, Route } from 'react-router-dom';
import logoHeader from './../../images/logoHeader.svg';

const EntryUserForm = ({
  name,
  isOpen,
  onSubmit,
  title,
  children,
  buttonOnText,
  isValid,
}) => {
  return (
    <section
      className={`entry-user entry-user_type_${name} ${
        isOpen ? 'entry-user_on' : ''
      }`}
    >
      <div className='entry-user__container-form'>
        <form
          onSubmit={onSubmit}
          className='entry-user__form'
          name={`${name}-user`}
        >
          <img
            src={logoHeader}
            className='entry-user__container-form-image'
            alt='лого сайта'
          ></img>
          <h2 className='entry-user__container-form-title'>{title}</h2>

          {/* инпуты разных форм здесь */}
          {children}

          <button
            disabled={!isValid}
            className={`entry-user__container-form-submit-button ${
              !isValid && 'entry-user__container-form-submit-button_disabled'
            }`}
            type='submit'
            value={`${buttonOnText}`}
          >
            {`${buttonOnText}`}
          </button>
        </form>
        <Route path='/sign-up'>
          <p className='entry-user_login-reminder'>
            Уже зарегистрированы?&nbsp;
            <Link to='/sign-in' className='entry-user__login-reminder-link'>
              Войти
            </Link>
          </p>
        </Route>
        <Route path='/sign-in'>
          <p className='entry-user_login-reminder'>
            Ещё не зарегистрированы?&nbsp;
            <Link to='/sign-up' className='entry-user__login-reminder-link'>
              Регистрация
            </Link>
          </p>
        </Route>
      </div>
    </section>
  );
};
export default EntryUserForm;
