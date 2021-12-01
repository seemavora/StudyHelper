import React, { useState } from 'react';
import { LoginForm } from '../../Components/Form/Form';

import classroom from '../../static/img/login/classroom-2.jpg';

import './Login.css';

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch('/user/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset-UTF-8',
      },
      body: JSON.stringify(form),
    });

    //local storage for user ID
    response.json().then((e) => {
      console.log(e.ID);
      localStorage.setItem('ID', e.ID);
      window.location = '/Collection';
    });
  };

  const changeHandler = (e) => {
    const oldState = form;
    setForm({ ...oldState, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className='login-showcase'>
        <header>
          <div className='login-toggle'></div>
        </header>

        <div className='login-bg-helper'>
          <img className='login-background' src={classroom} alt='classroom-2' />
        </div>

        <div className='login-overlay'>
          <LoginForm submit={submitHandler} change={changeHandler} />
        </div>
      </section>
    </div>
  );
};

export default Login;
