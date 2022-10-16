import React from 'react';
import SaveButton from './../../images/saveButton.svg';
import SavedButton from './../../images/savedButton.svg';
import DeleteButton from './../../images/deleteButton.svg';
import { Route } from 'react-router-dom';

export default function MovieCardButton() {
  const handleDeleteCard = () => {
    console.log('меня удалили');
  };

  const [isSaveClicked, setSaveClicked] = React.useState(false);
  const handleSavedCard = () => {
    setSaveClicked(!isSaveClicked);

    if (!isSaveClicked) {
      console.log('Меня сохранили');
    } else {
      console.log('Меня удалили');
    }
  };

  return (
    <>
      <Route path='/movies'>
        <button className='movie-card__save-btn'>
          <img
            className='movie-card__save-btn_save'
            src={isSaveClicked ? SavedButton : SaveButton}
            alt='сохранить фильм'
            onClick={handleSavedCard}
          ></img>
        </button>
      </Route>
      <Route path='/saved-movies'>
        <button className='movie-card__save-btn'>
          <img
            className='movie-card__save-btn_save'
            src={DeleteButton}
            alt='сохранить фильм'
            onClick={handleDeleteCard}
          ></img>
        </button>
      </Route>
    </>
  );
}
