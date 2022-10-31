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
    const requestUrl = this._domain;
    return fetch(`${requestUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registerValue),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => data);
  }

  authorize(authValue) {
    const requestUrl = this._domain;

    return fetch(`${requestUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(authValue),
    })
      .then((response) => response.json())
      .catch((err) => {
        console.log(`Упс, ошибка ${err}`);
      });
  }

  getUserValue() {
    const infoUsersDefault = '/users/me';
    return this.makeRequest(infoUsersDefault);
  }

  getCardsFromServer() {
    const cardsFromServer = '/movies';
    return this.makeRequest(cardsFromServer);
  }

  changeUserInfo(userValue) {
    const requestUrl = '/users/me';
    return this.makeRequest(requestUrl, 'PATCH', userValue);
  }

  handlerAddMovies(cardsData) {
    const requestUrl = '/movies';
    return this.makeRequest(requestUrl, 'POST', cardsData);
  }

  deleteCard(cardId) {
    const requestUrl = `/movies/${cardId}`;
    return this.makeRequest(requestUrl, 'DELETE');
  }
}

export const mainApi = new MainApi({
  domain: 'https://api.mymovie.nomorepartiesxyz.ru', // "api.mymovie.nomorepartiesxyz.ru"
});

//export const BASE_URL = 'https://api.mymovie.nomorepartiesxyz.ru'; // "api.mymovie.nomorepartiesxyz.ru"  158.160.13.244
