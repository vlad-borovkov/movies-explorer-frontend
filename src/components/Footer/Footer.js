import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__about'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className='footer__links-wrap'>
        <p className='footer__copyright'>&copy; 2022 by Vlad Borovkov</p>
        <div className='footer__links-container'>
          <a
            target='_blank'
            rel='noreferrer'
            className='footer__link'
            href='https://practicum.yandex.ru/'
          >
            Яндекс.Практикум
          </a>
          <a
            className='footer__link'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/vlad-borovkov'
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
