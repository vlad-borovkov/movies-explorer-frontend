class SearchQuery {
  constructor({
    allMovies,
    handlerSubmitForm,
    isValidQuery,
    queryValue,
    tumblerValue,
  }) {
    this.allMovies = allMovies;
    this.handlerSubmitForm = handlerSubmitForm;
    this.isValidQuery = isValidQuery;
    this.queryValue = queryValue;
    this.tumblerValue = tumblerValue;
  }
}

export const searchQuery = new SearchQuery({});

// после ввода запроса и сабмита инпута поиска происходит 1.валидация, 2.запрос на ВСЕ фильмы и сохранение в локал сторидж, 3. фильтрация в зависимости от поиска, 4. передать в метод фильтрации отфильтровать filter() в зависимости от запроса(где принять и куда передать) 5. вернуть результаты в зависимости от ширины экрана 5. вывод карточек.  6. при клике на ешё показать еще, если нет еще фильмов, то не показывать. сделать класс с промисами?.
