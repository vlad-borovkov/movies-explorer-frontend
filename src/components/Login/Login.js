import React from 'react';
import EntryUserForm from '../EntryUserForm/EntryUserForm';
import { useHistory } from 'react-router-dom';
import * as auth from '../../utils/Auth.js';
import { useForm } from 'react-hook-form';

const Login = ({ isLoginOpen, setLogginStatus }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' });

  // принимаем ошибку с сервера
  const [errorMessageServer, setErrorMessageServer] = React.useState('');
  const resetErrorMessageFromServer = () => {
    setErrorMessageServer('');
  };

  // авторизация через сервер, получение jwt, редирект на защищённый роут /movies
  const handlerSubmitLogin = (data) => {
    console.log(data);
    auth
      .authorize(data)
      .then((data) => {
        if (data.message) {
          setErrorMessageServer(data.message);
        }
        return data;
      })
      .then((data) => {
        if (data) {
          localStorage.setItem('jwt', data.token);
          return data;
        }
      })
      .then((data) => {
        if (data.token) {
          setLogginStatus(); //прокидываем функцию на изменение стейта авторизации в app
        }
      })
      .then(() => history.push('/movies'))
      .catch((err) => {
        console.log(`Упс, ошибка ${err}`);
      });
  };

  let history = useHistory();

  return (
    <EntryUserForm
      name='login'
      title='Рады видеть!'
      buttonOnText='Войти'
      onSubmit={handleSubmit(handlerSubmitLogin)}
      isLoginOpen={isLoginOpen}
      isValid={isValid}
    >
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
        placeholder='Email'
        onClick={resetErrorMessageFromServer}
      />
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
        type='password'
        placeholder='Пароль'
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

export default Login;
