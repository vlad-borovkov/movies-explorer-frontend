import React from 'react';

export default function FilterCheckbox() {
  return (
    <>
      <div className='filter'>
        <label className='checkbox-ios'>
          <input type='checkbox' />
          <span className='checkbox-ios-switch'></span>
        </label>
        <p className='filter__label'>Короткометражки</p>
      </div>
    </>
  );
}
