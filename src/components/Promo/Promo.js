import React from 'react';
import logoPath from './../../images/logoPromo.svg';
import logoDarkPath from './../../images/logoPromo_dark.svg';
import { ThemeType } from '../../contexts/Theme.js';

import { useEffect } from 'react';

const Promo = ({}) => {
  const currentTheme = React.useContext(ThemeType);

  useEffect(() => {
    console.log(currentTheme);
  }, [currentTheme]);

  return (
    <section className='promo'>
      <h1 className='promo__title'>
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img
        className='promo__logo'
        src={currentTheme === 'light' ? logoPath : logoDarkPath}
        alt='логотип промо'
      ></img>
    </section>
  );
};

export default Promo;
