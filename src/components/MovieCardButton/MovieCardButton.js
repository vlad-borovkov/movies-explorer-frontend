import React from 'react';
import SaveButton from './../../images/saveButton.svg';
import SavedButton from './../../images/savedButton.svg';
import DeleteButton from './../../images/deleteButton.svg';
import { Route } from 'react-router-dom';

export default function MovieCardButton({
  cardItem,
  onCardSave,
  onCardDelete,
  isSavedMovies,
}) {
  // const cardSavedClassName = `card__like-button ${
  //   isSavedMovies ? 'card__like-button_active' : ''
  // }`;

  const handleSaveCard = () => {
    onCardSave(cardItem);
  };

  const handleDeleteCard = () => {
    onCardDelete(cardItem);
  };

  return (
    <>
      <Route path='/movies'>
        <button className='movie-card__save-btn'>
          <img
            className='movie-card__save-btn_save'
            src={isSavedMovies ? SavedButton : SaveButton}
            alt='сохранить фильм'
            onClick={isSavedMovies ? handleDeleteCard : handleSaveCard}
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
