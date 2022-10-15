import React from 'react';
import logoHeader from './../../images/logoHeader.svg';
import Navigation from '../Navigation/Navigation';
import { useHistory } from 'react-router-dom';

const Header = ({ handleMenuClick }) => {
  const history = useHistory();
  const currentPath = history.location.pathname;
  // console.log(history.location.pathname === '/movies' && '/saved-movies');
  return (
    <header
      className={`header ${
        currentPath === '/movies' || currentPath === '/saved-movies'
          ? 'header_movies'
          : ''
      } ${currentPath === '/profile' ? 'header_off' : ''}`}
    >
      <img className='header__logo' src={logoHeader} alt='логотип'></img>
      <Navigation handleMenuClick={handleMenuClick} />
    </header>
  );
};

export default Header;
