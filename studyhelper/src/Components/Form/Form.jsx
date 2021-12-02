import React from 'react';

import user from '../../static/img/form/user.png';
import pass from '../../static/img/form/key.png';
import mail from '../../static/img/form/mail.png';
import { Button } from '../Button/Button';

import './Form.css';

export const LoginForm = (props) => {
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
            onChange={props.change}
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
            onChange={props.change}
          ></input>
        </div>

        <div className='form-links'>
          <a href='/Register'>Register</a>

          <Button
            children={'Login'}
            type='submit'
            buttonSize='btn--medium'
            buttonStyle='btn--primary--solid'
            onClick={props.submit}
          />
        </div>
      </form>
    </div>
  );
};

export const RegistForm = (props) => {
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
            onChange={props.change}
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
            onChange={props.change}
          ></input>
        </div>

        <div className='form-item'>
          <img className='form-pass' src={pass} alt='' />
          <input
            type='password'
            id='passwordConfirm'
            name='passwordConfirm'
            placeholder='Re-Enter Password'
            className='form-input'
            onChange={props.change}
          ></input>
        </div>

        <div className='form-item'>
          <img className='form-mail' src={mail} alt='' />
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            className='form-input'
            onChange={props.change}
          ></input>
        </div>

        <div className='form-links'>
          <a href='/login'>Have an account?</a>
          <Button
            children={'Register'}
            type='submit'
            buttonSize='btn--medium'
            buttonStyle='btn--primary--solid'
            onClick={props.submit}
          />
        </div>
      </form>
    </div>
  );
};
