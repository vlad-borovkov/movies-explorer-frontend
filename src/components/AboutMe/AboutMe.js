import React from 'react';
import { portfolioData } from '../../contexts/Portfolio';
import TitleBlock from '../TitleBlock/TitleBlock';
import PortfolioLink from './PortfolioLink/PortfolioLink';
import photoStudent from './../../images/photoStudient.jpg';

export default function AboutMe({ title }) {
  return (
    <section className='about-me'>
      <TitleBlock title={title} />
      <div className='student'>
        <div className='student__about'>
          <h2 className='student__title'>Владислав</h2>
          <h3 className='student__dscrpt'>Фронтенд-разработчик, 28 лет</h3>
          <p className='student__info'>
            Я родился в России, в небольшом городе Свердловской области.
            Закончил факультет журналистики УрФУ. У меня есть жена, дочка и сын.
            Я люблю свою семью, а ещё увлекаюсь бит-боксом. Год назад стал
            кодить на курсах по веб-разработке и мне это понравилось. С 2019
            года являлся штатным сотрудником в компании «Apple». После того, как
            начались санкции и вот это вот всё, начал заниматься
            фриланс-заказами по веб-разработке, а затем ушёл с постоянной
            работы.
          </p>
          <a
            target='_blank'
            className='student__link'
            href='https://github.com/vlad-borovkov'
            rel='noreferrer'
          >
            GitHub
          </a>
        </div>
        <img
          src={photoStudent}
          className='student__image'
          alt='фото студента'
        ></img>
      </div>
      <div className='portfolio'>
        <p className='portfolio__lable'>Портфолио</p>
        <ul className='portfolio__list'>
          {portfolioData.map((item, index) => (
            <PortfolioLink key={index} name={item.project} link={item.link} />
          ))}
        </ul>
      </div>
    </section>
  );
}
