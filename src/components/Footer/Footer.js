import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export default function Footer() {
  const history = useHistory();
  const currentPath = history.location.pathname;

  return (
    <div
      className='footer'
      // ${
      //   currentPath === '/profile' ||
      //   currentPath === '/sign-up' ||
      //   currentPath === '/sign-in'
      //     ? 'footer_off'
      //     : ''
      // }`}
    >
      <div className='footer__about'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </div>
      <div className='footer__links-wrap'>
        <p className='footer__copyright'>&copy; 2022 by Vlad Borovkov</p>
        <div className='footer__links-container'>
          <Link className='footer__link' path='/#'>
            Яндекс.Практикум
          </Link>
          <Link className='footer__link' path='/#'>
            GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
