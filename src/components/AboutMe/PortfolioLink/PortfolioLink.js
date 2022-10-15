import React from 'react';
import { Link } from 'react-router-dom';
import linkPicture from './../../../images/linkPicture.svg';

export default function PortfolioLink({ name, link }) {
  return (
    <div className='portfolio-link__wrap'>
      <Link path={link} className='portfolio-link__path'>
        {name}
      </Link>
      <img
        src={linkPicture}
        className='portfolio-link__image'
        alt='ссылка'
      ></img>
    </div>
  );
}
