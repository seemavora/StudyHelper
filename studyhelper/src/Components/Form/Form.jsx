import React from 'react';

import user from '../../static/img/form/user.png';
import pass from '../../static/img/form/key.png';

import './Form.css';

export const LoginForm = () => {
  return (
    <div className='form-form'>
      <h2>Login</h2>
      <form>
        <div className='form-item'>
          <img src={user} alt='' />
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            className='form-input'
            autocomplete='off'
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

        <div>
          <input type='submit' value='Login'></input>
        </div>
      </form>
    </div>
  );
};

export const RegistForm = () => {
  return (
    <div className='form-form'>
      <h2>Create Account</h2>
      <form>
        <div className='form-item'>
          <img src={user} alt='' />
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            className='form-input'
            autocomplete='off'
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

        <div>
          <input type='submit' value='Login'></input>
        </div>
      </form>
    </div>
  );
};
