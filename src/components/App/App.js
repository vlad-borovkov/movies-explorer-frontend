import React from 'react';
import './../../index.css';
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Movies from '../Movies/Movies';
import PopupMenu from '../PopupMenu/PopupMenu';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute';
import { mainApi } from '../../utils/MainApi.js';
import { Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';
import SuccessRegistrationPopup from '../InfoToolTip/SuccessRegistrationPopup.js';
import FailRegistrationPopup from '../InfoToolTip/FailRegistrationPopup.js';

function App() {
  const [isOpenMenu, setOpenMenu] = React.useState(false);

  function handleMenuClick() {
    setOpenMenu(true);
  }

  // popups registration allerts
  const [isSuccessRegistrationPopupOpen, setSuccessRegistrationPopupOpen] =
    React.useState(false);
  const pushSuccessRegistration = () => {
    setSuccessRegistrationPopupOpen(!isSuccessRegistrationPopupOpen);
  };
  const [isFailRegistrationPopupOpen, setFailRegistrationPopupOpen] =
    React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const pushFailRegistration = (errorMessage) => {
    setFailRegistrationPopupOpen(!isFailRegistrationPopupOpen);
    setErrorMessage(errorMessage);
  };

  function closeAllPopups() {
    setOpenMenu(false);
    setFailRegistrationPopupOpen(false);
    setSuccessRegistrationPopupOpen(false);
  }

  //стейт авторизации
  const [isLogedIn, setLoggedIn] = React.useState(localStorage.jwt || false);
  const setLogginStatus = (value) => {
    setLoggedIn(value);
  };

  // состояние обновления профиля
  const [isProfileUpdate, setIsProfileUpdate] = React.useState(false);
  const onUpdateProfile = () => {
    setIsProfileUpdate(!isProfileUpdate);
  };
  const history = useHistory();
  //получаем глобальный стейт информации пользователя и передаём в контекст после авторизации.
  const [currentUser, setCurrentUser] = React.useState({});
  React.useEffect(() => {
    if (isLogedIn) {
      mainApi
        .getUserValue()
        .then((res) => {
          setCurrentUser(res);
        })
        .catch((err) => {
          if (err.status === 401) {
            setLoggedIn(false);
            localStorage.clear();
            history.push('/');
            return;
          }
          console.log(`Упс, ошибка ${err}`);
        });
    }
  }, [isLogedIn, isProfileUpdate]);

  const [isSavedMoviesUpdate, setIsSavedMoviesUpdate] = React.useState(false);
  const onUpdateSavedFilms = () => {
    setIsSavedMoviesUpdate(!isSavedMoviesUpdate);
  };

  const location = useLocation();
  const currentLocation = location.pathname;
  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        {(currentLocation === '/' ||
          currentLocation === '/movies' ||
          currentLocation === '/saved-movies' ||
          currentLocation === '/profile') && (
          <Header
            handleMenuClick={handleMenuClick}
            onUpdateSavedFilms={() => onUpdateSavedFilms()}
            loggedIn={isLogedIn}
          />
        )}
        <main>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>

            <Route path='/sign-up'>
              {isLogedIn && <Redirect to='/movies' />}
              <Register setLogginStatus={() => setLogginStatus(true)} />
            </Route>
            <Route path='/sign-in'>
              {isLogedIn && <Redirect to='/movies' />}
              <Login setLogginStatus={() => setLogginStatus(true)} />
            </Route>

            <ProtectedRoute
              path='/profile'
              component={Profile}
              loggedIn={isLogedIn}
              onUpdateProfile={() => onUpdateProfile()}
              onLogOutProfile={() => setLogginStatus(false)}
              pushSuccessRegistration={pushSuccessRegistration}
              pushFailRegistration={pushFailRegistration}
            />

            <ProtectedRoute
              path='/movies'
              component={Movies}
              loggedIn={isLogedIn}
            />

            <ProtectedRoute
              path='/saved-movies'
              component={Movies}
              loggedIn={isLogedIn}
              onUpdateSavedFilms={isSavedMoviesUpdate}
            />

            <Route path='*'>
              <PageNotFound />
            </Route>
            <Route>
              {isLogedIn ? <Redirect to='/movies' /> : <Redirect to='/' />}
            </Route>
          </Switch>
          <PopupMenu handleCloseMenu={closeAllPopups} isOpenMenu={isOpenMenu} />

          <FailRegistrationPopup
            isOpen={isFailRegistrationPopupOpen}
            onClose={closeAllPopups}
            type={'failUpdate'}
            message={errorMessage}
          />

          <SuccessRegistrationPopup
            isOpen={isSuccessRegistrationPopupOpen}
            onClose={closeAllPopups}
            type={'succsesUpdate'}
            message={'Данные успешно обновлены'}
          />
        </main>
        {(currentLocation === '/' ||
          currentLocation === '/movies' ||
          currentLocation === '/saved-movies') && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
