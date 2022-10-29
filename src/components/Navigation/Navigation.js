import React from 'react';
import { Route, Link, useHistory, useLocation } from 'react-router-dom';

import accountBtn from './../../images/account-btn.svg';
import menuBtn from './../../images/sandwitchMenu.svg';

const Navigation = ({ handleMenuClick, onUpdateSavedFilms }) => {
  const history = useHistory();

  const handleSignIn = () => {
    history.push('/sign-in');
  };

  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <>
      <Route exact path='/'>
        <div className='header__menu'>
          <nav className='menu'>
            <Link to='/sign-up' className='menu__link menu__link_bold'>
              Регистрация
            </Link>
          </nav>
          <button
            type='button'
            className='menu__sign-in_btn'
            onClick={handleSignIn}
          >
            Войти
          </button>
        </div>
      </Route>
      <Route path='/movies'>
        <div className='header__sandwitch-menu'>
          <img
            src={menuBtn}
            alt='кнопка открытия меню'
            onClick={handleMenuClick}
          ></img>
        </div>
        <div className='header__menu_movies'>
          <nav className='menu'>
            <Link
              to='/movies'
              className={`menu__link ${
                currentLocation === '/movies' && 'menu__link_bold'
              }`}
            >
              Фильмы
            </Link>
            <Link
              onClick={onUpdateSavedFilms}
              to='/saved-movies'
              className='menu__link'
            >
              Сохранённые фильмы
            </Link>
          </nav>
          <Link className='menu__account_btn' to='/profile'>
            <img
              className='menu__account_btn_user-logo'
              src={accountBtn}
              alt='кнопка аккаунта'
            ></img>
            <p className='menu__account_btn_user-set'>Аккаунт</p>
          </Link>
        </div>
      </Route>
      <Route path='/saved-movies'>
        <div className='header__sandwitch-menu'>
          <img
            src={menuBtn}
            alt='кнопка открытия меню'
            onClick={handleMenuClick}
          ></img>
        </div>
        <div className='header__menu_movies'>
          <nav className='menu'>
            <Link to='/movies' className='menu__link'>
              Фильмы
            </Link>
            <Link
              to='/saved-movies'
              className={`menu__link ${
                currentLocation === '/saved-movies' && 'menu__link_bold'
              }`}
            >
              Сохранённые фильмы
            </Link>
          </nav>
          <Link className='menu__account_btn' to='/profile'>
            <img
              className='menu__account_btn_user-logo'
              src={accountBtn}
              alt='кнопка аккаунта'
            ></img>
            <p className='menu__account_btn_user-set'>Аккаунт</p>
          </Link>
        </div>
      </Route>
      <Route path='/profile'>
        <div className='header__sandwitch-menu'>
          <img
            src={menuBtn}
            alt='кнопка открытия меню'
            onClick={handleMenuClick}
          ></img>
        </div>
        <div className='header__menu_movies'>
          <nav className='menu'>
            <Link to='/movies' className='menu__link'>
              Фильмы
            </Link>
            <Link to='/saved-movies' className='menu__link'>
              Сохранённые фильмы
            </Link>
          </nav>
          <Link className='menu__account_btn' to='/profile'>
            <img
              className='menu__account_btn_user-logo'
              src={accountBtn}
              alt='кнопка аккаунта'
            ></img>
            <p className='menu__account_btn_user-set'>Аккаунт</p>
          </Link>
        </div>
      </Route>
    </>
  );
};
export default Navigation;
