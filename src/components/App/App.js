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
import { moviesApi } from '../../utils/MoviesApi';
import { Route, Switch, useLocation } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

function App() {
  const [isOpenMenu, setOpenMenu] = React.useState(false);

  function handleMenuClick() {
    setOpenMenu(true);
  }
  function closeAllPopups() {
    setOpenMenu(false);
  }

  //стейт авторизации
  const [isLogedIn, setLoggedIn] = React.useState(localStorage.jwt || false);
  const setLogginStatus = (token) => {
    setLoggedIn(token);
  };

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
          console.log(`Упс, ошибка ${err}`);
        });
    }
  }, [isLogedIn]);

  // const history = useHistory();
  const location = useLocation();
  const currentLocation = location.pathname;
  return (
    <div className='page'>
      <CurrentUserContext.Provider value={currentUser}>
        {(currentLocation === '/' ||
          currentLocation === '/movies' ||
          currentLocation === '/saved-movies' ||
          currentLocation === '/profile') && (
          <Header handleMenuClick={handleMenuClick} />
        )}
        <main>
          <Switch>
            <Route exact path='/'>
              <Main />
            </Route>
            <Route path='/sign-up'>
              <Register />
            </Route>
            <Route path='/sign-in'>
              <Login setLogginStatus={setLogginStatus} />
            </Route>

            <ProtectedRoute
              path='/profile'
              component={Profile}
              loggedIn={isLogedIn}
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
            />

            <Route path='*'>
              <PageNotFound />
            </Route>
            <Route>
              {isLogedIn ? (
                <Redirect to='/movies' />
              ) : (
                <Redirect to='/sign-in' />
              )}
            </Route>
          </Switch>
          <PopupMenu handleCloseMenu={closeAllPopups} isOpenMenu={isOpenMenu} />
        </main>
        {(currentLocation === '/' ||
          currentLocation === '/movies' ||
          currentLocation === '/saved-movies') && <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
