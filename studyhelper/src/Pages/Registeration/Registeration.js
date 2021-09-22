import React, { useState, useEffect } from "react";

import NavBar from '../../Components/NavBar/NavBar';
import { RegistForm } from '../../Components/Form/Form';

import logo from '../../static/img/logo.png';
import classroom from '../../static/img/login/classroom-2.jpg';


export default function Registeration() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time);
        });
    }, []);
    return (
        <>
            <div className="shopping-list">
                <h1>Registeration</h1>
                <p>The current time is {currentTime}.</p>
            </div>
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
                        <RegistForm />
                    </div>
                </section>
            </div>
        </>
    );
}

