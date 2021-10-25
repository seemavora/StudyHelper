import React from 'react';

import user from '../../static/img/form/user.png';
import pass from '../../static/img/form/key.png';
import { Button } from '../Button/Button';

import './Form.css';

export const LoginForm = () => {
  return (
    <div className='form-form'>
      <h2>Login</h2>
      <form autoComplete='off'>
        <div className='form-item'>
          <img src={user} alt='' />
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            className='form-input'
          ></input>
        </div>

        <div className='form-item'>
          <img className='form-pass' src={pass} alt='' />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            className='form-input'
          ></input>
        </div>

        <div className='form-links'>
          <a href='/register'>Register</a>

          <Button
            children={'Login'}
            type='submit'
            buttonSize='btn--medium'
            buttonStyle='btn--primary--solid'
          />
        </div>
      </form>
    </div>
  );
};

export const RegistForm = () => {
  return (
    <div className='form-form'>
      <h2>Create Account</h2>
      <form autoComplete='off'>
        <div className='form-item'>
          <img src={user} alt='' />
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            className='form-input'
          ></input>
        </div>

        <div className='form-item'>
          <img className='form-pass' src={pass} alt='' />
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            className='form-input'
          ></input>
        </div>

        <div className='form-item'>
          <img className='form-pass' src={pass} alt='' />
          <input
            type='password'
            id='password-retype'
            name='password-retype'
            placeholder='Re-Enter Password'
            className='form-input'
          ></input>
        </div>

        <div className='form-item'>
          <img className='form-pass' src={pass} alt='' />
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            className='form-input'
          ></input>
        </div>

        <div className='form-links'>
          <a href='/login'>Have an account?</a>
          <Button
            children={'Register'}
            type='submit'
            buttonSize='btn--medium'
            buttonStyle='btn--primary--solid'
          />
        </div>
      </form>
    </div>
  );
};
