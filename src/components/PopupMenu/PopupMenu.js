import React from 'react';
import accountBtn from './../../images/account-btn.svg';
//import closeIcone from './../../images/menuCloseIcon.svg'
import { Link } from 'react-router-dom';

const PopupMenu = ({ isOpenMenu, handleCloseMenu }) => {
  return (
    <div className={`popup ${isOpenMenu ? 'popup_on' : ''}`}>
      <button
        className='popup-menu__close-icone'
        type='button'
        onClick={handleCloseMenu}
      ></button>
      <div className='popup-menu__container'>
        <div className='popup-menu__menu'>
          <div className='popup-menu__links'>
            <Link to='/' className='popup-menu__links-item'>
              Главная
            </Link>
            <Link to='/movies' className='popup-menu__links-item'>
              Фильмы
            </Link>
            <Link to='/saved-movies' className='popup-menu__links-item'>
              Сохранённые фильмы
            </Link>
          </div>

          <Link
            to='/profile'
            className='menu__account_btn menu__account_btn-mobile'
            path='#'
          >
            <img
              className='menu__account_btn_user-logo'
              src={accountBtn}
              alt='кнопка аккаунта'
            ></img>
            <Link to='/profile' className='menu__account_btn_user-set '>
              Аккаунт
            </Link>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PopupMenu;
