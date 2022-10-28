class SearchQuery {
  constructor({ allMoviesArray, handlerSubmitForm, queryValue, tumblerValue }) {
    this._allMoviesArray = allMoviesArray;
    this._handlerSubmitForm = handlerSubmitForm;
    this._queryValue = queryValue;
    this._tumblerValue = tumblerValue;
  }

  filterByQuery(allMoviesArray, queryValue, tumblerValue) {
    this._allMoviesArray = allMoviesArray;
    this._queryValue = queryValue;
    this._tumblerValue = tumblerValue;

    if (this._tumblerValue === true) {
      return this._allMoviesArray.filter(
        (item) =>
          (item.nameRU.toLowerCase().includes(queryValue.toLowerCase()) &&
            item.duration <= 40) ||
          (item.nameEN.toLowerCase().includes(queryValue.toLowerCase()) &&
            item.duration <= 40)
      );
    } else {
      return this._allMoviesArray.filter(
        (item) =>
          item.nameRU.toLowerCase().includes(queryValue.toLowerCase()) ||
          item.nameEN.toLowerCase().includes(queryValue.toLowerCase())
      );
    }
  }

  filterByScreenSize(filteredMoviesArray) {
    this.filteredMoviesArray = filteredMoviesArray;
    let cardQuantity = 0;

    if (window.innerWidth >= 1280) {
      cardQuantity = 13;
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
      cardQuantity = 9;
    } else if (window.innerWidth >= 320 && window.innerWidth <= 767) {
      cardQuantity = 6;
    }
    return filteredMoviesArray.slice(0, cardQuantity);
  }
}

export const searchQuery = new SearchQuery({});

// после ввода запроса и сабмита инпута поиска происходит 1.валидация, 2.запрос на ВСЕ фильмы и сохранение в локал сторидж, 3. фильтрация в зависимости от поиска, 4. передать в метод фильтрации отфильтровать filter() в зависимости от запроса(где принять и куда передать) 5. вернуть результаты в зависимости от ширины экрана 5. вывод карточек.  6. при клике на ешё показать еще, если нет еще фильмов, то не показывать. сделать класс с промисами?.
// return this._allMoviesArray.filter(
//   (item) =>
//     (item.nameRU.toLowerCase().includes(queryValue.toLowerCase()) &&
//       item.duration <= durationValue) ||
//     (item.nameEN.toLowerCase().includes(queryValue.toLowerCase()) &&
//       item.duration <= durationValue)
