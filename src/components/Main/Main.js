import React from 'react';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Tehs from '../Techs/Tehs';
import AboutMe from '../AboutMe/AboutMe';

const Main = (props) => {
  return (
    <>
      <Promo />
      <AboutProject title='О проекте' />
      <Tehs title='Технологии' />
      <AboutMe title='Студент' />
    </>
  );
};

export default Main;
