import React from 'react';
import { LoginForm } from '../../Components/Form/Form';

import classroom from '../../static/img/login/classroom-2.jpg';

import './Login.css';

const Login = () => {
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
          <LoginForm />
        </div>
      </section>
    </div>
  );
};

export default Login;
