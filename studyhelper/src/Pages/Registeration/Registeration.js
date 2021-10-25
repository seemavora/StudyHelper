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

