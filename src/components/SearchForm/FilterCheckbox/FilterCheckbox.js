import React from 'react';

export default function FilterCheckbox(props) {
  // ручка тумблера с логикой и сохранением стейта в локалсторидж
  const [shortsFilter, setShortsFilter] = React.useState(
    JSON.parse(localStorage.getItem('shortsIsOn') || false)
  );

  const handleShortsClick = () => {
    setShortsFilter(!shortsFilter);
  };
  localStorage.setItem('shortsIsOn', shortsFilter);

  return (
    <>
      <div className='filter'>
        <label className='checkbox-ios'>
          <input
            type='checkbox'
            onChange={handleShortsClick}
            defaultChecked={shortsFilter}
          />
          <span className='checkbox-ios-switch'></span>
        </label>
        <p className='filter__label'>Короткометражки</p>
      </div>
    </>
  );
}
