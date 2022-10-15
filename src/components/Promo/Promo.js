import React from 'react';
import logoPath from './../../images/logoPromo.svg';

const Promo = ({}) => {
  return (
    <div className='promo'>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img className='promo__logo' src={logoPath} alt='логотип промо'></img>
    </div>
  );
};

export default Promo;
