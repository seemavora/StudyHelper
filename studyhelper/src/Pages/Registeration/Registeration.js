import React, { useState } from "react";

import { RegistForm } from '../../Components/Form/Form';

import classroom from '../../static/img/login/classroom-2.jpg';

export default function Registeration() {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const submitHandler = async (e) => {
        e.preventDefault();

        const response = await fetch('/user/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset-UTF-8'
            },
            body: JSON.stringify(form)
        })

        if (response.status === 200) {
            localStorage.setItem('ID', '248dndgkxq827yvm219p0208nbm2')
            window.location = '/Collection'
        }
    }

    const changeHandler = (e) => {
        const oldState = form;
        setForm({ ...oldState, [e.target.name]: e.target.value })
    }

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
                        <RegistForm submit={submitHandler} change={changeHandler} />
                    </div>
                </section>
            </div>
        </>
    );
}