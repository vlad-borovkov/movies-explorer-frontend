import React from 'react';

export default function TitleBlock({ title }) {
  return (
    <div className='title-block'>
      <h2 className='title-block__text'>{title}</h2>
    </div>
  );
}
