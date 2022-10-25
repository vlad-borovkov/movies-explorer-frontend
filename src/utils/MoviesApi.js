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

// Такие данные карточки мы получаем в ответе BeatfilmMoviesApi:
// название фильма на русском языке находится в свойстве nameRU;
// изображение — в image.url;
// Изображения приходят с сервера с относительным, а не абсолютным URL. Не забудьте добавить к ним URL сервера — https://api.nomoreparties.co/.
// ссылка на трейлер — в trailerLink;
// длительность короткометражного фильма рассчитывается на основе поля duration.
