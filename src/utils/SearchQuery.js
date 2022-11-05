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
    //console.log(this._queryValue);

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
      cardQuantity = 12;
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
      cardQuantity = 9;
    } else if (window.innerWidth >= 320 && window.innerWidth <= 767) {
      cardQuantity = 6;
    }
    return filteredMoviesArray.slice(0, cardQuantity);
  }
}

export const searchQuery = new SearchQuery({});
