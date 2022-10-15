import React from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from '../../contexts/Portfolio';
import TitleBlock from '../TitleBlock/TitleBlock';
import PortfolioLink from './PortfolioLink/PortfolioLink';
import photoStudent from './../../images/photoStudient.jpg';

export default function AboutMe({ title }) {
  return (
    <div className='about-me'>
      <TitleBlock title={title} />
      <div className='student'>
        <div className='student__about'>
          <h2 className='student__title'>Владислав</h2>
          <h3 className='student__dscrpt'>Фронтенд-разработчик, 28 лет</h3>
          <p className='student__info'>
            Я родился в маленьком городе Свердловской области, закончил
            факультет журналистики УрФУ. У меня есть жена, дочка и сын. Я люблю
            свою семью, а ещё увлекаюсь бит-боксом. Год назад стал кодить на
            курсах по веб-разработке и мне это понравилось. С 2019 года являлся
            штатным сотрудником в компании «Apple». После того, как начались
            санкции и вот это вот всё, начал заниматься фриланс-заказами по
            веб-разработке, а затем ушёл с постоянной работы.
          </p>
          <Link
            className='student__link'
            path='https://github.com/vlad-borovkov'
          >
            GitHub
          </Link>
        </div>
        <img
          src={photoStudent}
          className='student__image'
          alt='фото студента'
        ></img>
      </div>
      <div className='portfolio'>
        <p className='portfolio__lable'>Портфолио</p>
        {portfolioData.map((item, index) => (
          <PortfolioLink key={index} name={item.project} link={item.link} />
        ))}
      </div>
    </div>
  );
}
