import React from 'react';
import EntryUserForm from '../EntryUserForm/EntryUserForm';

const Register = (props) => {
  const [nameInput, setNameInput] = React.useState('');
  function handleNameChange(e) {
    setNameInput(e.target.value);
  }
  const [emailInput, setEmailInput] = React.useState('');
  function handleEmailChange(e) {
    setEmailInput(e.target.value);
  }
  const [passwordInput, setPasswordInput] = React.useState('');
  function handlePasswordChange(e) {
    setPasswordInput(e.target.value);
  }

  function handlerSubmitRegisrtation(e) {
    e.preventDefault();

    props.onUpdater({
      name: nameInput,
      email: emailInput,
      password: passwordInput,
    });
  }

  return (
    <EntryUserForm
      name='register'
      title='Добро пожаловать!'
      buttonOnText='Зарегистрироваться'
      onSubmit={handlerSubmitRegisrtation}
      isOpen={props.isOpen}
    >
      <label className='entry-user__container-form-input-label'>Имя</label>
      <input
        onChange={handleNameChange}
        value={nameInput || ''}
        id='name-input'
        className='entry-user__container-form-input_name'
        type='text'
        name='name'
        placeholder='Введите ваше имя'
        minLength='3'
        maxLength='40'
        required
      />
      <label className='entry-user__container-form-input-label'>E-mail</label>
      <input
        onChange={handleEmailChange}
        value={emailInput || ''}
        id='email-input'
        className='entry-user__container-form-input_email'
        type='email'
        name='email'
        placeholder='Email'
        minLength='3'
        maxLength='40'
        required
      />
      <label className='entry-user__container-form-input-label'>Пароль</label>
      <input
        onChange={handlePasswordChange}
        value={passwordInput || ''}
        id='password-input'
        className='entry-user__container-form-input_password'
        type='password'
        name='password'
        placeholder='Пароль'
        minLength='6'
        maxLength='50'
        required
      />
      <span className='entry-user__container-form-error'>
        Что-то пошло не так...
      </span>
    </EntryUserForm>
  );
};

export default Register;
