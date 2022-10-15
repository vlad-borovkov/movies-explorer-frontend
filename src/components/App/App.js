import React from 'react';
// import { Route, Switch, Redirect, useHistory } from 'react-router-dom';

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
import { Switch, Route, useHistory } from 'react-router-dom';

function App() {
  const [isOpenMenu, setOpenMenu] = React.useState(false);

  function handleMenuClick() {
    setOpenMenu(true);
  }
  function closeAllPopups() {
    setOpenMenu(false);
  }

  const [isLogedIn, setLoggedIn] = React.useState(true); // меняем в ручную, чтобы посмотреть вёрстку

  const history = useHistory();
  const currentPath = history.location.pathname;

  return (
    <div className='page'>
      {isLogedIn && <Header handleMenuClick={handleMenuClick} />}
      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/movies'>
          <Movies />
        </Route>
        <Route path='/saved-movies'>
          <Movies />
        </Route>

        <Route path='/sign-up'>
          <Register />
        </Route>
        <Route path='/sign-in'>
          <Login />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
        <Route>
          {/* {loggedIn ? <Redirect to='/' /> : <Redirect to='/sign-in' />} */}
        </Route>
      </Switch>
      {(currentPath === '/' ||
        currentPath === '/movies' ||
        currentPath === '/saved-movies') && <Footer />}
      <PopupMenu handleCloseMenu={closeAllPopups} isOpenMenu={isOpenMenu} />
    </div>
  );
}

export default App;
