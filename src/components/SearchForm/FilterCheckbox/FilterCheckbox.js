import React from 'react';
import { Route } from 'react-router-dom';
import { useCallback } from 'react';

export default function FilterCheckbox({
  handleTumblerAllSearch,
  handleTumblerShortsSearch,
}) {
  // ручка тумблера с логикой и сохранением стейта в локалсторидж /movies
  const [shortsAllFilter, setShortsAllFilter] = React.useState(
    JSON.parse(localStorage.getItem('shortsIsOnAll') || false)
  );
  localStorage.setItem('shortsIsOnAll', shortsAllFilter);

  const handleAllShortsClick = () => {
    setShortsAllFilter(!shortsAllFilter);
  }; // отправляем запрос на поиск в /movies после нажатия тумблера

  // подписываемся на изменение стейта с игнорированием выполнения при рендеринге
  const didMount = React.useRef(false);
  React.useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    handleTumblerAllSearch();
  }, [shortsAllFilter]);

  // ручка тумблера с логикой и сохранением стейта в локалсторидж страницы /saved-movies
  const [shortsMoviesFilter, setShortsMoviesFilter] = React.useState(
    JSON.parse(localStorage.getItem('shortsMoviesFilter') || false)
  );
  localStorage.setItem('shortsMoviesFilter', shortsMoviesFilter);

  const handleShortsMoviesClick = () => {
    setShortsMoviesFilter(!shortsMoviesFilter);
  };
  React.useEffect(() => {
    if (!didMount.current) {
      didMount.current = true;
      return;
    }
    handleTumblerShortsSearch();
  }, [shortsMoviesFilter]);

  return (
    <>
      <Route path='/movies'>
        <div className='filter'>
          <label className='checkbox-ios'>
            <input
              type='checkbox'
              onChange={handleAllShortsClick}
              defaultChecked={shortsAllFilter}
            />
            <span className='checkbox-ios-switch'></span>
          </label>
          <p className='filter__label'>Короткометражки</p>
        </div>
      </Route>
      <Route path='/saved-movies'>
        <div className='filter'>
          <label className='checkbox-ios'>
            <input
              type='checkbox'
              onChange={handleShortsMoviesClick}
              defaultChecked={shortsMoviesFilter}
            />
            <span className='checkbox-ios-switch'></span>
          </label>
          <p className='filter__label'>Короткометражки</p>
        </div>
      </Route>
    </>
  );
}
