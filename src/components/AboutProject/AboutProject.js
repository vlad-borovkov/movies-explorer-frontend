import React from 'react';
import TitleBlock from '../TitleBlock/TitleBlock';

const AboutProject = ({ title }) => {
  return (
    <section className='about'>
      <TitleBlock title={title} />
      <div className='grid-table'>
        <p className='grid-table__title_step'>
          Дипломный проект включал 5 этапов
        </p>
        <p className='grid-table__title_week'>
          На выполнение диплома ушло 5 недель
        </p>
        <p className='grid-table__ph_step'>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className='grid-table__ph_week'>
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>

      <div className='grid-graph'>
        <div className='grid-graph__first-num_blue'>1 неделя</div>
        <div className='grid-graph__second-num'>4 недели</div>
        <div className='grid-graph__first-legend'>Front-end</div>
        <div className='grid-graph__second-legend'>Back-end</div>
      </div>
    </section>
  );
};

export default AboutProject;
