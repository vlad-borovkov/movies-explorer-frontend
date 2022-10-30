class MoviesApi {
  constructor({ domain }) {
    this._domain = domain;
  }

  makeRequest(url, method = 'GET', body) {
    const requestUrl = this._domain + url;

    return fetch(requestUrl, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    }).then((response) => {
      return response.json();
    });
  }

  getMoviesFromServer() {
    const moviesFromServer = '/beatfilm-movies';
    return this.makeRequest(moviesFromServer);
  }
}

export const moviesApi = new MoviesApi({
  domain: 'https://api.nomoreparties.co/', //
});

export const BASE_URL = 'http://api.mymovie.nomorepartiesxyz.ru'; // "api.mymovie.nomorepartiesxyz.ru"  158.160.13.244
