import React, { useState, useEffect } from "react";

import { RegistForm } from '../../Components/Form/Form';

import classroom from '../../static/img/login/classroom-2.jpg';


export default function Registeration() {
  // const [currentTime, setCurrentTime] = useState(0);

  // useEffect(() => {
  //     fetch('/time').then(res => res.json()).then(data => {
  //         setCurrentTime(data.time);
  //     });
  // }, []);
  return (
    <>
      <div>
        <section className='login-showcase'>
          <header>
            <div className='login-toggle'></div>
          </header>

          <div className='login-bg-helper'>
            <img className='login-background' src={classroom} alt='classroom-2' />
          </div>

          <div className='login-overlay'>
            <RegistForm />
          </div>
        </section>
      </div>
    </>
  );
}

const Registeration2 = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);



  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(form)
    // axios.post("http://localhost:5000/user/signup/", form, {
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   }
    // })
    //   .then(response => {
    //     console.log(response)
    //   }).catch(error => {
    //     console.log(error)
    //   })
    const response = await fetch('/user/signup/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset-UTF-8'
      },
      body: JSON.stringify(form)
    })

    console.log(response);
  }

  const changeHandler = (e) => {
    const oldState = form;
    setForm({ ...oldState, [e.target.name]: e.target.value })
  }

  return (
    <div className="shopping-list">
      <h1>Registeration</h1>
      <p>The current time is {currentTime}.</p>

      <form onSubmit={() => { }} autoComplete="off">
        <div>
          <input type="text" name="name" value={form.name} onChange={changeHandler} />
        </div>
        <div>
          <input type="text" name="email" value={form.email} onChange={changeHandler} />
        </div>
        <div>
          <input type="text" name="password" value={form.password} onChange={changeHandler} />
        </div>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}