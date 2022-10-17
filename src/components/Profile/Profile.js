import React from 'react';

export default function Profile() {
  const [isSuccessUpd, setSuccessUpd] = React.useState(false); // доделать логику

  const [isEditButtonPush, setEditButtonPush] = React.useState(false);
  const handlerEditProfile = (e) => {
    e.preventDefault();
    setEditButtonPush(true);
  };

  const handlerSaveProfile = (e) => {
    e.preventDefault();
    setEditButtonPush(false);
  };

  return (
    <section className='profile-section'>
      <div className='profile'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form
          className='profile__form'
          onSubmit={handlerEditProfile || handlerSaveProfile}
        >
          <div className='profile__form-name'>
            <p className='profile__form-name-label'>Имя</p>
            <input
              className='profile__form-name-input'
              type='text'
              value='Виталий'
            />
          </div>
          <div className='profile__form-email'>
            <p className='profile__form-email-label'>E-mail</p>
            <input
              className='profile__form-email-input'
              type='email'
              value='pochta@mail.ru'
            />
          </div>

          <div className='profile__control'>
            {isSuccessUpd ? (
              <p className='profile__error-message'>
                При обновлении профиля произошла ошибка.
              </p>
            ) : (
              ''
            )}
            {isEditButtonPush ? (
              <button
                className={`profile__control-save ${
                  isSuccessUpd ? 'profile__control-save_error' : ''
                }`}
                onClick={handlerSaveProfile}
              >
                Сохранить
              </button>
            ) : (
              <>
                <button
                  className='profile__control-edit'
                  onClick={handlerEditProfile}
                >
                  Редактировать
                </button>
                <button className='profile__control-exit'>
                  Выйти из аккаунта
                </button>
              </>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
