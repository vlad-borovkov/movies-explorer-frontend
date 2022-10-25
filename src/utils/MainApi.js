class MainApi {
  constructor({ domain }) {
    this._domain = domain;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status} - ${res.message}`);
  }

  makeRequest(url, method = 'GET', body) {
    const requestUrl = this._domain + url;
    const jwt = localStorage.getItem('jwt');

    return fetch(requestUrl, {
      method: method,
      headers: {
        Authorization: `Bearer ${jwt}`, // прокидываем в каждый запрос текущий jwt
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => {
      return response.json();
    });
  }

  register(registerValue) {
    const registerRoute = '/signup';
    return this.makeRequest(registerRoute, 'POST', registerValue);
  }

  authorize(authValue) {
    const authRoute = '/signin';
    return this.makeRequest(authRoute, 'POST', authValue);
  }

  getUserValue() {
    const infoUsersDefault = '/users/me';
    return this.makeRequest(infoUsersDefault);
  }

  getCardsFromServer() {
    const cardsFromServer = '/cards';
    return this.makeRequest(cardsFromServer);
  }

  changeUserInfo(userValue) {
    const requestUrl = '/users/me';
    return this.makeRequest(requestUrl, 'PATCH', userValue);
  }

  changeAvatar(avatarUrl) {
    const requestUrl = '/users/me/avatar';
    return this.makeRequest(requestUrl, 'PATCH', avatarUrl);
  }

  handlerAddCard(cardsData) {
    const requestUrl = '/cards';
    return this.makeRequest(requestUrl, 'POST', cardsData);
  }

  changeLikeCardStatus(cardId, islikedState) {
    const requestUrl = `/cards/${cardId}/likes`;
    return this.makeRequest(requestUrl, `${islikedState ? 'PUT' : 'DELETE'}`);
  }

  deleteLikeOnCard(cardId) {
    const requestUrl = `/cards/${cardId}/likes`;
    return this.makeRequest(requestUrl, 'DELETE');
  }

  addLikeOnCard(cardId) {
    const requestUrl = `/cards/${cardId}/likes`;
    return this.makeRequest(requestUrl, 'PUT');
  }

  deleteCard(cardId) {
    const requestUrl = `/cards/${cardId}`;
    return this.makeRequest(requestUrl, 'DELETE');
  }
}

export const mainApi = new MainApi({
  domain: 'http://api.mymovie.nomorepartiesxyz.ru', // "api.mymovie.nomorepartiesxyz.ru"
});

export const BASE_URL = 'http://api.mymovie.nomorepartiesxyz.ru'; // "api.mymovie.nomorepartiesxyz.ru"  158.160.13.244
