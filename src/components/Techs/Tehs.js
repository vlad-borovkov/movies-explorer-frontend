import React from 'react';
import TitleBlock from '../TitleBlock/TitleBlock';
import StackCard from './StackCard/StackCard';
import { myStack } from '../../contexts/Stack';

export default function Tehs({ title }) {
  return (
    <>
      <section className='techs'>
        <TitleBlock title={title} />
        <div className='techs__text-wrap'>
          <h2 className='section-title'>7 технологий</h2>
          <p className='section-subtitle'>
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className='my-stack'>
          {myStack.map((item, index) => (
            <StackCard key={index} stack={item} />
          ))}
        </ul>
      </section>
    </>
  );
}
