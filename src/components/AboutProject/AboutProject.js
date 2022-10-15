import React from 'react';
import TitleBlock from '../TitleBlock/TitleBlock';

const AboutProject = ({ title }) => {
  return (
    <div className='about'>
      <TitleBlock title={title} />
      <div className='grid-table'>
        <p className='grid-table__title'>Дипломный проект включал 5 этапов</p>
        <p className='grid-table__title'>На выполнение диплома ушло 5 недель</p>
        <p className='grid-table__ph'>
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <p className='grid-table__ph'>
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
    </div>
  );
};

export default AboutProject;
