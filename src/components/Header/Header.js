import React from 'react';
import logoHeader from './../../images/logoHeader.svg';
import Navigation from '../Navigation/Navigation';
import { useLocation, useHistory } from 'react-router-dom';

const Header = (props) => {
  const {
    handleMenuClick,
    onUpdateSavedFilms,
    loggedIn,
    handleLightClick,
    handleDarkClick,
  } = props;

  const location = useLocation();
  const currentPath = location.pathname;
  const history = useHistory();
  const handleGoHome = () => {
    history.push('/');
  };

  return (
    <header className={`header ${loggedIn && 'header_loggedIn'}`}>
      <img
        className='header__logo'
        src={logoHeader}
        alt='логотип'
        onClick={handleGoHome}
      ></img>
      <div>
        <button onClick={handleLightClick}>Светлая</button>
        <button onClick={handleDarkClick}>Тёмная</button>
      </div>
      <Navigation
        handleMenuClick={handleMenuClick}
        onUpdateSavedFilms={onUpdateSavedFilms}
        loggedIn={loggedIn}
      />
    </header>
  );
};

export default Header;
