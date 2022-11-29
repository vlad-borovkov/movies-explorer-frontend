import React from 'react';
import { Route, Link, useHistory, useLocation } from 'react-router-dom';
import { ThemeType } from '../../contexts/Theme';

import accountBtn from './../../images/account-btn.svg';
import accountBtn_dark from './../../images/account-btn_dark.svg';
import menuBtn from './../../images/sandwitchMenu.svg';
import muneBtn_dark from './../../images/sandwitchMenu_dark.svg';

const Navigation = ({ handleMenuClick, onUpdateSavedFilms, loggedIn }) => {
  const history = useHistory();

  const currentTheme = React.useContext(ThemeType);

  const handleSignIn = () => {
    history.push('/sign-in');
  };

  const location = useLocation();
  const currentLocation = location.pathname;

  return loggedIn ? (
    <>
      <div className='header__sandwitch-menu'>
        <img
          src={currentTheme === 'light' ? menuBtn : muneBtn_dark}
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
            src={currentTheme === 'light' ? accountBtn : accountBtn_dark}
            alt='кнопка аккаунта'
          ></img>
          <p className='menu__account_btn_user-set'>Аккаунт</p>
        </Link>
      </div>
    </>
  ) : (
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
  );
};
export default Navigation;

// <Route exact path='/'>
// <div className='header__menu'>
//   <nav className='menu'>
//     <Link to='/sign-up' className='menu__link menu__link_bold'>
//       Регистрация
//     </Link>
//   </nav>
//   <button
//     type='button'
//     className='menu__sign-in_btn'
//     onClick={handleSignIn}
//   >
//     Войти
//   </button>
// </div>
// </Route>
// <Route path='/movies'>
// <div className='header__sandwitch-menu'>
//   <img
//     src={menuBtn}
//     alt='кнопка открытия меню'
//     onClick={handleMenuClick}
//   ></img>
// </div>
// <div className='header__menu_movies'>
//   <nav className='menu'>
//     <Link
//       to='/movies'
//       className={`menu__link ${
//         currentLocation === '/movies' && 'menu__link_bold'
//       }`}
//     >
//       Фильмы
//     </Link>
//     <Link
//       onClick={onUpdateSavedFilms}
//       to='/saved-movies'
//       className='menu__link'
//     >
//       Сохранённые фильмы
//     </Link>
//   </nav>
//   <Link className='menu__account_btn' to='/profile'>
//     <img
//       className='menu__account_btn_user-logo'
//       src={accountBtn}
//       alt='кнопка аккаунта'
//     ></img>
//     <p className='menu__account_btn_user-set'>Аккаунт</p>
//   </Link>
// </div>
// </Route>
// <Route path='/saved-movies'>
// <div className='header__sandwitch-menu'>
//   <img
//     src={menuBtn}
//     alt='кнопка открытия меню'
//     onClick={handleMenuClick}
//   ></img>
// </div>
// <div className='header__menu_movies'>
//   <nav className='menu'>
//     <Link to='/movies' className='menu__link'>
//       Фильмы
//     </Link>
//     <Link
//       to='/saved-movies'
//       className={`menu__link ${
//         currentLocation === '/saved-movies' && 'menu__link_bold'
//       }`}
//     >
//       Сохранённые фильмы
//     </Link>
//   </nav>
//   <Link className='menu__account_btn' to='/profile'>
//     <img
//       className='menu__account_btn_user-logo'
//       src={accountBtn}
//       alt='кнопка аккаунта'
//     ></img>
//     <p className='menu__account_btn_user-set'>Аккаунт</p>
//   </Link>
// </div>
// </Route>
// <Route path='/profile'>
// <div className='header__sandwitch-menu'>
//   <img
//     src={menuBtn}
//     alt='кнопка открытия меню'
//     onClick={handleMenuClick}
//   ></img>
// </div>
// <div className='header__menu_movies'>
//   <nav className='menu'>
//     <Link to='/movies' className='menu__link'>
//       Фильмы
//     </Link>
//     <Link to='/saved-movies' className='menu__link'>
//       Сохранённые фильмы
//     </Link>
//   </nav>
//   <Link className='menu__account_btn' to='/profile'>
//     <img
//       className='menu__account_btn_user-logo'
//       src={accountBtn}
//       alt='кнопка аккаунта'
//     ></img>
//     <p className='menu__account_btn_user-set'>Аккаунт</p>
//   </Link>
// </div>
// </Route>
// </>
