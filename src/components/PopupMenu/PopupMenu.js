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
            <p className='popup-menu__links-item'>Главная</p>
            <p className='popup-menu__links-item'>Фильмы</p>
            <p className='popup-menu__links-item'>Сохранённые фильмы</p>
          </div>

          <Link className='menu__account_btn' path='#'>
            <img
              className='menu__account_btn_user-logo'
              src={accountBtn}
              alt='кнопка аккаунта'
            ></img>
            <p className='menu__account_btn_user-set'>Аккаунт</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PopupMenu;
