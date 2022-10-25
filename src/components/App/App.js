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
import { Route, Switch, Redirect, useLocation } from 'react-router-dom';

function App() {
  const [isOpenMenu, setOpenMenu] = React.useState(false);

  function handleMenuClick() {
    setOpenMenu(true);
  }
  function closeAllPopups() {
    setOpenMenu(false);
  }

  //стейт авторизации
  const [isLogedIn, setLoggedIn] = React.useState(localStorage.token || false);
  const setLogginStatus = (token) => {
    setLoggedIn(token);
  };
  console.log(isLogedIn);

  //получаем глобальный стейт информации пользователя и рендерим КОГДА АВТОРИЗОВАН!
  // const [currentUser, setCurrentUser] = React.useState([]);
  // React.useEffect(() => {
  //   if (loggedIn) {
  //     api
  //       .getUserValue()
  //       .then((res) => {
  //         setCurrentUser(res.user);
  //       })
  //       .catch((err) => {
  //         console.log(`Упс, ошибка ${err}`);
  //       });
  //   }
  // }, [loggedIn]);
  // //получаем массив начальных карточек и рендерим
  // const [cards, setPlaceCards] = React.useState([]);
  // React.useEffect(() => {
  //   if (loggedIn) {
  //     api
  //       .getCardsFromServer()
  //       .then((res) => {
  //         //console.log(res.cards);
  //         setPlaceCards(res.cards);
  //       })
  //       .catch((err) => {
  //         console.log(`Упс, ошибка ${err}`);
  //       });
  //   }
  // }, [loggedIn]);

  // const history = useHistory();
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <div className='page'>
      {(currentLocation === '/' ||
        currentLocation === '/movies' ||
        currentLocation === '/saved-movies' ||
        currentLocation === '/profile') && (
        <Header handleMenuClick={handleMenuClick} />
      )}
      <main>
        <Switch>
          <Route>
            <Main exact path='/' />
          </Route>
          {/* <ProtectedRoute
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
          /> */}
          <Route path='/sign-up'>
            <Register />
          </Route>
          <Route path='/sign-in'>
            <Login setLogginStatus={setLogginStatus} />
          </Route>
          <Route path='*'>
            <PageNotFound />
          </Route>
          {/* <Route>
            {isLogedIn ? <Redirect to='/movies' /> : <Redirect to='/sign-in' />}
          </Route> */}
        </Switch>
        <PopupMenu handleCloseMenu={closeAllPopups} isOpenMenu={isOpenMenu} />
      </main>
      {(currentLocation === '/' ||
        currentLocation === '/movies' ||
        currentLocation === '/saved-movies') && <Footer />}
    </div>
  );
}

export default App;
