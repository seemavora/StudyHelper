import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import { LoginForm } from '../../Components/Form/Form';

import logo from '../../static/img/logo.png';
import classroom from '../../static/img/login/classroom-2.jpg';

import './Login.css';

const Login = () => {
  return (
    <div>
      <section className='login-showcase'>
        <header>
          {/* <img className='login-logo' src={logo} alt='' /> */}
          <div className='login-toggle'></div>
          <NavBar />
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
