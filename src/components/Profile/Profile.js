import React from 'react';
import { CurrentUserContext } from './../../contexts/CurrentUserContext';
import { useForm } from 'react-hook-form';
import { mainApi } from '../../utils/MainApi';
import { useHistory } from 'react-router-dom';

export default function Profile({
  onUpdateProfile,
  onLogOutProfile,
  pushSuccessRegistration,
  pushFailRegistration,
}) {
  //подписка на контекст текущего пользователя
  const currentUser = React.useContext(CurrentUserContext);
  const history = useHistory();

  const [isSuccessUpd, setSuccessUpd] = React.useState(
    JSON.parse(localStorage.getItem('updStatus') || false)
  );

  const [isEditButtonPush, setEditButtonPush] = React.useState(false);
  const handlerEditProfile = () => {
    setEditButtonPush(!isEditButtonPush);
  };

  const [errorMessageServer, setErrorMessageServer] = React.useState('');

  const handlerLogOut = () => {
    localStorage.clear();
    onLogOutProfile();
    history.push('/');
  };

  const handleSubmitProfile = (data) => {
    if (data.name === currentUser.name && data.email === currentUser.email) {
      pushFailRegistration();
      handlerEditProfile();
      return;
    } else {
      mainApi
        .changeUserInfo(data)
        .then((data) => {
          if (data.message) {
            setErrorMessageServer(data.message);
          }
          return data;
        })
        .then((data) => {
          setSuccessUpd(localStorage.setItem('updStatus', true));
          onUpdateProfile(); // шлём сигнал для обновления контекста
          pushSuccessRegistration();
          handlerEditProfile();
        })
        .catch((err) => {
          console.log(err);
        });
      //обновить компонент, чтобы отобразить результаты
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  return (
    <section className='profile-section'>
      <div className='profile'>
        <h2 className='profile__title'>Привет, {currentUser.name}!</h2>
        <form
          id='edit-rofile'
          className='profile__form'
          onSubmit={handleSubmit(handleSubmitProfile)}
        >
          <div className='profile__form-name'>
            <p className='profile__form-name-label'>Имя</p>
            {isEditButtonPush ? (
              <input
                {...register(
                  'name',
                  {
                    required: 'Ввести имя обязательно',
                    minLength: {
                      value: 1,
                      message: 'Введите более одного символа',
                    },
                    maxLength: {
                      value: 30,
                      message: 'Введено более 30 символов',
                    },
                    pattern: {
                      value: /^[a-zа-яё\s]+$/iu,
                      message:
                        'Разрешено вводить только буквы на русском или английском языках',
                    },
                  },
                  {}
                )}
                className='profile__form-name-input'
                defaultValue={currentUser.name}
              />
            ) : (
              <p className='profile__form-name-label'>{currentUser.name}</p>
            )}
          </div>
          <div className='profile__form-email'>
            <p className='profile__form-email-label'>E-mail</p>
            {isEditButtonPush ? (
              <input
                {...register('email', {
                  required: 'Ввести E-mail обязательно',
                  minLength: {
                    value: 3,
                    message: 'Слишком короткий Email',
                  },
                  maxLength: {
                    value: 40,
                    message: 'Введено более 40 символов',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Неверный E-mail',
                  },
                })}
                className='profile__form-email-input'
                defaultValue={currentUser.email}
              />
            ) : (
              <p className='profile__form-name-label'>{currentUser.email}</p>
            )}
          </div>

          <div className='profile__control'>
            <p className='profile__error-message'>
              {errors?.name?.message ||
                errors?.email?.message ||
                errorMessageServer}
            </p>
            {isEditButtonPush ? (
              <button
                className={`profile__control-save ${
                  !isValid ? 'profile__control-save_error' : ''
                }`}
                type='submit'
                form='edit-rofile'
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
                <button
                  className='profile__control-exit'
                  onClick={handlerLogOut}
                >
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
