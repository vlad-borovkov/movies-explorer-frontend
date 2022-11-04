import React from 'react';
import EntryUserForm from '../EntryUserForm/EntryUserForm';
import { useHistory } from 'react-router-dom';
import { mainApi } from '../../utils/MainApi';
import { useForm } from 'react-hook-form';

const Register = ({ setLogginStatus }) => {
  const [errorMessageServer, setErrorMessageServer] = React.useState('');
  const resetErrorMessageFromServer = () => {
    setErrorMessageServer('');
  };
  //отправка в api на регистрацию

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({ mode: 'onChange' });

  const handlerSubmitRegister = (data) => {
    const password = data.password;
    mainApi
      .register(data)
      .then((data) => {
        if (data.message) {
          setErrorMessageServer(data.message);
          reset();
        }
        return data;
      })
      .then((data) => {
        if (data._id) {
          const authValue = { email: data.email, password };
          mainApi
            .authorize(authValue)
            .then((data) => {
              if (data.message) {
                setErrorMessageServer(data.message);
              }
              return data;
            })
            .then((data) => {
              if (data.token) {
                reset();
                localStorage.setItem('jwt', data.token);
                setLogginStatus(); //прокидываем функцию на изменение стейта авторизации в app
                history.push('/movies');
              }
            })
            .catch((err) => {
              console.log(`Упс, ошибка ${err}`);
            });
        }
      })
      .catch((err) => {
        console.log(`Упс, ошибка ${err}`);
      });
  };
  const history = useHistory();

  return (
    <EntryUserForm
      name='register'
      title='Добро пожаловать!'
      buttonOnText='Зарегистрироваться'
      onSubmit={handleSubmit(handlerSubmitRegister)}
      isValid={isValid}
    >
      <label className='entry-user__container-form-input-label'>Имя</label>
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
        className='entry-user__container-form-input_name'
        placeholder='Введите ваше имя'
        onClick={resetErrorMessageFromServer}
      />
      <label className='entry-user__container-form-input-label'>E-mail</label>
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
        className='entry-user__container-form-input_email'
        placeholder='Введите Email'
        onClick={resetErrorMessageFromServer}
      />
      <label className='entry-user__container-form-input-label'>Пароль</label>
      <input
        {...register('password', {
          required: 'Пароль обязателен',
          minLength: {
            value: 6,
            message: 'Пароль должен быть от 6 символов',
          },
          maxLength: {
            value: 30,
            message: 'Пароль должен быть до 30 символов',
          },
        })}
        className='entry-user__container-form-input_password'
        placeholder='Пароль'
        type='password'
        onClick={resetErrorMessageFromServer}
      />
      <span className='entry-user__container-form-error'>
        {errors?.name?.message ||
          errors?.email?.message ||
          errors?.password?.message ||
          errorMessageServer}
      </span>
    </EntryUserForm>
  );
};

export default Register;
