import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const PageNotFound = ({}) => {
  const history = useHistory();
  const back = () => {
    history.goBack();
  };
  return (
    <section className='not-found-section'>
      <p className='not-found-section__number'>404</p>
      <p className='not-found-section__message'>Страница не найдена</p>
      <Link className='not-found-section__link' onClick={back}>
        Назад
      </Link>
    </section>
  );
};

export default PageNotFound;
