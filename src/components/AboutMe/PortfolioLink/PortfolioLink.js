import React from 'react';
import { Link } from 'react-router-dom';
import linkPicture from './../../../images/linkPicture.svg';

export default function PortfolioLink({ name, link }) {
  return (
    <li className='portfolio-link__wrap'>
      <a
        target='_blank'
        rel='noreferrer'
        href={link}
        className='portfolio-link__path'
      >
        {name}
        <img
          src={linkPicture}
          className='portfolio-link__image'
          alt='ссылка'
        ></img>
      </a>
    </li>
  );
}
