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
import { Switch, Route, useLocation } from 'react-router-dom';

function App() {
  const [isOpenMenu, setOpenMenu] = React.useState(false);

  function handleMenuClick() {
    setOpenMenu(true);
  }
  function closeAllPopups() {
    setOpenMenu(false);
  }

  // const [isLogedIn, setLoggedIn] = React.useState(false);

  //const history = useHistory();
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
        <PopupMenu handleCloseMenu={closeAllPopups} isOpenMenu={isOpenMenu} />
      </main>
      {(currentLocation === '/' ||
        currentLocation === '/movies' ||
        currentLocation === '/saved-movies') && <Footer />}
    </div>
  );
}

export default App;
